import React, { Component } from "react";
import ScrollBox from "./ScrollBox";

export default class Chapter5 extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrllToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}
