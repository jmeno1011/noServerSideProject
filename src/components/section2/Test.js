import React from "react";
import styled from "styled-components";

const Test = () => {
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
      <h2>font family 변환하는 프로그램 만들어보기</h2>
      <p style={{ fontFamily: "'Montserrat', sans-serif" }}>
        안녕하세요 Say Hello
      </p>
      <p>안녕하세요 Say Hello</p>
      <p>안녕하세요 Say Hello</p>
      <DivWrapper>
        <div></div>
        <BorderdivW />
        <div></div>
      </DivWrapper>
      <div style={{ display: "flex", maxWidth: "800px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 1rem",
          }}
        >
          <Pockemon src="https://meno-image-storage.s3.ap-northeast-2.amazonaws.com/noServerSideProject/%ED%8F%AC%EC%BC%93%EB%AA%AC/001%EC%9D%B4%EC%83%81%ED%95%B4%EC%94%A8.png" />
          <div style={{ padding: "1rem" }}>
            <h2>001</h2>
            <p>
              이름 : {"이상해씨"}
              <br />
              타입 : {"풀, 독"}
            </p>
          </div>
          <div></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 1rem",
          }}
        >
          <Pockemon src="https://meno-image-storage.s3.ap-northeast-2.amazonaws.com/noServerSideProject/%ED%8F%AC%EC%BC%93%EB%AA%AC/001%EC%9D%B4%EC%83%81%ED%95%B4%EC%94%A8.png" />
          <div style={{ padding: "1rem" }}>
            <h2>001</h2>
            <p>
              이름 : {"이상해씨"}
              <br />
              타입 : {"풀, 독"}
            </p>
          </div>
          <div></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 1rem",
          }}
        >
          <Pockemon src="https://meno-image-storage.s3.ap-northeast-2.amazonaws.com/noServerSideProject/%ED%8F%AC%EC%BC%93%EB%AA%AC/001%EC%9D%B4%EC%83%81%ED%95%B4%EC%94%A8.png" />
          <div style={{ padding: "1rem" }}>
            <h2>001</h2>
            <p>
              이름 : {"이상해씨"}
              <br />
              타입 : {"풀, 독"}
            </p>
          </div>
          <div></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 1rem",
          }}
        >
          <Pockemon src="https://meno-image-storage.s3.ap-northeast-2.amazonaws.com/noServerSideProject/%ED%8F%AC%EC%BC%93%EB%AA%AC/001%EC%9D%B4%EC%83%81%ED%95%B4%EC%94%A8.png" />
          <div style={{ padding: "1rem" }}>
            <h2>001</h2>
            <p>
              이름 : {"이상해씨"}
              <br />
              타입 : {"풀, 독"}
            </p>
          </div>
          <div></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 1rem",
          }}
        >
          <Pockemon src="https://meno-image-storage.s3.ap-northeast-2.amazonaws.com/noServerSideProject/%ED%8F%AC%EC%BC%93%EB%AA%AC/001%EC%9D%B4%EC%83%81%ED%95%B4%EC%94%A8.png" />
          <div style={{ padding: "1rem" }}>
            <h2>001</h2>
            <p>
              이름 : {"이상해씨"}
              <br />
              타입 : {"풀, 독"}
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Test;

const Pockemon = styled.img`
  width: 100%;
  object-fit: cover;
`;

const DivWrapper = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const BorderdivW = styled.div`
  height: 20px;
  width: 100%;
  border: 1px solid black;
`

const BorderdivH = styled.div`
  height: 100%;
  width: 20px;
  border: 1px solid black;
`