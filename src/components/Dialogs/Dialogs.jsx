import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>Stefon</div>
        <div className={s.dialog}>Marina</div>
        <div className={s.dialog}>Vyacheslav</div>
        <div className={s.dialog}>Jana</div>
        <div className={s.dialog}>Alisa</div>
        <div className={s.dialog}>Polina</div>
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
