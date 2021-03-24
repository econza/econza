import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://www.webdesignerdepot.com/cdn-origin/uploads6/minimalist_logos/nocturnal.jpg"></img>
      <div className={s.loginBlock}>
        { props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
        : <NavLink to={"/login"}>Login</NavLink> }
      </div>
    </header>
  );
};

export default Header;
