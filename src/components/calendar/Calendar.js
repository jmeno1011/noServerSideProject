import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const Calendar = () => {
  const setDates = () => {
    const currentYear = current.getFullYear();
    const currentMonth = current.getMonth();

    const startDay = new Date(currentYear, currentMonth, 0);
    const preDate = startDay.getDate();
    const preDay = startDay.getDay();
    const preMonth = startDay.getMonth();

    const endDay = new Date(currentYear, currentMonth + 1, 0);
    const nextDate = endDay.getDate();
    const nextDay = endDay.getDay();
    const nextMonth = endDay.getMonth();

    const preCalendar = [];
    // 지난달 표시할 내용
    // 요일은 일요일 부터 시작

    for (let i = preDate - preDay; i <= preDate; i++) {
      preCalendar.push({ m: `2022-${preMonth + 1}-${i}`, d: i });
    }
    const currentCalendar = [];
    for (let i = 1; i <= nextDate; i++) {
      currentCalendar.push({ m: `2022-${currentMonth + 1}-${i}`, d: i });
    }
    // 다음달 표시 내용
    const nextCalendar = [];
    for (let i = 1; i < (nextDay % 7 === 0 ? 0 : 7 - nextDay) + 7; i++) {
      nextCalendar.push({ m: `2022-${nextMonth + 2}-${i}`, d: i });
    }

    setAllCalendar((allCalendar) =>
      allCalendar.concat(preCalendar, currentCalendar, nextCalendar)
    );
  };

  const [current, setCurrent] = useState(new Date());
  const [allCalendar, setAllCalendar] = useState([]);
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];

  const [toggle, setToggle] = useState();

  useEffect(() => {
    setDates();

    return () => {
      setAllCalendar([]);
    };
  }, [current]);

  const increase = () => {
    setCurrent(new Date(current.getFullYear(), current.getMonth() + 1, 1));
  };
  const decrease = () => {
    setCurrent(new Date(current.getFullYear(), current.getMonth() - 1, 1));
  };
  return (
    <Wrapper>
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
          <div>
            {current.getFullYear()}년 {current.getMonth() + 1}월
          </div>
          <div>
            <Icon icon="charm:chevron-down" onClick={decrease} />
            <Icon icon="charm:chevron-up" onClick={increase} />
          </div>
        </CalendarHeader>
        <div style={{ display: "flex" }}>
          {weeks.map((value) => (
            <Day key={value} color={"white"} hborder={"none"} fs={"12px"}>
              {value}
            </Day>
          ))}
        </div>
        {Array(Math.floor(allCalendar.length / 7))
          .fill()
          .map((_, i) => (
            <div key={`a_${i}`} style={{ display: "flex" }}>
              {allCalendar.slice(7 * i, 7 * i + 7).map((v, i) => (
                <Day
                  key={i}
                  color={
                    Number(v.m.split("-")[1]) === current.getMonth() + 1
                      ? "white"
                      : "gray"
                  }
                  name={v.m}
                  onClick={() => setToggle(v.m)}
                  className={
                    (toggle === v.m ? "t-active" : "") +
                    " " +
                    (v.m ===
                    `${current.getFullYear()}-${
                      current.getMonth() + 1
                    }-${current.getDate()}`
                      ? "now"
                      : "")
                  }
                >
                  <abbr aria-label={v.m}>{v.d}</abbr>
                </Day>
              ))}
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default Calendar;


const Wrapper = styled.div`
  .t-active {
    border: 2px solid #ff3333 !important;
  }
  .now {
    background-color: #00d2ff !important;
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
  color: ${(props) => props.color || "black"};
  cursor: pointer;
  &:hover {
    border: ${(props) => props.hborder || "2px solid white"};
  }
`;
