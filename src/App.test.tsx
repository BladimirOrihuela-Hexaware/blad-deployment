import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders my Repo link", () => {
  render(<App />);
  const linkElement = screen.getByText("Checkout the repo");
  expect(linkElement).toBeInTheDocument();
});
