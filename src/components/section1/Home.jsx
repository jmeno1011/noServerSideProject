import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "./logo.svg";

export function Home() {
  const [isLogin, setIsLogin] = useState(
    () => JSON.parse(window.localStorage.getItem("isLogin")) || false
  );

  const onClickSignOut = () => {
    window.localStorage.setItem("isLogin", JSON.stringify(false));
  };

  return (
    <>
      <header className="App-header">
        <main>
          <h2>Welcome to the homepage!</h2>
          <details>
            <summary>More...</summary>
            {isLogin ? (
              <>
                <p>
                  <Link to={"main"} className="a-white">
                    Main
                  </Link>
                </p>
                <p>
                  <a
                    href="/prac_etc"
                    onClick={onClickSignOut}
                    className="a-white"
                  >
                    Sign Out
                  </a>
                </p>
              </>
            ) : (
              <>
                <p>
                  <Link to={"sign-up"} className="a-white">
                    Sign Up
                  </Link>
                </p>
                <p>
                  <Link to={"sign-in"} className="a-white">
                    Sign In
                  </Link>
                </p>
              </>
            )}
          </details>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="about" className="a-white">
            Click this Link ⇒ About
          </Link>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </>
  );
}
