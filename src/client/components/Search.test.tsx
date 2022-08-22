import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

describe("Search", () => {
  it("should have 'Search...' displayed in the input on empty searchTerm", () => {
    const onChange = () => {};
    const checkEnter = () => {};
    const doSearch = () => {};
    render(
      <Search
        searchTerm={""}
        onChange={onChange}
        checkEnter={checkEnter}
        doSearch={doSearch}
      />
    );
    const linkElement = screen.getByPlaceholderText("Search...");
    expect(linkElement).toBeInTheDocument();
  });
  it("should have 'react' in the input value when typed", () => {
    let value = "";
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      value += e.target.value;
    };
    const checkEnter = () => {};
    const doSearch = () => {};
    render(
      <Search
        searchTerm={""}
        onChange={onChange}
        checkEnter={checkEnter}
        doSearch={doSearch}
      />
    );

    const inputEl = screen.getByPlaceholderText("Search...");

    userEvent.type(inputEl, "react");
    expect(inputEl).toBeInTheDocument();
    expect(value).toBe("react");
  });
  it("should call doSearch when button is pressed", () => {
    let searched = false;
    const onChange = () => {};
    const checkEnter = () => {};
    const doSearch = () => {
      searched = true;
    };
    render(
      <Search
        searchTerm={""}
        onChange={onChange}
        checkEnter={checkEnter}
        doSearch={doSearch}
      />
    );

    const buttonEl = screen.getByTestId("search-button");
    expect(buttonEl).toBeInTheDocument();
    userEvent.click(buttonEl);
    expect(searched).toBe(true);
  });
});
