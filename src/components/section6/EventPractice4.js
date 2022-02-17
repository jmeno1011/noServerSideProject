import React, { Component } from "react";

class EventPractice4 extends Component {
  state = {
    message: "",
  };
  // constructor(props) {
  //   super(props);
  //   // render 도중 클래스의 메서드와 html요소가 끊어질 수 있어 bind가 꼭 필요하다
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // 함수를 화살표 함수 형태로 바꾸면 constructor에서 bind()메서드를 사용하지 않아도 작동한다.
  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  }
  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }
  // EventPractice2에서 랜더안에 있던 함수들을 위에 먼저 선언함
  render() {
    return (
      <div>
        <h1>EventPractice</h1>
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
