import React, { useEffect, useState } from "react";

// components
import { Search } from "./components/Search";
import { TopicDetails } from "./components/TopicDetails";
import { CircularProgress } from "@material-ui/core";
import { toast, ToastContainer } from "react-toastify";

// functions
import { getTasks } from "./functions/functions";

// styles
import "./App.css";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme>(() =>
  createStyles({
    container: {
      width: "100%",
      maxWidth: "500px",
    },
    loadingWrapper: {
      width: "100%",
      color: "#FFF",
    },
    noRelatedTopics: {
      fontSize: "20px",
    },
    stargazer: {
      color: "#FFC83D",
    },
  })
);

function App() {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("react");
  const [topic, setTopic] = useState({
    name: "",
    stargazerCount: 0,
    relatedTopics: [],
  });

  useEffect(() => {
    async function fetchData() {
      const result = await getTasks(term);
      console.log(result);
      setTopic(result.data.data.topic);
    }

    setLoading(true);
    fetchData()
      .catch((error) => {
        toast.error("Error Retrieving Data");
      })
      .then(() => {
        setLoading(false);
      });
  }, [term]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const checkEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      doSearch();
    }
  };

  const doSearch = () => {
    async function fetchData() {
      const result = await getTasks(searchTerm);
      setTopic(result.data.data.topic);
    }

    if (searchTerm) {
      setSearching(true);
      fetchData()
        .catch(() => {
          toast.error("Error Retrieving Data");
        })
        .then(() => {
          setSearching(false);
        });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <div className={classes.loadingWrapper}>
            <CircularProgress data-testid="spinner" color={"inherit"} />
          </div>
        ) : (
          <div className={classes.container}>
            {searching ? (
              <div className={classes.loadingWrapper}>
                <CircularProgress color={"inherit"} />
              </div>
            ) : (
              <TopicDetails
                name={topic.name}
                stargazerCount={topic.stargazerCount}
                relatedTopics={topic.relatedTopics}
                setTerm={setTerm}
              />
            )}

            <Search
              searchTerm={searchTerm}
              onChange={onChange}
              checkEnter={checkEnter}
              doSearch={doSearch}
            />
          </div>
        )}
      </header>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
