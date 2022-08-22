import { render, screen } from "@testing-library/react";
import TopicDetails from "./TopicDetails";
import React from "react";

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
  const reactElement = screen.getAllByText(/react/i);
  // topic title
  expect(reactElement[0]).toBeInTheDocument();
  // react-native listing
  expect(reactElement[1]).toBeInTheDocument();

  const reactStargazerElement = screen.getByText(/76,447/i);
  expect(reactStargazerElement).toBeInTheDocument();

  // const angularElement = screen.getByText(/angular/i);
  // expect(angularElement).toBeInTheDocument();
  //
  // const angularStargazerElement = screen.getByText(/45,022/i);
  // expect(angularStargazerElement).toBeInTheDocument();
  //
  // const reactNativeElement = screen.getByText(/react-native/i);
  // expect(reactNativeElement).toBeInTheDocument();
  //
  // const reactNativeStargazerElement = screen.getByText(/25,767/i);
  // expect(reactNativeStargazerElement).toBeInTheDocument();
  //
  // const vueElement = screen.getByText(/vue/i);
  // expect(vueElement).toBeInTheDocument();
  //
  // const vueStargazerElement = screen.getByText(/50,159/i);
  // expect(vueStargazerElement).toBeInTheDocument();
});
