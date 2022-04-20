import React, { useState } from "react";
import styled from "styled-components";
import monsterBall from "../css/img/icon_ball_b.png";
import { Icon } from "@iconify/react";

const SearchBar = ({ pockemon, setPockemon }) => {
  const [keyword, setKeyword] = useState("");
  const search = (e) => {
    e.preventDefault();
    console.log("keyword::", keyword);
    setPockemon(pockemon.filter((item) => item.type.includes(keyword)));
  };

  return (
    <InputWrapper>
      <SearchBarTitle>
        <img src={monsterBall} />
        포켓몬 도감
      </SearchBarTitle>
      <form style={{ display: "flex", alignItems: "center" }} onSubmit={search}>
        <Input
          type={"text"}
          placeholder="search your pockemon!"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <SearchButton>
          <Icon icon="ant-design:search-outlined" />
        </SearchButton>
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

const SearchButton = styled.button`
  width: 36px;
  height: 36px;
  padding: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
