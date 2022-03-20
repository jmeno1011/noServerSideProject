import React, { Component } from "react";
import { ContentTitle } from "../chapter3/titleLink";
import Title from "../Title";

class EventPractice4 extends Component {
  state = {
    message: "",
  };
  // 함수를 화살표 함수 형태로 바꾸면 constructor에서 bind()메서드를 사용하지 않아도 작동한다.
  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  };
  // EventPractice2에서 랜더안에 있던 함수들을 위에 먼저 선언함
  render() {
    return (
      <div>
        <Title Component={ContentTitle} id={"EventPractice4"} />
        <p>
          class형 component에서 constructor없이 함수를 화살표 함수로 선언 후
          사용하기 (bind() 생략가능)
        </p>
        <input
          type={"text"}
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice4;
