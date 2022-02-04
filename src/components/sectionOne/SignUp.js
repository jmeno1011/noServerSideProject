import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./css/styles.module.css";

export function SignUp() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const onChangeName = (e)=>{
    setName(e.target.value)
  }
  const onChangePassword = (e)=>{
    setPassword(e.target.value)
  }
  const onChangeConfirmPassword = (e)=>{
    setConfirmPassword(e.target.value)
  }

  const onSubmit = (e)=>{
    e.preventDefault()
    if(name===""){
      return alert("Please enter name.")
    }
    if(password===""){
      return alert("Please enter password.")
    }
    if(confirmPassword===""){
      return alert("Please enter confirm password.")
    }
    if(password!==confirmPassword){
      return alert("The password and the confirm password must be the same. ")
    }
    const userInfo = {
      id : name,
      pw : password
    }
    console.log(userInfo);
  }
  return (
    <div className={styles.app}>
      <form className={styles.signupin__form} onSubmit={onSubmit}>
        <div>Sign Up</div>
        <div><input type={"text"} placeholder="NAME" value={name} onChange={onChangeName} className={styles.signupin__input}/></div>
        <div><input type={"password"} placeholder="PASSWORD" value={password} onChange={onChangePassword} className={styles.signupin__input}/></div>
        <div><input type={"password"} placeholder="CONFIRM PASSWORD" value={confirmPassword} onChange={onChangeConfirmPassword} className={styles.signupin__input}/></div>
        <button className={styles.signupin__button}>Sign Up</button>
      </form>
      <Link to="/" className="a-white">
        Home
      </Link>
    </div>
  );
}
