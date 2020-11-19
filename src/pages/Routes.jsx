import React from "react";
import { Router } from "@reach/router";

import WeatherAPI from "./WeatherAPI";
import OneQuestionQuiz from "./OneQuestionQuiz";
import FootballTeamManager from "./FootballTeamManager";

const Routes = () => {
    return (
        <Router>
            <WeatherAPI path="/" />
            <OneQuestionQuiz path="quiz" />
            <FootballTeamManager path="footballmanager" />
        </Router>
    )
}

export default Routes;