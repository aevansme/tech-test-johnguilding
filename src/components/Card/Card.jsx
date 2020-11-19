import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {

  const {london, rome, bristol} = props;

  console.log(rome);

  return (
    <>
        <article className={styles.card}>
          <div className={styles.container}>
            <div className={styles.img}>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>{london.name}</h2>
              <h3>Temperature: {london.main.temp}</h3>
              <h4>Humidity: {london.main.humidity}</h4>
              <h4>Maximum Temperature: {london.main.temp_max}</h4>
              <h4>Minimum Temperature: {london.main.temp_min}</h4>
            </div>
          </div>
        </article>

        <article className={styles.card}>
          <div className={styles.container}>
            <div className={styles.img}>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>{rome.name}</h2>
              <h3>Temperature: {rome.main.temp}</h3>
              <h4>Humidity: {rome.main.humidity}</h4>
              <h4>Maximum Temperature: {rome.main.temp_max}</h4>
              <h4>Minimum Temperature: {rome.main.temp_min}</h4>
            </div>
          </div>
        </article>

        <article className={styles.card}>
          <div className={styles.container}>
            <div className={styles.img}>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>{bristol.name}</h2>
              <h3>Temperature: {bristol.main.temp}</h3>
              <h4>Humidity: {bristol.main.humidity}</h4>
              <h4>Maximum Temperature:{bristol.main.temp_max}</h4>
              <h4>Minimum Temperature: {bristol.main.temp_min}</h4>
            </div>
          </div>
        </article>
    </>
  );
};

export default Card; 
