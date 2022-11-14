import React, { Component } from "react";
import { ContentTitle } from "../chapter3/titleLink";
import Title from "../common/Title";
import ScrollBox from "./ScrollBox";

export default class RefScroll extends Component {
  render() {
    return (
      <div>
        <Title Component={ContentTitle} id={"RefPrac2"} />
        <p>스크롤 box에 ref를 주고 버튼 클릭시 아래와 같은 식을 통해 맨 아래로 내려간다.</p>
        <code>scrollTop = scrollHeight - clientHeight</code>
        <br />
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrllToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}
