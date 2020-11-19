import React from "react";
import { render } from "@testing-library/react";
import OneQuestionQuiz from "./OneQuestionQuiz";

describe("OneQuestionQuiz tests", () => {
  it("should render", () => {
    expect(render(<OneQuestionQuiz />)).toBeTruthy();
  });
});
