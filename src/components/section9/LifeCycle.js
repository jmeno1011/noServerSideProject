import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import LifeCycleSample from "./LifeCycleSample";
import LifeCycleSample2 from "./LifeCycleSample2";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export default class LifeCycle extends Component {
  state = {
    color1: "#000000",
    color2: "#000000",
  };
  handleClick = () => {
    this.setState({
      color1: getRandomColor(),
    });
  };
  handleClick2 = () => {
    this.setState({
      color2: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleClick}>랜덤 색상</button>
          <LifeCycleSample color={this.state.color1} />
        </div>
        <div>
          <h2>에러 발생</h2>
          <button onClick={this.handleClick2}>랜덤 색상</button>
          <ErrorBoundary>
            <LifeCycleSample2 color={this.state.color2} />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}
