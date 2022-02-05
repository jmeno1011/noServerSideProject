import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./css/styles.module.css";

export function Weather() {
  const [location, setLocation] = useState({ lat: 0, lon: 0 });
  const [data, setData] = useState();
  const getGeolocation = () => {
    if ("geolocation" in navigator) {
      /* 위치정보 사용 가능 */
      // console.log(navigator);
      navigator.geolocation.getCurrentPosition(async (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        await axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_WEATHER_API}`
          )
          .then((res) => {
            setData(res.data);
          });
      });
    } else {
      return alert("위치정보 사용 불가능");
    }
  };

  useEffect(() => {
    getGeolocation();
  }, []);
  return (
    <>
      <div className={styles.app}>
        <div>
          <p>위도 : {location.lat}</p>
          <p>경도 : {location.lon}</p>

          {data && data ? (
            <>
              <p>위치 : {data.name}</p>
              <p>체감온도 : {Math.round(data.main.feels_like - 273.15)}℃</p>
              <p>현재기온 : {Math.round(data.main.temp - 273.15)}℃</p>
              <p>습도 : {data.main.humidity}%</p>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
