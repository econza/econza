import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.profileImg} src="https://www.artmajeur.com/medias/standard/o/n/onur-yumlu/artwork/11642858_goelcuek-yansima-fx.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
