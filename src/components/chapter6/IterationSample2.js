import React, { useState } from "react";
import { ContentTitle } from "../chapter3/titleLink";
import Title from "../common/Title";

export const IterationSample2 = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");

  //새로운 항목 추가할때 쓸 id값
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    // react에서 배열에 새 항목을 추가할땐 push 보단 concat이 적합하다
    // push는 기존 배열 자체를 변경해줌
    // concat은 기본 배열은 놔두고 새로운 배열을 만들어 줌
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    // onDoubleClick : 더블클릭 이벤트
    <li
      key={name.id}
      onDoubleClick={() => onRemove(name.id)}
      style={{ cursor: "pointer" }}
      title={`더블 클릭하면 ${name.text}이/가 삭제됩니다.`}
    >
      ・{name.text}
    </li>
  ));
  return (
    <>
      <Title Component={ContentTitle} id={"IterationSample2"} />
      <p>
        {"{ id: id, text: text }"}구조의 값을 「추가」버튼을 누를때 id가 5로
        들어가 있어서 <br />
        4개의 목록에 5번째가 추가 된다.
      </p>
      <label>✅추가하고 싶은 값을 넣고 추가해주세요</label>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "1rem",
          width: 250,
        }}
      >
        <input value={inputText} onChange={onChange} />
        <button onClick={onClick}>추가</button>
      </div>
      <ul>{nameList}</ul>
    </>
  );
};
