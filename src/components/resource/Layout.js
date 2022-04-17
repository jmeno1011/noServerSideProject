import React from "react";
import PockemonCard from "./components/PockemonCard";
import SearchBar from "./components/SearchBar";

const Layout = () => {
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <SearchBar />
      <PockemonCard />
      Layout
    </div>
  );
};

export default Layout;
