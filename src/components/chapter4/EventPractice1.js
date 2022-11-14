import React, { Component } from "react";
import { ContentTitle } from "../chapter3/titleLink";
import Title from "../common/Title";

class EventPractice1 extends Component {
  render() {
    return (
      <div>
        <Title Component={ContentTitle} id={"EventPractice1"} />
        <p>
          text박스에 입력시 e.target.value를 통해 console.log에서 값 확인하기
        </p>
        <input
          type={"text"}
          name="message"
          placeholder="아무거나 입력해 보세요"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default EventPractice1;
