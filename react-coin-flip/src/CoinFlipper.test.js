import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CoinFlipper from "./CoinFlipper";

it("should render", function () {
  render(<CoinFlipper />);
});

it("should match snapshot", function () {
  const { asFragment } = render(<CoinFlipper />);
  expect(asFragment()).toMatchSnapshot();
});

describe("Pressing flip button", () => {
  beforeEach(() => {
    jest.spyOn(Math, "random").mockReturnValueOnce(0.25).mockReturnValueOnce(0.75);
  });

  afterEach(function () {
    Math.random.mockRestore();
  });

  it("should return tails then heads", () => {
    const { getByTestId } = render(<CoinFlipper />);

    const coin = getByTestId("coin");
    const flipButton = getByTestId("flip-button");

    fireEvent.click(flipButton);
    expect(coin).toHaveStyle({ background: "red" });

    fireEvent.click(flipButton);
    expect(coin).toHaveStyle({ background: "green" });
  });
});
