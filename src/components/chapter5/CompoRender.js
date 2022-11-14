import React, { Component } from "react";
import { ContentTitle } from "../chapter3/titleLink";
import Title from "../common/Title";
import ValidationSample from "./validation/ValidationSample";

export default class CompoRender extends Component {
  render() {
    return (
      <>
        <Title Component={ContentTitle} id={"RefPrac1"} />
        <p>textbox에 0000 넣으면 className에 success가 들어가게되고 background가 green이 되고<br /> 다른 값을 넣었을때 failure가 들어가게되어 background는 red가 된다.</p>
        <ValidationSample />
      </>
    );
  }
}
