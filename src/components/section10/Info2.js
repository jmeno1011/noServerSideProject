import React, { useReducer } from "react";

function reducer(state, action){
  return {
    ...state, 
    [action.name]: action.value
  };
}

export const Info2 = () => {
  const [state, dispatch] = useReducer(reducer, {name:'', nickname:''});
  const {name, nickname} = state;


  const onChange = (e) => {
    dispatch(e.target);
  };
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
