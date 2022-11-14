import React from "react";
import { HeaderTitle } from "../chapter3/titleLink";
import Title from "../common/Title";
import { IterationSample1 } from "./IterationSample1";
import { IterationSample2 } from "./IterationSample2";

const Chapter6 = () => {
  return (
    <>
      <header>
        <Title
          Component={HeaderTitle}
          id={"chapter6_title"}
          title={"컴포넌트 반복 map이용(feat. key값)"}
        />
      </header>
      <div className="component">
        <IterationSample1 />
      </div>
      <hr />
      <div className="component">
        <IterationSample2 />
      </div>
      <hr />
    </>
  );
};

export default Chapter6;
