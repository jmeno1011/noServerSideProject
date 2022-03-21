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
      <div>
        <Header />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "rgb(208 219 241)",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ borderRight: "1px solid white" }}>
              <div
                style={{
                  padding: "2.5rem 0.75rem 2.5rem 1.5rem",
                  overflowX: "hidden",
                  overflowY: "auto",
                  width: "16rem",
                  maxHeight: "100vh",
                  height: "100%",
                  position: "sticky",
                }}
              >
                <nav>
                  <ul>
                    <li>
                      <Link
                        // className="a-white"
                        className="side-nav"
                        to="memo"
                      >
                        ⭐memo
                      </Link>
                    </li>
                    <li>
                      <Link
                        // className="a-white"
                        className="side-nav"
                        to="weather"
                        style={{ paddingBottom: 4, marginBottom: 8 }}
                      >
                        weather
                      </Link>
                    </li>
                    <li>
                      <Link
                        // className="a-white"
                        className="side-nav"
                        to="dom-select"
                        style={{ paddingBottom: 4, marginBottom: 8 }}
                      >
                        dom-select
                      </Link>
                    </li>
                    <li>
                      <Link
                        // className="a-white"
                        className="side-nav"
                        to="test"
                        style={{ paddingBottom: 4, marginBottom: 8 }}
                      >
                        test
                      </Link>
                    </li>
                    <li>
                      <Link
                        // className="a-white"
                        className="side-nav"
                        to="chapter3"
                        style={{ paddingBottom: 4, marginBottom: 8 }}
                      >
                        리다기 3장
                      </Link>
                    </li>
                    <li>
                      <Link
                        // className="a-white"
                        className="side-nav"
                        to="chapter4"
                        style={{ paddingBottom: 4, marginBottom: 8 }}
                      >
                        리다기 4장
                      </Link>
                    </li>
                    <li>
                      <Link
                        // className="a-white"
                        className="side-nav"
                        to="chapter5"
                        style={{ paddingBottom: 4, marginBottom: 8 }}
                      >
                        리다기 5장
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div style={{ height: "100%" }}>
              <div style={{ padding: "2.5rem 1.5rem 2.5rem 0.75rem" }}>
                <Outlet />
              </div>
            </div>
          </div>
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
  padding: 6px;
  border-width: 0;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  svg {
    font-size: 1rem;
    font-weight: 700;
  }
  &:hover {
    background-color: rgb(217, 215, 215);
  }
`;
