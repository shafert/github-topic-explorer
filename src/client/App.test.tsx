import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { TopicDetails } from "./components/TopicDetails";

test("renders spinner on load", () => {
  render(<App />);
  const linkElement = screen.getByTestId("spinner");
  expect(linkElement).toBeInTheDocument();
});

test("renders Topic", () => {
  const topic = {
    name: "react",
    stargazerCount: 76447,
    relatedTopics: [
      {
        name: "angular",
        stargazerCount: 45022,
      },
      {
        name: "react-native",
        stargazerCount: 25767,
      },
      {
        name: "vue",
        stargazerCount: 50159,
      },
    ],
  };
  const setTerm = () => {};
  render(
    <TopicDetails
      name={topic.name}
      stargazerCount={topic.stargazerCount}
      relatedTopics={topic.relatedTopics}
      setTerm={setTerm}
    />
  );
  const linkElement = screen.getAllByText(/react/i);
  expect(linkElement[0]).toBeInTheDocument();
  expect(linkElement[1]).toBeInTheDocument();
});

//https://fek.io/blog/how-to-add-unit-testing-to-express-using-jest
