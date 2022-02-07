import axios from "axios";
import React, { useEffect, useState } from "react";
import { geolocationOptions } from "../../constants/geolocationOptions";
import useCurrentPosition from "../../hook/useCurrentPosition";

export function Weather2() {
  const { location: currentLocation, error: currentError } =
    useCurrentPosition(geolocationOptions);
  const [data, setData] = useState();
  const fetchData = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          currentLocation && currentLocation.latitude
        }&lon=${currentLocation && currentLocation.longitude}&appid=${
          process.env.REACT_APP_WEATHER_API
        }`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };
  useEffect(() => {
    // fetchData();
  }, []);
  console.log(currentLocation);
  return (
    <>
      <div>위도 : {currentLocation && currentLocation.latitude}</div>
      <div>경도 : {currentLocation && currentLocation.longitude}</div>
      <div>위치 : {data && data.name}</div>
      <div></div>
      <div></div>
    </>
  );
}
