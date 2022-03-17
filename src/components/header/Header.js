import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "./logo.png";
const Header = () => {
  const active_color = { color: "#6495ed" };
  const location = useLocation();
  const nav = {
    main: "/noServerSideProject/main",
    weather: "/noServerSideProject/main/weather",
  };
  //   btn block
  const btn_v = {
    backgroundColor: "transparent",
    margin: 0,
    padding: 0,
    borderWidth: 0,
    cursor: "pointer",
  };
  //   btn none
  const btn_d = {
    display: "none",
  };
  console.log(window.innerWidth);
  return (
    <header style={{ background: "#15171c", padding: "25px 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 1.5rem",
          justifyContent: "space-between",
        }}
      >
        <a
          style={{ display: "flex", margin: 0, alignItems: "center" }}
          href="/noServerSideProject"
        >
          <img
            src={logo}
            style={{
              width: 36,
              borderRadius: "70%",
            }}
          />
          <span
            style={{
              fontSize: "1.625rem",
              fontWeight: 700,
              marginLeft: "1rem",
            }}
          >
            HOME
          </span>
        </a>
        <button style={window.innerWidth > 768 ? btn_d : btn_v}>
          <Icon
            icon="charm:menu-hamburger"
            style={{ color: "white", fontSize: 20 }}
          />
        </button>
        <nav>
          <ul style={{ display: "flex", color: "white", fontSize: "1rem" }}>
            <li>
              {/* section2폴더의 css .side__nav li,a에 영향을 받아서 대문자로 나옴 */}
              <Link
                to=""
                style={location.pathname === nav.main ? active_color : {}}
              >
                Documentation
              </Link>
            </li>
            <li style={{ marginLeft: "2rem" }}>
              <Link
                to="weather"
                style={location.pathname === nav.weather ? active_color : {}}
              >
                Resources
              </Link>
            </li>
            <li style={{ marginLeft: "2rem" }}>GitHub</li>
            <li style={{ marginLeft: "2rem" }}>etc</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
