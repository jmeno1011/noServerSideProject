import React, { Component } from "react";
import "./ValidationSample.css";
export default class ValidationSample extends Component {
  input = React.createRef();
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    // input에 포커스를 준다.
    this.input.focus()
  };

  render() {
    return (
      <div>
        <input
          type={"password"}
          value={this.state.password}
          onChange={this.handleChange}
          // ref추가로 버튼을 눌렀을때 다시 input에 포커싱이 된다.
          ref={(ref)=>this.input=ref}
          className={
            //clicked가 true
            this.state.clicked
              ? // this.state.password === "0000"인 경우 success
                this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}
