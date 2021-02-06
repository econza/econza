import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://avatarfiles.alphacoders.com/715/71560.jpg"></img>
        {props.message}
        <div>
          <span>Like </span> {props.likesCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
