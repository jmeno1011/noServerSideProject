import React, { useState, useEffect } from "react";
import PockemonCard from "./components/PockemonCard";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";
import axios from "axios";

const Layout = () => {
  const [pockemon, setPockemon] = useState([]);
  const [type, setType] = useState([]);
  const fetchUser = async () => {
    const response = await axios({
      method: "get",
      url: "https://node-login-jwt-production.up.railway.app/pokemon",
    });
    const arr = [];
    response.data.pokemon.map((value) => arr.push(value.type.split(",")));
    console.log(
      "filter::",
      response.data.pokemon.filter((item) => item.type.includes("풀"))
    );
    console.log(arr);
    setType(arr);
    console.log("response.data.pokemon:", response.data.pokemon);
    setPockemon(response.data.pokemon);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div style={{ backgroundColor: "white" }}>
      <SearchBar pockemon={pockemon} setPockemon={setPockemon} />
      <CardSpace>
        <PockemonCard pockemon={pockemon} />
      </CardSpace>
    </div>
  );
};

export default Layout;

const CardSpace = styled.div`
  padding: 1rem;
  background-color: darkred;
  display: flex;
  flex-wrap: wrap;
`;
