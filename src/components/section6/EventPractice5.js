import React, { Component } from "react";

class EventPractice5 extends Component {
  state = {
    username: "",
    message: "",
  };
  handleChange = (e) => {
    this.setState({
      // 객체 안에 key값을 []로 감싸면 안에 레퍼런스가 실제 key값이 된다.
      // 아래와 같은 원리이다.
      // const name = "홍길동";
      // const object = {
      //   [name] : 'value'
      // }
      // object 호출시 
      // => {
      //   "홍길동" : 'value'
      // }
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

  render() {
    return (
      <div>
        <h1>EventPractice</h1>
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
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice5;
