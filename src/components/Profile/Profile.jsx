import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileContainer from "./ProfileContainer";

// import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <ProfileContainer />
    </div>
  );
};

export default Profile;
