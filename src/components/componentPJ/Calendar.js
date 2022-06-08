import React, { useState } from "react";
import styled from "styled-components";

const Calendar = () => {
  // const [now, setNow] = useState(new Date());
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  const startDay = new Date(currentYear, currentMonth, 0);
  const preDate = startDay.getDate();
  const preDay = startDay.getDay();
  const preMonth = startDay.getMonth();

  const endDay = new Date(currentYear, currentMonth + 1, 0);
  const nextDate = endDay.getDate();
  const nextDay = endDay.getDay();
  const nextMonth = endDay.getMonth();

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

  // 지난달 표시할 내용
  // 요일은 일요일 부터 시작
  for (let i = preDate - preDay; i <= preDate; i++) {
    // console.log("i::", i);
  }
  // 이번달 표시할 내용
  for (let i = 1; i <= nextDate; i++) {
    // console.log("i:::", i);
  }

  return (
    <div>
      Calendar
      <h5>startDay : {startDay.toString()}</h5>
      <h5>
        이전달의 마지막날：{preMonth + 1}월 {preDate}일 {getDay(preDay)}요일
      </h5>
      <h5>
        이번달의 마지막날 : {nextMonth + 1}월 {nextDate}일 {getDay(nextDay)}요일
      </h5>
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
