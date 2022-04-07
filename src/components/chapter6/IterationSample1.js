import React from "react";
import { ContentTitle } from "../chapter3/titleLink";
import Title from "../Title";

export const IterationSample1 = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name, index) => <li key={index}>・{name}</li>);
  return (
    <>
      <Title Component={ContentTitle} id={"IterationSample1"} />
      <p>map 을 이용해 li태그를 반복 생성</p>
      <ul>{nameList}</ul>
    </>
  );
};
