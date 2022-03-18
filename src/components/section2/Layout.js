import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export const Layout = () => {
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
    </>
  );
};

// export default Layout;
