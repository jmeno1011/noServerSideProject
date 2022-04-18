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
    <CardWrapper>
      <Pockemon src="https://meno-image-storage.s3.ap-northeast-2.amazonaws.com/noServerSideProject/%ED%8F%AC%EC%BC%93%EB%AA%AC/001%EC%9D%B4%EC%83%81%ED%95%B4%EC%94%A8.png" />
      <CardInfo>
        <h3>
          <p>001</p>
          이상해씨
        </h3>
        <div>
          <GrassSpan>풀</GrassSpan>
          <Poison>독</Poison>
        </div>
      </CardInfo>
    </CardWrapper>
  );
};

export default PockemonCard;

const Pockemon = styled.img`
  width: 100px;
  object-fit: cover;
`;

const CardWrapper = styled.div`
  width: 150px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 40px;
  h3 {
    margin: 0;
    font-size: 1.1rem;
    margin-bottom: 4px;
  }
  p {
    margin: 0;
    font-size: 1rem;
  }
  label {
    margin: 0;
  }
  span {
    margin: 0;
  }
`;

const CardInfo = styled.div`
  padding: 0.5rem;
  width: 100px;
`;

const GrassSpan = styled.span`
  background-color: #7ab766;
  color: white;
`;
const Poison = styled.span`
  background-color: #a16ec2;
  color: white;
`;

const TypeSpan = styled.span`
  width: 100%;
`;
