import React, { useState } from "react";

const Test = () => {
  const [cheked, setCheked] = useState(false);
  let chk = document.getElementById("check");
  const onClickHandle = () => {
    console.log(chk);
  };
  //   const onChangeHandle = (e) => {
  //     cheked ? setCheked(false) : setCheked(true);
  //     console.log("chk: ", chk.checked);
  //     console.log("e.target: ", e.target.checked);
  //   };
  return (
    <div>
      <h1>Test</h1>
      <input
        id="check"
        type={"checkbox"}
        // checked={cheked}
        // onChange={onChangeHandle}
      />{" "}
      <label htmlFor="check" onClick={onClickHandle}>
        체크박스 확인
      </label>
      {/* <p>{chk}</p> */}
    </div>
  );
};

export default Test;
