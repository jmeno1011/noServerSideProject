import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PockemonCard = () => {
  const [pockemon, setPockemon] = useState();
  const fetchUser = async () => {
    const response = await axios({
      method: "get",
      url: "/pokemon",
    });
    setPockemon(response.data.pokemon);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
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
  );
};

export default PockemonCard;

const Pockemon = styled.img`
  /* height: 150px; */
  width: 150px;
  object-fit: cover;
`;
