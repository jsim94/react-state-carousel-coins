import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Coin from "./Coin";

it("should render", function () {
  render(<Coin />);
});

it("should match snapshot", function () {
  const { asFragment } = render(<Coin />);
  expect(asFragment()).toMatchSnapshot();
});
