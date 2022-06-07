import React, { useState } from "react";
import styled from "styled-components";

const Calendar = () => {
  const [now, setNow] = useState(new Date());
  console.log("now:", new Date());
  return (
    <div>
      Calendar
      <h1>
        현재 날짜 : {now.getFullYear()}년 {now.getMonth()}월 {now.getDate()}일{" "}
      </h1>
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
