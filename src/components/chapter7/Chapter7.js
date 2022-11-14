import React from "react";
import { HeaderTitle } from "../chapter3/titleLink";
import Title from "../common/Title";
import LifeCycle from "./LifeCycle";

const Chapter7 = () => {
  return (
    <>
      <header>
        <Title
          Component={HeaderTitle}
          id={"chapter7_title"}
          title={"라이프사이클 메서드"}
        />
      </header>
      <div className="component">
        <LifeCycle />
      </div>
      <hr />
    </>
  );
};

export default Chapter7;
