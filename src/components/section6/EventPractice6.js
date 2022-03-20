import React, { Component } from "react";

class EventPractice6 extends Component {
  state = {
    username: "",
    message: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>EventPractice</h1>
        <h2>4-5에서 onKeyPress를 추가 </h2>
        <p>
          세부 내용: alert확인후 setState함수를 통해 input의 value(state)값
          초기화
        </p>
        <input
          type={"text"}
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type={"text"}
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice6;
