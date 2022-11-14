import React, { Component } from "react";
import { ContentTitle } from "../chapter3/titleLink";
import Title from "../common/Title";

class EventPractice3 extends Component {
  state = {
    message: "",
  };
  constructor(props) {
    super(props);
    // render 도중 클래스의 메서드와 html요소가 끊어질 수 있어 bind가 꼭 필요하다
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }
  handleClick() {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }
  // EventPractice2에서 랜더안에 있던 함수들을 위에 먼저 선언함
  render() {
    return (
      <div>
        <Title Component={ContentTitle} id={"EventPractice3"} />
        <p>
          class형 component에서 constructor에서 함수 선언해서 사용하기
          this.함수명.bind(this) 형태
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

export default EventPractice3;
