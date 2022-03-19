import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    // 현재 클래스형 컴포넌트가 상속받고 있는
    // 리액트 Component가 가지고 있는 생성자 함수를 호출함
    super(props);
    // number의 초기값 설정
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

// 클래스형 컴포넌트 Counter 변화 과정 아래 1, 2, 3 과정

class Counter1 extends Component {
  // constructor 매서드 안쓰고 선언하기
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

class Counter2 extends Component {
  // constructor 매서드 안쓰고 선언하기
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          // Counter2.js 와 비교할때 아래와 같은 방식으로 하면 숫자가 2점씩 올라같다
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            // 위 this.setState안에 함수와 아래와 같음
            // 화살표 함수 사용시엔 {}사용시 return 필요,
            // ()일경우 return은 필요없다.
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

class Counter3 extends Component {
  // constructor 매서드 안쓰고 선언하기
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            // this.state 확인
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
