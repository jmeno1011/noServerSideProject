import React, { useEffect, useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import styled from "styled-components";

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
            <SectionWrap>
              <PicSection>
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
              </PicSection>
            </SectionWrap>
            <p>체감온도 : {Math.round(data.main.feels_like - 273.15)}℃ </p>
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

const PicSection = styled.section`
  width: 320px;
  padding: 0.5rem 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(109, 213, 235);
`;

const SectionWrap = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
