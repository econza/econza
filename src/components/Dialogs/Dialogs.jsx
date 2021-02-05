import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to="/dialogs/1">Stefon</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/2">Marina</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/3">Vyacheslav</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/4">Jana</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/5">Alisa</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/6">Polina</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Give me money</div>
        <div className={s.message}>lol</div>
        <div className={s.message}>where is my mind?</div>
      </div>
    </div>
  );
};

export default Dialogs;
