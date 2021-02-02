import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://www.swift.com/sites/default/files/styles/overview_thumbnail_400x225_/public/images/swift-image-lighttrails-car5-1440x600.jpg?itok=axX8aYsj"></img>
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
