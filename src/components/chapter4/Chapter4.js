import React from "react";
import { HeaderTitle } from "../chapter3/titleLink";
import Title from "../Title";
import EventPractice1 from "./EventPractice1";
import EventPractice2 from "./EventPractice2";
import EventPractice3 from "./EventPractice3";
import EventPractice4 from "./EventPractice4";
import EventPractice5 from "./EventPractice5";
import EventPractice6 from "./EventPractice6";
import EventPractice7 from "./EventPractice7";
import EventPractice8 from "./EventPractice8";

const Chapter4 = () => {
  return (
    <>
      <header>
        <Title
          Component={HeaderTitle}
          id={"chapter4_title"}
          title={"State 내용들"}
        />
      </header>
      <div className="component">
        <EventPractice1 />
      </div>
      <hr />
      <div className="component">
        <EventPractice2 />
      </div>
      <hr />
      <div className="component">
        <EventPractice3 />
      </div>
      <hr />
      <div className="component">
        <EventPractice4 />
      </div>
      <hr />
      <div className="component">
        <EventPractice5 />
      </div>
      <hr />
      <div className="component">
        <EventPractice6 />
      </div>
      <hr />
      <div className="component">
        <EventPractice7 />
      </div>
      <hr />
      <div className="component">
        <EventPractice8 />
      </div>
      <hr />
    </>
  );
};

export default Chapter4;
