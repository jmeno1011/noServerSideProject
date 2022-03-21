import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./css/styles.module.css";
import { Icon } from "@iconify/react";

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
            console.log(res.data);
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
      <div>
        <div
          style={{
            display: "flex",
            // background: "white",
            border: "1px solid rgba(0,0,0,.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "45px",
              color: "darkred",
              border: "1px solid rgba(0,0,0,.06)",
            }}
          >
            <Icon icon="el:map-marker" />
          </div>
          <div>
            <p style={{ margin: "0.5rem" }}>위도 : {location.lat}</p>
            <p style={{ margin: "0.5rem" }}>경도 : {location.lon}</p>
          </div>
        </div>

        {data && data ? (
          <>
            <div
              style={{
                display: "flex",
                background: "#00A6CA",
                padding: "0.5rem 0.8rem",
                borderRadius: "1rem",
              }}
            >
              <div style={{ width: "150px" }}>
                <h1 style={{ margin: 0, marginTop: "1rem" }}>
                  {Math.round(data.main.feels_like - 273.15)}℃
                </h1>
                <p style={{ margin: 0 }}>{data.weather[0].description}</p>
              </div>
              <div
                style={{
                  fontSize: "70px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {data.weather[0].main === "Clouds" ? (
                  <Icon icon="akar-icons:cloud" />
                ) : (
                  ""
                )}
              </div>
            </div>
            <p>위치 : {data.name}</p>
            <p>체감온도 : </p>
            <p>현재기온 : {Math.round(data.main.temp - 273.15)}℃</p>
            <p>습도 : {data.main.humidity}%</p>
            <p>날씨 : {data.weather[0].main}</p>
            <p>날씨 설명 : {data.weather[0].description}</p>
            {data.weather[0].icon}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
// new_shap_values = [ 0.040970993041992185, 0.04296798706054687, 0.010036341349283856, 0.013927332560221356, 0.07180010477701823 ]
