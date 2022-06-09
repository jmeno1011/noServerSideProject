import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
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

    // console.log("currentMonth::", currentMonth);

    const endDay = new Date(currentYear, currentMonth + 1, 0);
    const nextDate = endDay.getDate();
    const nextDay = endDay.getDay();
    const nextMonth = endDay.getMonth();

    const preCalendar = [];
    // 지난달 표시할 내용
    // 요일은 일요일 부터 시작
    for (let i = preDate - preDay; i <= preDate; i++) {
      // console.log("i::", typeof i);
      preCalendar.push({ m: "p", d: i });
      // setPreCalendar((preCalendar) => [...preCalendar, i]);
    }
    // console.log("preCalendar::", preCalendar);

    const currentCalendar = [];
    // 이번달 표시할 내용
    for (let i = 1; i <= nextDate; i++) {
      // console.log("i:::", i);
      currentCalendar.push({ m: "c", d: i });
      // setCurrentCalendar((currentCalendar) => [...currentCalendar, i]);
    }
    // 다음달 표시 내용
    const nextCalendar = [];
    for (let i = 1; i < (nextDay % 7 === 0 ? 0 : 7 - nextDay) + 7; i++) {
      // console.log("i::", i);
      nextCalendar.push({ m: "n", d: i });
      // setNextCalendar((nextCalendar) => [...nextCalendar, i]);
    }

    setAllCalendar((allCalendar) =>
      allCalendar.concat(preCalendar, currentCalendar, nextCalendar)
    );
  };

  // const [preCalendar, setPreCalendar] = useState([]);
  // const [currentCalendar, setCurrentCalendar] = useState([]);
  // const [nextCalendar, setNextCalendar] = useState([]);
  const [current, setCurrent] = useState();
  const [allCalendar, setAllCalendar] = useState([]);
  const [weeks, setWeeks] = useState([
    "일",
    "월",
    "화",
    "수",
    "목",
    "금",
    "토",
  ]);

  useEffect(() => {
    setDates();

    return () => {
      // setPreCalendar([]);
      // setCurrentCalendar([]);
      // setNextCalendar([]);
      setAllCalendar([]);
    };
  }, []);

  // console.log("currentCalendar::", currentCalendar);
  // console.log("nextCalendar::", nextCalendar);
  // console.log("allCalendar::", allCalendar);

  return (
    <div>
      Calendar
      <br />
      <br />
      <div
        style={{
          background: "#1F1F1F",
          padding: "8px 16px",
          width: "fit-content",
        }}
      >
        <CalendarHeader>
          <div>2022년 6월</div>
          <div>
            <Icon icon="charm:chevron-up" />
            <Icon icon="charm:chevron-down" />
          </div>
        </CalendarHeader>
        <div style={{ display: "flex" }}>
          {weeks.map((value) => (
            <Day key={value} color={"white"} border={"none"} fs={"12px"}>
              {value}
            </Day>
          ))}
        </div>
        {Array(Math.floor(allCalendar.length / 7))
          .fill()
          .map((_, i) => (
            <div key={`a_${i}`} style={{ display: "flex" }}>
              {allCalendar.slice(7 * i, 7 * i + 7).map((v, i) => (
                <Day key={i} color={v.m === "c" ? "white" : "gray"}>
                  {v.d}
                </Day>
              ))}
            </div>
          ))}
      </div>
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

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 16px;
  svg {
    width: 30px;
    height: 30px;
    margin-left: 8px;
    color: rgb(165, 165, 165);
    cursor: pointer;
  }
  svg:hover {
    color: white;
  }
`;

const Day = styled.div`
  margin: 2px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fs || "14px"};
  /* border-radius: 8px; */
  color: ${(props) => props.color || "black"};
  cursor: pointer;
  &:hover {
    border: ${(props) => props.border || "1px solid white"};
  }
`;
