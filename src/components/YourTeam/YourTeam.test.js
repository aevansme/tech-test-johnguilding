import React from "react";
import { render } from "@testing-library/react";
import YourTeam from "./YourTeam";

describe("YourTeam tests", () => {
  it("should render", () => {
    expect(render(<YourTeam />)).toBeTruthy();
  });
});
