import React from "react";
import { HeaderTitle } from "../chapter3/titleLink";
import Title from "../common/Title";
import CompoRender from "./CompoRender";
import RefScroll from "./RefScroll";

const Chapter5 = () => {
  return (
    <>
      <header>
        <Title
          Component={HeaderTitle}
          id={"chapter5_title"}
          title={"Ref 연습"}
        />
      </header>
      <div className="component">
        <CompoRender />
      </div>
      <hr />
      <div className="component">
        <RefScroll />
      </div>
      <hr />
    </>
  );
};

export default Chapter5;
