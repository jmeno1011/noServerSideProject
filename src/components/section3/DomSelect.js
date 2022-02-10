import React from "react";
import styles from "./css/styles.module.css";

function DomSelect() {
  const number = document.getElementById("number");
  const increase = document.getElementById("increase");
  const decrease = document.getElementById("decrease");
  //   increase.onclick = () => {
  //     // parseInt( 변수, 진수(ex: 10진수=> 10, 2진수=>2))
  //     const current = parseInt(number.innerText, 10);
  //     number.innerText = current + 1;
  //   };

  //   decrease.onclick = () => {
  //     const current = parseInt(number.innerText, 10);
  //     number.innerText = current - 1;
  //   };

  const onClickIncrease = () => {
    // const current = parseInt(number.innerText, 10);
    // number.innerText = current + 1;
    alert("+1");
  };
  const onClickDecrease = () => {
    // const current = parseInt(number.innerText, 10);
    // number.innerText = current - 1;
    alert("-1");
  };
  return (
    <div className={styles.container}>
      <span>코드 주석 보기</span>
      <h2 id="number">0</h2>
      <div>
        <button id="decrease" onClick={onClickDecrease}>
          -1
        </button>
        <button id="increase" onClick={onClickIncrease}>
          +1
        </button>
      </div>
    </div>
  );
}

export default DomSelect;
