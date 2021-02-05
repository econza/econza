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
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: "1", name: "Stefon" },
    { id: "2", name: "Marina" },
    { id: "3", name: "Vyacheslav" },
    { id: "4", name: "Jana" },
    { id: "5", name: "Alisa" },
    { id: "6", name: "Polina" },
  ];

  let messagesData = [
    { id: "1", message: "HI" },
    { id: "2", message: "lol" },
    { id: "3", message: "where is my mind?" },
    { id: "4", message: "what is love?" },
    { id: "5", message: "Baby dont hurt me" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
        <Message message={messagesData[4].message} />
      </div>
    </div>
  );
};

export default Dialogs;
