// 화살표 문법 확인
import React from "react";

function MyComponent1(props) {
  const blackDog = new BlackDog();
  blackDog.bark();

  const whiteDog = new WhiteDog();
  whiteDog.bark();

  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
}

export default MyComponent1;

function BlackDog() {
  this.name = "흰둥이";
  return {
    name: "검둥이",
    // 일반 함수는 자신이 종속된 객체를 this로 가리킨다.
    bark: function () {
      console.log("BlackDog : " + this.name + ": 멍멍!");
    },
  };
}

function WhiteDog() {
  this.name = "흰둥이";
  return {
    name: "검둥이",
    // 화살표 함수는 자신이 종속된 인스턴스를 this로 가리킨다.
    bark: () => {
      console.log("WhiteDog : " + this.name + ": 멍멍!");
    },
  };
}
