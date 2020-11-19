import React from "react";
import { render } from "@testing-library/react";
import FootballTeamManager from "./FootballTeamManager";

describe("FootballTeamManager tests", () => {
  it("should render", () => {
    expect(render(<FootballTeamManager />)).toBeTruthy();
  });
});
