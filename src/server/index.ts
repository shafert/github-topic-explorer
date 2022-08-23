import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();

app.use(express.static("build"));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const port = 3001;

app.listen(port, () => {
  console.log(`Server now listening on port: ${port}`);
});

app.get("/tasks/:term", function (req, res) {
  const axiosInstance = axios.create({
    baseURL: "https://api.github.com",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
    },
  });

  axiosInstance
    .post("/graphql", {
      query: `
               query TOPIC_QUERY($term: String!){
                 topic(name: $term){
                   name,
                   stargazerCount,
                   relatedTopics {
                     name,
                     stargazerCount
                   }
                 }
               }
             `,
      variables: {
        term: req.params.term,
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(error.response.status).send({
        message: error.response.statusText,
      });
    });
});
