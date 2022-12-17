import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

it("should render", function () {
  render(<App />);
});

it("should match snapshot", function () {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
