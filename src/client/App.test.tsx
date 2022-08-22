import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render spinner on load", () => {
    render(<App />);
    const linkElement = screen.getByTestId("spinner");
    expect(linkElement).toBeInTheDocument();
  });
});
