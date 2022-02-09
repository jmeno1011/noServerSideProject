import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./css/styles.module.css";

export function Main() {
  const location = useLocation();
  const nav = {
    main: "/noServerSideProject/main",
    weather: "/noServerSideProject/main/weather",
  };
  return (
    <>
      <div className={styles.header}>
        <Link to="/noServerSideProject">
          <h2>home</h2>
        </Link>
        <nav>
          <ul>
            <li>
              <Link
                to=""
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
              <li>
                <Link to="weather2">weather2</Link>
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
