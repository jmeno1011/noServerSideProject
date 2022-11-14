import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export const Layout = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScrollY(0);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
    };
  });
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", flex: "1 1 0%" }}>
        <Header />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <LayoutWrapper>
            <Wrapper>
              <SmallNav>
                <details>
                  <summary>Docs Navigation</summary>
                  <div style={{ padding:"1rem 0" }}>
                    <nav>
                      <ul>
                        <li><Link className="side-nav" to="/prac_etc/main">⭐메모장</Link></li>
                        <li><Link className="side-nav" to="weather">⛅날씨</Link></li>
                        <li><Link className="side-nav" to="test">🛠낙서장</Link></li>
                        <li><Link className="side-nav" to="news">📰뉴스</Link></li>
                        <li><Link className="side-nav" to="calendar">📆Calendar</Link></li>
                        <li><Link className="side-nav" to="carousel-basic">⏪⏩Carousel</Link></li>
                        <li><Link className="side-nav" to="clip-board">🧷ClipBoard</Link></li>
                        <li><Link className="side-nav" to="chapter3">리다기 3장</Link></li>
                        <li><Link className="side-nav" to="chapter4">리다기 4장</Link></li>
                        <li><Link className="side-nav" to="chapter5">리다기 5장</Link></li>
                        <li><Link className="side-nav" to="chapter6">리다기 6장</Link></li>
                        <li><Link className="side-nav" to="chapter7">리다기 7장</Link></li>
                        <li><Link className="side-nav" to="chapter8-1">리다기 8-1장</Link></li>
                        <li><Link className="side-nav" to="chapter8-2">리다기 8-2장</Link></li>
                        <li><Link className="side-nav" to="chapter8-3">리다기 8-3장</Link></li>
                        <li><Link className="side-nav" to="chapter8-4">리다기 8-4장</Link></li>
                        <li><Link className="side-nav" to="chapter8-5">리다기 8-5장</Link></li>
                        <li><Link className="side-nav" to="chapter8-6">리다기 8-6장</Link></li>
                        <li><Link className="side-nav" to="chapter9-1">리다기 9-1장</Link></li>
                        <li><Link className="side-nav" to="chapter12-1">리다기 12-1장</Link></li>
                        <li><Link className="side-nav" to="chapter12-2">리다기 12-2장</Link></li>
                        <li><Link className="side-nav" to="chapter12-3">리다기 12-3장</Link></li>
                      </ul>
                    </nav>
                  </div>
                </details>
                <hr />
              </SmallNav>
              <SideNav>
                <div>
                  <nav>
                    <ul>
                      <li><Link className="side-nav" to="/prac_etc/main">⭐메모장</Link></li>
                      <li><Link className="side-nav" to="weather">⛅날씨</Link></li>
                      <li><Link className="side-nav" to="test">🛠낙서장</Link></li>
                      <li><Link className="side-nav" to="news">📰뉴스</Link></li>
                      <li><Link className="side-nav" to="calendar">📆Calendar</Link></li>
                      <li><Link className="side-nav" to="carousel-basic">⏪⏩Carousel</Link></li>
                      <li><Link className="side-nav" to="clip-board">🧷ClipBoard</Link></li>
                      <li><Link className="side-nav" to="hierachies">Hierarchies</Link></li>
                      <li>
                        <details>
                          <summary style={{ fontWeight: 700 }}>
                            리다기
                          </summary>
                          <nav>
                            <ul>
                              <li><Link className="side-nav" to="chapter3">리다기 3장</Link></li>
                              <li><Link className="side-nav" to="chapter4">리다기 4장</Link></li>
                              <li><Link className="side-nav" to="chapter5">리다기 5장</Link></li>
                              <li><Link className="side-nav" to="chapter6">리다기 6장</Link></li>
                              <li><Link className="side-nav" to="chapter7">리다기 7장</Link></li>
                              <li><Link className="side-nav" to="chapter8-1">리다기 8-1장</Link></li>
                              <li><Link className="side-nav" to="chapter8-2">리다기 8-2장</Link></li>
                              <li><Link className="side-nav" to="chapter8-3">리다기 8-3장</Link></li>
                              <li><Link className="side-nav" to="chapter8-4">리다기 8-4장</Link></li>
                              <li><Link className="side-nav" to="chapter8-5">리다기 8-5장</Link></li>
                              <li><Link className="side-nav" to="chapter8-6">리다기 8-6장</Link></li>
                              <li><Link className="side-nav" to="chapter9-1">리다기 9-1장</Link></li>
                              <li><Link className="side-nav" to="chapter12-1">리다기 12-1장</Link></li>
                              <li><Link className="side-nav" to="chapter12-2">리다기 12-2장</Link></li>
                              <li><Link className="side-nav" to="chapter12-3">리다기 12-3장</Link></li>
                            </ul>
                          </nav>
                        </details>
                      </li>
                    </ul>
                  </nav>
                </div>
              </SideNav>
              <ContentWrapper>
                <Content>
                  <Outlet />
                </Content>
              </ContentWrapper>
            </Wrapper>
          </LayoutWrapper>
        </div>
      </div>
      <Footer />
      <TopBtn scrollY={scrollY} onClick={scrollTop}>
        <Icon icon="bytesize:arrow-top" />
      </TopBtn>
    </>
  );
};

const TopBtn = styled.button`
  visibility: ${(props) => (props.scrollY > 100 ? "visible" : "hidden")};
  position: fixed;
  bottom: 40px;
  right: 40px;
  outline: none;
  padding: 0.75rem;
  border-width: 0;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  border-radius: 50%;
  background-color: #333;
  svg {
    color: #fff;
    font-size: 1.25rem;
  }
  &:hover {
    background-color: rgb(217, 215, 215);
    svg{
      color: #333;
    }
  }
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(208 219 241);
  @media screen and (max-width: 1023px) {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    max-width: 768px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media screen and (max-width: 1023px) and (min-width: 640px) {
    max-width: 640px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const SideNav = styled.div`
  border-right: 1px solid white;
  >div{
    padding: 2.5rem 0.75rem 2.5rem 1.5rem;
    overflow-y: auto;
    overflow-x: hidden;
    width: 16rem;
    max-height: 100vh;
    height: 100%;
    position: sticky;
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
  summary {
    margin-bottom: 8px;
  }
  details > nav {
    margin-left: 8px;
  }
`;

const SmallNav = styled.div`
  display: none;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
  summary{
    padding-top: 1rem;
  }
  details summary {
    margin-bottom: 8px;
    cursor: pointer;
    ::after {
      padding-left: 0.5rem;
    }
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  @media (min-width: 1024px) {
    height: 100%;
  }
`;

const Content = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  @media (min-width: 1024px) {
    padding: 2.5rem 1.5rem 2.5rem 0.75rem;
  }
  @media (min-width: 768px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;
