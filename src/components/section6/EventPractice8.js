import React, { useState } from "react";

// EventPractice6을 함수형 컴포넌트로 변경
function EventPractice8() {
  // useState를 문자열이 아닌 객체로 다룰 때
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 복사한뒤
      [e.target.name]: e.target.value, //원하는 값을 넣어서 덮어씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>EventPractice</h1>
      <input
        type={"text"}
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type={"text"}
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
}

export default EventPractice8;
