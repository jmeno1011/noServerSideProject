import React from "react";
import styled from "styled-components";

const PockemonCard = ({ pockemon }) => {
  return (
    <>
      {pockemon.map((value, index) => (
        <CardWrapper key={value.no}>
          <Pockemon src={value.url} />
          <CardInfo>
            <h3>
              <p>{value.no}</p>
              {value.name}
            </h3>
            <TypeWrapper>
              {value.type.split(",").map((value, index) => (
                <TypeSpan key={index}>{value}</TypeSpan>
              ))}
            </TypeWrapper>
            {/* <TypeSpan>독</TypeSpan> */}
          </CardInfo>
        </CardWrapper>
      ))}
    </>
  );
};

export default PockemonCard;

const Pockemon = styled.img`
  height: 100px;
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
  margin-right: 0.8rem;
  margin-bottom: 0.5rem;
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

// const GrassSpan = styled.span`
//   background-color: #7ab766;
//   color: white;
// `;
// const Poison = styled.span`
//   background-color: #a16ec2;
//   color: white;
// `;
const TypeWrapper = styled.div`
  display: flex;
  text-align: center;
  /* padding: 0 0.25rem; */
  span:nth-child(2) {
    margin-left: 0.5rem;
  }
`;

const TypeSpan = styled.span`
  width: 100%;
  background-color: ${(props) => (props.children === "노말" ? "#92999F" : "")};
  background-color: ${(props) => (props.children === "불꽃" ? "#EFA061" : "")};
  background-color: ${(props) => (props.children === "물" ? "#608FCF" : "")};
  background-color: ${(props) => (props.children === "풀" ? "#7ab766" : "")};
  background-color: ${(props) => (props.children === "전기" ? "#EDD259" : "")};
  background-color: ${(props) => (props.children === "얼음" ? "#8DCCC0" : "")};
  background-color: ${(props) => (props.children === "격투" ? "#BC4B6A" : "")};
  background-color: ${(props) => (props.children === "독" ? "#a16ec2" : "")};
  background-color: ${(props) => (props.children === "땅" ? "#CA7C50" : "")};
  background-color: ${(props) => (props.children === "비행" ? "#95A8D9" : "")};
  background-color: ${(props) =>
    props.children === "에스퍼" ? "#E57879" : ""};
  background-color: ${(props) => (props.children === "벌레" ? "#9BBF48" : "")};
  background-color: ${(props) => (props.children === "바위" ? "#C3B78F" : "")};
  background-color: ${(props) =>
    props.children === "고스트" ? "#5769A7" : ""};
  background-color: ${(props) =>
    props.children === "드래곤" ? "#336CBE" : ""};
  background-color: ${(props) => (props.children === "악" ? "#585365" : "")};
  background-color: ${(props) => (props.children === "강철" ? "#678D9E" : "")};
  background-color: ${(props) =>
    props.children === "페어리" ? "#DC94E1" : ""};
  color: white;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 10px;
`;
