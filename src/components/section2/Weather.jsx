import React, { useEffect, useState } from "react";
import axios from "axios";
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
        {data && data ? (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                background: "rgb(109 213 235)",
                padding: "0.5rem 0.8rem",
                borderRadius: "1rem",
                alignItems: "center",
                width: "320px",
              }}
            >
              <div>{data.name}</div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div style={{ width: "150px" }}>
                  <h1 style={{ margin: 0, marginTop: "1rem" }}>
                    {Math.round(data.main.temp - 273.15)}℃
                  </h1>
                  <p style={{ margin: 0 }}>{data.weather[0].description}</p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.75rem",
                      letterSpacing: "0.7px",
                      fontWeight: "700",
                      color: "rgba(0,0,0,0.7)",
                    }}
                  >
                    humidity: {data.main.humidity}%
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt=""
                  />
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1.5rem",
                    color: "darkred",
                  }}
                >
                  <Icon icon="el:map-marker" />
                </div>
                {/* <div> */}
                <p style={{ margin: "0.5rem" }}>lat : {location.lat}</p>/
                <p style={{ margin: "0.5rem" }}>lon : {location.lon}</p>
                {/* </div> */}
              </div>
            </div>
            <p>체감온도 : {Math.round(data.main.feels_like - 273.15)}℃ </p>
            <p>습도 : {data.main.humidity}%</p>
            <p>최저 온도: {Math.round(data.main.temp_min - 273.15)}℃</p>
            <p>최저 온도: {Math.round(data.main.temp_max - 273.15)}℃</p>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
// new_shap_values = [ 0.040970993041992185, 0.04296798706054687, 0.010036341349283856, 0.013927332560221356, 0.07180010477701823 ]
