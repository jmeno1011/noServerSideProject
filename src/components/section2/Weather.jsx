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
      {data && data ? (
        <>
          <SectionWrap>
            <PicSection>
              <header>{data.name}</header>
              <WeatherAticle>
                <div style={{ width: "150px" }}>
                  <h1 className="m-0 mt-1">
                    {Math.round(data.main.temp - 273.15)}℃
                  </h1>
                  <p className="m-0">{data.weather[0].description}</p>
                  <Humidty>humidity: {data.main.humidity}%</Humidty>
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
              </WeatherAticle>
              <WeatherFooter>
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
                <p className="m-05">lat : {location.lat}</p>/
                <p className="m-05">lon : {location.lon}</p>
                {/* </div> */}
              </WeatherFooter>
            </PicSection>
          </SectionWrap>
          <p>체감온도 : {Math.round(data.main.feels_like - 273.15)}℃ </p>
          <p>최저 온도: {Math.round(data.main.temp_min - 273.15)}℃</p>
          <p>최저 온도: {Math.round(data.main.temp_max - 273.15)}℃</p>
        </>
      ) : (
        ""
      )}
    </>
  );
}

const SectionWrap = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 1023px) {
    padding: 0 1rem;
  }
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const PicSection = styled.section`
  width: 350px;
  padding: 0.5rem 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(109, 213, 235);
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`;

const WeatherAticle = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 1023px) {
    justify-content: center;
  }
`;
const Humidty = styled.p`
  margin: 0;
  font-size: 0.75rem;
  letter-spacing: 0.7px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.7);
`;
const WeatherFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1023px) {
    justify-content: center;
  }
`;
