import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Weather App</h2>
      <h2>One Question Quiz</h2>
      <h2>Football Team Manager</h2>
    </header>
  );
};

export default Header;
