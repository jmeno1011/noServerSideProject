import React from "react";
// useInputs으로 useReducer를 따로 뽑아 냄
import useInputs from "./useInputs";

export const Info3 = () => {
  const [state, onChange] = useInputs({name:'', nickname:''})
  const {name, nickname} = state;

  return (
    <div>
      {/* <button onClick={() => setVisible(!visible)}>
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && ( */}
        <div>
          <div>
            <input name="name" value={name} onChange={onChange} />
            <input name="nickname" value={nickname} onChange={onChange} />
          </div>
          <div>
            <div>
              <b>이름 : </b>
              {name}
            </div>
            <div>
              <b>닉네임 : </b>
              {nickname}
            </div>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};
