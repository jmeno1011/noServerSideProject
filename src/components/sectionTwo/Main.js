import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./css/styles.module.css";

export function Main() {
  const location = useLocation();
  const nav = {
    main: "/main",
    weather: "/main/weather",
  };
  return (
    <>
      <div className={styles.header}>
        <Link to="/">
          <h2>home</h2>
        </Link>
        <nav>
          <ul>
            <li>
              <Link
                to="/main"
                className={
                  location.pathname === nav.main ? `${styles.active}` : ""
                }
              >
                main
              </Link>
            </li>
            <li>
              <Link
                to="weather"
                className={
                  location.pathname === nav.weather ? `${styles.active}` : ""
                }
              >
                weather
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.app}>
        <div className={styles.app__left}>
          <nav className={styles.side__nav}>
            <ul>
              <li>
                <Link to="weather">weather</Link>
              </li>
              <li>
                <Link to="memo">memo</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.vertical__hr}></div>

        <div className={styles.app__right}>
          <Outlet />
        </div>
      </div>

      <div className={styles.footer}>
        <p>footer</p>
      </div>
    </>
  );
}
