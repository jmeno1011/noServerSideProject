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
