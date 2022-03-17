import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "./logo.png";
import styled from "styled-components";

const Header = () => {
  const [open, setOpen] = useState(false);
  const active_color = { color: "#6495ed" };
  const location = useLocation();
  const nav = {
    main: "/noServerSideProject/main",
    weather: "/noServerSideProject/main/weather",
  };

  return (
    <Heeader>
      <HeaderDiv>
        <a
          className="a-white"
          style={{ display: "flex", margin: 0, alignItems: "center" }}
          href="/noServerSideProject"
        >
          <LogoImg src={logo} />
          <LogoSpan>HOME</LogoSpan>
        </a>
        <HamburgerBtn onClick={() => (open ? setOpen(false) : setOpen(true))}>
          {open ? (
            <Icon icon="lucide:x" />
          ) : (
            <Icon icon="charm:menu-hamburger" />
          )}
        </HamburgerBtn>
        <Nav open={open}>
          <NavUl>
            <NavLi>
              {/* section2폴더의 css .side__nav li,a에 영향을 받아서 대문자로 나옴 */}
              <Link
                className="a-white"
                to=""
                style={location.pathname === nav.main ? active_color : {}}
              >
                Documentation
              </Link>
            </NavLi>
            <NavLi ml="2rem">
              <Link
                className="a-white"
                to="weather"
                style={location.pathname === nav.weather ? active_color : {}}
              >
                Resources
              </Link>
            </NavLi>
            <NavLi ml="2rem">GitHub</NavLi>
            <NavLi ml="2rem">etc</NavLi>
          </NavUl>
        </Nav>
      </HeaderDiv>
    </Heeader>
  );
};

export default Header;

const Heeader = styled.header`
  background-color: #15171c;
  padding: 25px 0;
`;

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
`;

const LogoImg = styled.img`
  width: 36px;
  border-radius: 70%;
`;

const LogoSpan = styled.span`
  font-size: 1.625rem;
  font-weight: 700;
  margin-left: 1rem;
`;

const HamburgerBtn = styled.button`
  display: none;
  @media only screen and (max-width: 768px) {
    margin: 0;
    padding: 0;
    border-width: 0;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    align-items: center;
  }
  > svg {
    color: white;
    font-size: 30px;
  }
`;

const Nav = styled.nav`
  @media only screen and (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    background: darkred;
    position: absolute;
    top: 86px;
    left: 0;
    right: 0;
  }
`;
const NavUl = styled.ul`
  display: flex;
  color: white;
  font-size: 1rem;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const NavLi = styled.li`
  margin-left: ${(props) => props.ml};
  @media only screen and (max-width: 768px) {
    margin: 1rem;
  }
`;
