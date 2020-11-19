import React from "react";
import styles from "./Header.module.scss";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <h2>Weather App</h2>
      </Link>
      <Link to="quiz" className={styles.link}>
        <h2>One Question Quiz</h2>
      </Link>
      <Link to="footballmanager" className={styles.link}>
        <h2>Football Team Manager</h2>
      </Link>
    </header>
  );
};

export default Header;
