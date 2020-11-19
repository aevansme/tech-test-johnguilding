import React from "react";
import styles from "./FootballTeamManager.module.scss";
import MakeTeam from "./../../components/MakeTeam";
import YourTeam from "./../../components/YourTeam";

const FootballTeamManager = () => {
  return (
    <section className={styles.dashboard}>
      <MakeTeam />
      <YourTeam />
    </section>
  );
};

export default FootballTeamManager;
