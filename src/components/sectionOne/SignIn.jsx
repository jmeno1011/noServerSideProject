import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./css/styles.module.css";
import user from "../../json/user/user.json";

export function SignIn() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  console.log();
  const onSubmit = (e) => {
    e.preventDefault();
    let isUser = user.find((value) => 
      value.id === name && value.pw === password
    );
    if(isUser === undefined){
      return alert("username or password was invalid");
    }else{
      window.localStorage.setItem("isLogin", JSON.stringify(true));
      navigate('/noServerSideProject')
    }
  };
  
  return (
    <div className={styles.app}>
      <form className={styles.signupin__form} onSubmit={onSubmit}>
        <div>Sign In</div>
        <div>
          <input
            type={"text"}
            placeholder="NAME"
            value={name}
            onChange={onChangeName}
            className={styles.signupin__input}
          />
        </div>
        <div>
          <input
            type={"password"}
            placeholder="PASSWORD"
            value={password}
            onChange={onChangePassword}
            className={styles.signupin__input}
          />
        </div>
        <button className={styles.signupin__button}>Sign In</button>
        <input type={"button"} className={styles.signupin__button} value={"Sign Up"}/>
      </form>
      <div className={styles.test__div}>
        <p className={styles.test__p}>test용 id: test</p> 
        <p className={styles.test__p}>test용 pw: test</p> 
      </div>
      <Link to="/noServerSideProject" className="a-white">
        Home
      </Link>
    </div>
  );
}
