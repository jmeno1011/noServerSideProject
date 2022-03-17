import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./css/styles.module.css";

export function Main() {
  const location = useLocation();
  const nav = {
    main: "/noServerSideProject/main",
    weather: "/noServerSideProject/main/weather",
  };

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
                        to="weather"
                        style={{ paddingBottom: 4, marginBottom: 8 }}
                      >
                        weather
                      </Link>
                    </li>
                    <li>
                      <Link
                        // className="a-white"
                        to="memo"
                        style={{ paddingBottom: 4, marginBottom: 8 }}
                      >
                        memo
                      </Link>
                    </li>
                    <li>
                      <Link
                        // className="a-white"
                        to="dom-select"
                        style={{ paddingBottom: 4, marginBottom: 8 }}
                      >
                        dom-select
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
        {/* <div className={styles.app}>
          <div className={styles.app__left}>
            <nav className={styles.side__nav}>
              <ul>
                <li>
                  <Link to="weather">weather</Link>
                </li>
                <li>
                  <Link to="memo">memo</Link>
                </li>
                <li>
                  <Link to="dom-select">dom-select</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.vertical__hr}></div>
          <div className={styles.app__right}>
            <Outlet />
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}
