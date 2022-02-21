import React, { useEffect, useState } from "react";

export const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("랜더링 완료");
    console.log({ name, nickname });
  });

  const onChnageName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && (
        <div>
          <div>
            <input value={name} onChange={onChnageName} />
            <input value={nickname} onChange={onChangeNickName} />
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
      )}
    </div>
  );
};
