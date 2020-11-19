import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {

  const {london, rome, bristol} = props;

  console.log(rome);

  const londonTemp = `${london.main.temp - 273.15}`
  const londonTempMax = `${london.main.temp_max - 273.15}`
  const londonTempMin = `${london.main.temp_min - 273.15}`
  const romeTemp = `${rome.main.temp - 273.15}`
  const romeTempMax = `${rome.main.temp_max - 273.15}`
  const romeTempMin = `${rome.main.temp_min - 273.15}`
  const bristolTemp = `${bristol.main.temp - 273.15}`
  const bristolTempMax = `${bristol.main.temp_max - 273.15}`
  const bristolTempMin = `${bristol.main.temp_min - 273.15}`

  return (
    <>
        <article className={styles.card}>
          <div className={styles.container}>
            <div className={styles.img}>
              <div className={styles.circle}></div>
              <img src={`http://openweathermap.org/img/wn/${london.weather[0].icon}@2x.png`} alt=""/>
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>{london.name}</h2>
              <h3>Temperature: {londonTemp.substring(0, 3)} C</h3>
              <h4>Humidity: {london.main.humidity}</h4>
              <h4>Maximum Temperature: {londonTempMax.substring(0, 3)} C</h4>
              <h4>Minimum Temperature: {londonTempMin.substring(0, 3)} C</h4>
            </div>
          </div>
        </article>

        <article className={styles.card}>
          <div className={styles.container}>
            <div className={styles.img}>
              <div className={styles.circle}></div>
              <img src={`http://openweathermap.org/img/wn/${rome.weather[0].icon}@2x.png`} alt=""/>
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>{rome.name}</h2>
              <h3>Temperature: {romeTemp.substring(0, 3)} C</h3>
              <h4>Humidity: {rome.main.humidity}</h4>
              <h4>Maximum Temperature: {romeTempMax.substring(0, 3)} C</h4>
              <h4>Minimum Temperature: {romeTempMin.substring(0, 3)} C</h4>
            </div>
          </div>
        </article>

        <article className={styles.card}>
          <div className={styles.container}>
            <div className={styles.img}>
              <div className={styles.circle}></div>
              <img src={`http://openweathermap.org/img/wn/${bristol.weather[0].icon}@2x.png`} alt=""/>
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>{bristol.name}</h2>
              <h3>Temperature: {bristolTemp.substring(0, 3)} C</h3>
              <h4>Humidity: {bristol.main.humidity}</h4>
              <h4>Maximum Temperature: {bristolTempMax.substring(0, 3)} C</h4>
              <h4>Minimum Temperature: {bristolTempMin.substring(0, 3)} C</h4>
            </div>
          </div>
        </article>
    </>
  );
};

export default Card; 
