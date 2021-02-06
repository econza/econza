import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElement = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messageElement = props.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  } 

  return (
    <div className={s.dialogs}>
      <div>
        <textarea ref={ newPostElement }></textarea>
      </div>
      <div>
        <button onClick={ addPost }>Add Post</button>
      </div>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messageElement}</div>
    </div>
  );
};

export default Dialogs;
