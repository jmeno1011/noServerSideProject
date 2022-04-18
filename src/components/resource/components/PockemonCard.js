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
        <TypeWrapper>
          <TypeSpan>풀</TypeSpan>
          <TypeSpan>독</TypeSpan>
        </TypeWrapper>
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
  border-radius: 20px;
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
  padding: 0.25rem;
  width: 140px;
`;

const GrassSpan = styled.span`
  background-color: #7ab766;
  color: white;
`;
const Poison = styled.span`
  background-color: #a16ec2;
  color: white;
`;
const TypeWrapper = styled.div`
  display: flex;
  text-align: center;
  /* padding: 0 0.25rem; */
  span:first-child {
    margin-right: 0.5rem;
  }
`;

const TypeSpan = styled.span`
  width: 100%;
  background-color: ${(props) => (props.children === "풀" ? "#7ab766" : "")};
  background-color: ${(props) => (props.children === "독" ? "#a16ec2" : "")};
  color: white;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 10px;
`;
