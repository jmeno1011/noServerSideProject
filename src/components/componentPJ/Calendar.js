import React, { useState } from "react";
import styled from "styled-components";

const Calendar = () => {
  const [now, setNow] = useState(new Date());
  const cYear = now.getFullYear();
  const cMonth = now.getMonth();
  const pDate = new Date(cYear, cMonth);
  const nDate = new Date(cYear, cMonth + 1);
  console.log("now:", new Date());

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
  console.log("getDay:", getDay(2));
  return (
    <div>
      Calendar
      <h2>이번달의 첫째 날짜 : {pDate.toString()} </h2>
      <h2>1일 요일 날짜 : {getDay(pDate.getDay())}</h2>
      <h2>현재 날짜 : {now.toString()}</h2>
      {/* // Sunday - Saturday : 0 - 6 */}
      <h2>다음 달 : {nDate.toString()}</h2>
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
