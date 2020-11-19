import React, { useState, useEffect } from "react";
import styles from "./Quiz.module.scss";
import { useForm } from "react-hook-form";

const Quiz = () => {

  const { register, handleSubmit } = useForm();
  const [ input, setInput ] = useState(null);
  const [ answer, setAnswer ] = useState(null)

  const onSubmit = (data) => {
    const userInput = data.answer;
    console.log(userInput);
    setInput(userInput)
    console.log(userInput);
  }

  useEffect(() => {
    if(input == 4) {
      setAnswer(<h2>Correct! The answer is 4</h2>)
    } else if (input === null) {
      setAnswer(<h2></h2>)
    } else {
      setAnswer(<h2>Incorrect!</h2>)
    }
  }, [input])


  return (
    <>
      <div className={styles.quiz}>
        <h2>What is 2 X 2?</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="answer"></label>
          <input type="text" ref={register} id="answer" name="answer" placeholder="enter your answer here" />
        <input type="submit" className={styles.submit}/>
        </form>
        <div className={styles.answer}>
          {answer}
        </div>
      </div>
    </>
  );
};

export default Quiz;
