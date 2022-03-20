// 화살표 문법 확인
import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import Counter from "./Counter";
import Say from "./Say";
import { Icon } from "@iconify/react";
import { ContentTitle, HeaderTitle } from "./titleLink";
import Title from "../Title";

function MyComponent(props) {
  const blackDog = new BlackDog();
  blackDog.bark();

  const whiteDog = new WhiteDog();
  whiteDog.bark();

  return (
    <>
      <header>
        <Title
          Component={HeaderTitle}
          id={"chapter3_title"}
          title={"Props 내용들"}
        />
      </header>
      <div className="component">
        <MyComponent1 name="React" />
      </div>
      <hr />
      <div className="component">
        <MyComponent2 />
      </div>
      <hr />
      <div className="component">
        <MyComponent3>리액트</MyComponent3>
      </div>
      <hr />
      <div className="component">
        <MyComponent4>리액트</MyComponent4>
      </div>
      <hr />
      <div className="component">
        <MyComponent5>리액트</MyComponent5>
      </div>
      <hr />
      <div className="component">
        <MyComponent6 name={"3"}>리액트</MyComponent6>
      </div>
      <hr />
      <div className="component">
        <MyComponent7 favoriteNumber={3}>리액트</MyComponent7>
      </div>
      <hr />
      <div className="component">
        <MyComponent8 favoriteNumber={3}>리액트</MyComponent8>
      </div>
      <hr />
      <div className="component">
        <h3>state 예제, class 형 컴포넌트로 작성 됨</h3>
        <Counter />
      </div>
      <hr />
      <div className="component">
        <h3>버튼을 눌러서 state 변경되는 예제</h3>
        <Say />
      </div>
      <hr />
    </>
  );
}

export default MyComponent;

const MyComponent1 = (props) => {
  return (
    <>
      <Title Component={ContentTitle} id={"MyComponent1"} />
      <code>{"<MyComponent1 name='React' /> "}</code>
      <p>name에서 props.name값을 받아서 React 출력됨</p>
      <div>안녕하세요, 제 이름은 {props.name}입니다.</div>
    </>
  );
};

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

////////////////////////////////////////////////////////////
function MyComponent2(props) {
  return (
    <>
      <Title Component={ContentTitle} id={"MyComponent2"} />
      <code>{"MyComponent2.defaultProps = {name: '기본 이름' };"}</code>
      <p>defaultProps를 이용해 props.name을 적용 할 수 도 있음</p>
      <div>안녕하세요, 제 이름은 {props.name}입니다.</div>
    </>
  );
}

MyComponent2.defaultProps = {
  name: "기본 이름",
};

////////////////////////////////////////////////////////////
function MyComponent3(props) {
  return (
    <>
      <Title Component={ContentTitle} id={"MyComponent3"} />
      <code>{"<MyComponent3>리액트</MyComponent3>"}</code>
      <p>
        MyComponent3의 컴포넌트 사이에 있는 리액트를 props.children으로 불러올수
        있음
      </p>
      <div>children 값은 {props.children} 입니다.</div>
    </>
  );
}

////////////////////////////////////////////////////////////
function MyComponent4(props) {
  // 비구조화 할당
  const { name, children } = props;
  return (
    <>
      <Title Component={ContentTitle} id={"MyComponent4"} />
      <code>{"const {name, children} = props;"}</code>
      <p>비구조 할당으로 선언하면 props를 생략 가능</p>
      <div>
        안녕하세요, 제 이름은 {name}입니다.
        <br />
        children 값은 {children} 입니다.
      </div>
    </>
  );
}

MyComponent4.defaultProps = {
  name: "기본 이름",
};

////////////////////////////////////////////////////////////
function MyComponent5({ name, children }) {
  return (
    <>
      <Title Component={ContentTitle} id={"MyComponent5"} />
      <code>{"MyComponent5({name, children})"}</code>
      <p>함수형 컴포넌트 선언시 () 안의 대괄호에 넣어서 비구조 할당 </p>
      <div>
        안녕하세요, 제 이름은 {name}입니다.
        <br />
        children 값은 {children} 입니다.
      </div>
    </>
  );
}

MyComponent5.defaultProps = {
  name: "기본 이름",
};

////////////////////////////////////////////////////////////
// PropTypes을 이용한 타입 지정
function MyComponent6({ name, children }) {
  return (
    <>
      <Title Component={ContentTitle} id={"MyComponent6"} />
      <code>
        {
          "MyComponent6.propTypes = {name: PropTypes.string,};\n<MyComponent6 name={'3'}>리액트</MyComponent6>"
        }
      </code>
      <p>
        name: PropTypes.string으로 name의 타입을 정해서 컴포넌트의 파라미터
        name에는 어떤 값을 넣어도 string값으로 변경되어 들어간다.{" "}
      </p>
      <div>
        안녕하세요, 제 이름은 {name}입니다.
        <br />
        children 값은 {children} 입니다.
      </div>
    </>
  );
}

MyComponent6.defaultProps = {
  name: "기본 이름",
};

MyComponent6.propTypes = {
  name: PropTypes.string,
};

////////////////////////////////////////////////////////////
// PropTypes을 이용한 타입 지정
function MyComponent7({ name, favoriteNumber, children }) {
  return (
    <>
      <Title Component={ContentTitle} id={"MyComponent7"} />
      <code>
        {
          "제가 좋아하는 숫자는 {favoriteNumber} 입니다. \n favoriteNumber: PropTypes.number.isRequired,"
        }
      </code>
      <p>
        favoriteNumber에는 타입설정후 isRequired가 붙어있어서 설정된 타입만
        들어갈 수 있게 되어있다.{" "}
      </p>
      <div>
        안녕하세요, 제 이름은 {name}입니다.
        <br />
        children 값은 {children} 입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    </>
  );
}

MyComponent7.defaultProps = {
  name: "기본 이름",
};

MyComponent7.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

////////////////////////////////////////////////////////////
// PropTypes을 이용한 타입 지정
// class 내부로 지정
class MyComponent8 extends React.Component {
  static defaultProps = {
    name: "기본 이름",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    // 비구조화 할당
    const { name, favoriteNumber, children } = this.props;
    return (
      <>
        <Title Component={ContentTitle} id={"MyComponent8"} />
        <code>
          {
            "static propTypes = {name: PropTypes.string, favoriteNumber: PropTypes.number.isRequired,};"
          }
        </code>
        <p>
          클래스형 컴포넌트에서 props 비구조할당, 타입설정, isRequired설정시
          static으로 선언해서 사용한다.
        </p>
        <div>
          안녕하세요, 제 이름은 {name}입니다.
          <br />
          children 값은 {children} 입니다.
          <br />
          제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
      </>
    );
  }
}
