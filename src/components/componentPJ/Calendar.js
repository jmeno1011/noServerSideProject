import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Calendar = () => {
  // const [now, setNow] = useState(new Date());

  const setDates = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    const startDay = new Date(currentYear, currentMonth, 0);
    const preDate = startDay.getDate();
    const preDay = startDay.getDay();
    const preMonth = startDay.getMonth();

    console.log("currentMonth::", currentMonth);

    const endDay = new Date(currentYear, currentMonth + 1, 0);
    const nextDate = endDay.getDate();
    const nextDay = endDay.getDay();
    const nextMonth = endDay.getMonth();

    // 지난달 표시할 내용
    // 요일은 일요일 부터 시작
    for (let i = preDate - preDay; i <= preDate; i++) {
      // console.log("i::", typeof i);
      setPreCalendar((preCalendar) => [...preCalendar, i]);
    }

    // 이번달 표시할 내용
    for (let i = 1; i <= nextDate; i++) {
      // console.log("i:::", i);
      setCurrentCalendar((currentCalendar) => [...currentCalendar, i]);
    }
    // 다음달 표시 내용
    for (let i = 1; i < (nextDay % 7 === 0 ? 0 : 7 - nextDay); i++) {
      // console.log("i::", i);
      setNextCalendar((nextCalendar) => [...nextCalendar, i]);
    }
  };

  const getDay = (n) => {
    switch (n % 7) {
      case 0:
        return "일";
      case 1:
        return "월";
      case 2:
        return "화";
      case 3:
        return "수";
      case 4:
        return "목";
      case 5:
        return "금";
      case 6:
        return "토";
    }
  };
  const [preCalendar, setPreCalendar] = useState([]);
  const [currentCalendar, setCurrentCalendar] = useState([]);
  const [nextCalendar, setNextCalendar] = useState([]);

  useEffect(() => {
    setDates();

    return () => {
      setPreCalendar([]);
      setCurrentCalendar([]);
      setNextCalendar([]);
    };
  }, []);

  console.log("preCalendar::", preCalendar);
  console.log("currentCalendar::", currentCalendar);
  console.log("nextCalendar::", nextCalendar);

  return (
    <div>
      Calendar
      {/* <h5>startDay : {startDay.toString()}</h5>
      <h5>
        이전달의 마지막날：{preMonth + 1}월 {preDate}일 {getDay(preDay)}요일
      </h5>
      <h5>
        이번달의 마지막날 : {nextMonth + 1}월 {nextDate}일 {getDay(nextDay)}요일
      </h5> */}
      <Day>1</Day>
      <div
        style={{
          display: "flex",
          background: "#1F1F1F",
          padding: "0 16px",
          width: "fit-content",
        }}
      >
        {preCalendar.length !== 0
          ? preCalendar.map((value) => (
              <Day key={`pre_${value}`} color={"gray"}>
                {value}
              </Day>
            ))
          : ""}
      </div>
      <Grid>
        <div>
          <div>col1</div>
          <div>col2</div>
          <div>col3</div>
          <div>col4</div>
          <div>col5</div>
          <div>col6</div>
          <div>col7</div>
        </div>
        <div>
          <div>col1</div>
          <div>col2</div>
          <div>col3</div>
          <div>col4</div>
          <div>col5</div>
          <div>col6</div>
          <div>col7</div>
        </div>
        <div>
          <div>col1</div>
          <div>col2</div>
          <div>col3</div>
          <div>col4</div>
          <div>col5</div>
          <div>col6</div>
          <div>col7</div>
        </div>
        <div>
          <div>col1</div>
          <div>col2</div>
          <div>col3</div>
          <div>col4</div>
          <div>col5</div>
          <div>col6</div>
          <div>col7</div>
        </div>
        <div>
          <div>col1</div>
          <div>col2</div>
          <div>col3</div>
          <div>col4</div>
          <div>col5</div>
          <div>col6</div>
          <div>col7</div>
        </div>
        <div>
          <div>col1</div>
          <div>col2</div>
          <div>col3</div>
          <div>col4</div>
          <div>col5</div>
          <div>col6</div>
          <div>col7</div>
        </div>
        <div>
          <div>col1</div>
          <div>col2</div>
          <div>col3</div>
          <div>col4</div>
          <div>col5</div>
          <div>col6</div>
          <div>col7</div>
        </div>
      </Grid>
    </div>
  );
};

export default Calendar;

const Grid = styled.div`
  width: fit-content;
  display: grid;
  /* grid-template-columns: repeat(7, 50px); */
  grid-template-rows: repeat(7, 50px);
  border: 1px solid black;
  > div {
    border-bottom: 1px solid black;
    display: grid;
    grid-template-columns: repeat(7, 50px);
    > div {
      border-right: 1px solid black;
    }
    > div:last-child {
      border-right: none;
    }
  }
  > div:last-child {
    border-bottom: none;
  }
`;

const Day = styled.div`
  margin: 2px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 8px;
  /* background-color: white; */
  color: ${(props) => props.color || "black"};
`;
