// 화살표 문법 확인
import React from "react";

function MyComponent2(props) {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
}

export default MyComponent2;

MyComponent2.defaultProps = {
  name: "기본 이름",
};
