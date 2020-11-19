import React from "react";
import styles from "./Quiz.module.scss";
import { useForm } from "react-hook-form";

const Quiz = () => {

  const { submit, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <div className={styles.quiz}>
        <h2>What is 2 X 2?</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="question"></label>
          <input type="text" ref={submit} name="question" placeholder="enter your answer here" />
        <button type="submit">Submit</button>
        </form>
        <div className={styles.answer}></div>
      </div>
    </>
  );
};

export default Quiz;
