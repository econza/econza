import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4jRg1btnvqAdcADoMgIw6RyQIXMOpZw-kg&usqp=CAU"></img>
        {props.message}
        <div>
          <span>Like </span> {props.likesCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
