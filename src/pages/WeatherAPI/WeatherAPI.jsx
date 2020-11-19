import React, { useState, useEffect } from "react";
import styles from "./WeatherAPI.module.scss";
import Card from "../../components/Card";

const WeatherAPI = () => {

  const [ london, setLondon] = useState(null);
  const [ rome, setRome ] = useState(null);
  const [ bristol, setBristol ] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, [])

  // APIKEY: 1acbd84f93b9bf41a917d5cf13ed69eb

  const fetchWeather = () => {
    fetch("http://api.openweathermap.org/data/2.5/group?id=2643744,4749005,4219762&appid=1acbd84f93b9bf41a917d5cf13ed69eb")
    .then((response) => response.json())
    .then((response) => {
      
      const [london, bristol, rome] = response.list;
      
      setLondon(london);
      setBristol(bristol]);
      setRome(rome);
    })
  }

  return (
    <>
      <section className={styles.cards}>
        {london && rome && bristol ? <Card london={london} rome={rome} bristol={bristol}/> : <p>loading cards</p>}
      </section>
    </>
  );
};

export default WeatherAPI;
