import React, { Component } from "react";

class EventPractice1 extends Component {
  render() {
    return (
      <div>
        <h1>EventPractice</h1>
        <h2>
          text박스에 입력시 e.target.value를 통해 console.log에서 값 확인하기
        </h2>
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
