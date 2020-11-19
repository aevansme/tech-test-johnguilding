import React from "react";
import styles from "./MakeTeam.module.scss";
import data from "./../../assets/data";

const MakeTeam = () => {

  const players = data.map(player => (
    // console.log(player.name);
    <div className={styles.playerCard}>
      <h4>{player.name}</h4>
      <button>Add to Team</button>
    </div>
  ))

  return (
    <>
      <h1 className={styles.title}>Create Your Team</h1>
      <section className={styles.cards}>
        {players}
      </section>
    </>
  );
};

export default MakeTeam;
