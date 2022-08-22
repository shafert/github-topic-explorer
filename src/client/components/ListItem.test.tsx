import { render, screen } from "@testing-library/react";
import React from "react";
import { ListItem } from "./ListItem";
import userEvent from "@testing-library/user-event";

describe("Search", () => {
  it("should render Topic title and stargazerCount", () => {
    const topic = {
      name: "angular",
      stargazerCount: 45022,
    };
    const setTerm = () => {};
    render(
      <ListItem
        name={topic.name}
        stargazerCount={topic.stargazerCount}
        setTerm={setTerm}
      />
    );
    const angularElement = screen.getByText(/angular/i);
    expect(angularElement).toBeInTheDocument();

    const angularStargazerElement = screen.getByText(/45,022/i);
    expect(angularStargazerElement).toBeInTheDocument();
  });
  it("should trigger setTerm when clicked", () => {
    const topic = {
      name: "angular",
      stargazerCount: 45022,
    };
    let clicked = false;
    let term = "";
    const setTerm = (name: string) => {
      clicked = true;
      term = name;
    };
    render(
      <ListItem
        name={topic.name}
        stargazerCount={topic.stargazerCount}
        setTerm={setTerm}
      />
    );

    const listItemEl = screen.getByTestId("list-item");
    expect(listItemEl).toBeInTheDocument();
    userEvent.click(listItemEl);
    expect(clicked).toBe(true);
    expect(term).toBe("angular");
  });
});
