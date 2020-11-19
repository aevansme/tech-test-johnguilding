import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("card tests", () => {
  it("should render", () => {
    expect(render(<Card />)).toBeTruthy();
  });
});
