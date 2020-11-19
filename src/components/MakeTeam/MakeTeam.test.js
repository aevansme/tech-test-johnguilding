import React from "react";
import { render } from "@testing-library/react";
import MakeTeam from "./MakeTeam";

describe("MakeTeam tests", () => {
  it("should render", () => {
    expect(render(<MakeTeam />)).toBeTruthy();
  });
});
