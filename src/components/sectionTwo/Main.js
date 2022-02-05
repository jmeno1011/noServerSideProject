import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import styles from "./css/styles.module.css";

export function Main() {
  return (
    <>
      <div className={styles.header}>
        <div>
          <Link to="/main">
            <h2>main</h2>
          </Link>
          <Link to="/">
            <h2>home</h2>
          </Link>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="weather">weather</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />

      <div className={styles.footer}>
        <p>footer</p>
      </div>
    </>
  );
}
