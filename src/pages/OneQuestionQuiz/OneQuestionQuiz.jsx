import React from "react";
import styles from "./OneQuestionQuiz.module.scss";
import Quiz from "./../../components/Quiz";

const OneQuestionQuiz = () => {
  return (
    <section className={styles.quizContainer}>
      <Quiz />
    </section>
  );
};

export default OneQuestionQuiz;
