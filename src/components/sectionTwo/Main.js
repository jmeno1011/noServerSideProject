import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./css/styles.module.css";

export function Main() {
  const [location, setLocation] = useState({ lat: 0, lon: 0 });

  const getGeolocation = () => {
    if ("geolocation" in navigator) {
      /* 위치정보 사용 가능 */
      console.log(navigator);
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("getgeo");
         setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      return alert("위치정보 사용 불가능");
    }
  };

  const weather = async () => {
    console.log(location);
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_WEATHER_API}`
      )
      .then((res) => console.log(res.data));
  };

  useEffect(() => {
    getGeolocation();
    weather();
  }, []);

  return (
    <div className={styles.app}>
      <p>main</p>
      <div>
        <p>위도 : {location.lat}</p>
        <p>경도 : {location.lon}</p>
      </div>
    </div>
  );
}
