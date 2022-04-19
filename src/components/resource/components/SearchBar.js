import React from "react";
import styled from "styled-components";
import monsterBall from "../css/img/icon_ball_b.png";
import { Icon } from "@iconify/react";

const SearchBar = () => {
  return (
    <InputWrapper>
      <SearchBarTitle>
        <img src={monsterBall} />
        포켓몬 도감
      </SearchBarTitle>
      <form>
        <Input type={"text"} placeholder="search your pockemon!" />
        <button>
          <Icon icon="ant-design:search-outlined" />
        </button>
      </form>
    </InputWrapper>
  );
};

export default SearchBar;

const InputWrapper = styled.div`
  height: 65px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  background-color: darkslategray;
`;
const SearchBarTitle = styled.h2`
  display: flex;
  align-items: center;
  color: white;
  margin-right: 1rem;
  img {
    margin-right: 0.5rem;
  }
`;
const Input = styled.input`
  height: 32px;
  font-size: 1.25rem;
  padding: 1rem;
`;
