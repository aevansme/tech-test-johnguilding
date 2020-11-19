import React, { useEffect } from "react";
import styles from "./WeatherAPI.module.scss";

const WeatherAPI = () => {

  useEffect(() => {
    fetchWeather();
  }, [])

  // APIKEY: 1acbd84f93b9bf41a917d5cf13ed69eb

  const fetchWeather = () => {
    console.log('working');
    fetch("api.openweathermap.org/data/2.5/weather?q={London}&appid={1acbd84f93b9bf41a917d5cf13ed69eb}")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
  }

  return (
    <>
      <section className={styles.cards}>

        <article className={styles.card}>
          <div className={styles.container}>
            <div className={styles.img}>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>London</h2>
              <h3>Temperature</h3>
              <h4>Humidity</h4>
              <h4>Maximum Temperature At The Moment</h4>
              <h4>Minimum Temperature At The Moment</h4>
            </div>
          </div>
        </article>

        <article className={styles.card}>
          <div className={styles.container}>
            <div className={styles.img}>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>Bristol</h2>
              <h3>Temperature</h3>
              <h4>Humidity</h4>
              <h4>Maximum Temperature At The Moment</h4>
              <h4>Minimum Temperature At The Moment</h4>
            </div>
          </div>
        </article>

        <article className={styles.card}>
          <div className={styles.container}>
            <div className={styles.img}>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>Rome</h2>
              <h3>Temperature</h3>
              <h4>Humidity</h4>
              <h4>Maximum Temperature At The Moment</h4>
              <h4>Minimum Temperature At The Moment</h4>
            </div>
          </div>
        </article>
        
      </section>
    </>
  );
};

export default WeatherAPI;
