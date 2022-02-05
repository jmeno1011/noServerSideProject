import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./css/styles.module.css";

export function Main() {
  const location = useLocation();
  console.log(location.pathname);
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
      <Outlet />

      <div className={styles.app}>
        <div className={styles.app__left}>left</div>
        <div className={styles.app__right}>right</div>
      </div>

      <div className={styles.footer}>
        <p>footer</p>
      </div>
    </>
  );
}
