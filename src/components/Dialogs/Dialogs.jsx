import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom"; 



const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
  <div className={s.dialog + " " + s.active}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
  );
};

const Message = (props) => {
  return (
  <div className={s.message}>{props.message}</div>
  );
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Stefon" id="1" />
        <DialogItem name="Marina" id="2" />
        <DialogItem name="Vyacheslav" id="3" />
        <DialogItem name="Jana" id="4" />
        <DialogItem name="Alisa" id="5" />
        <DialogItem name="Polina" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="HI"/>
        <Message message="lol"/>
        <Message message="where is my mind?"/>
        <Message message="what is love?"/>
        <Message message="Baby dont hurt me"/>
      </div>
    </div>
  );
};

export default Dialogs;
