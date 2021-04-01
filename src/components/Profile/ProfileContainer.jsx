import React, { useEffect } from "react";
import Profile from "./Profile";
import {
  getUserProfile,
  getStatus,
  // updateStatus,
} from "../../redux/profile-reducer";
import { connect, useDispatch } from "react-redux";
import { useParams, withRouter } from "react-router-dom";
import { compose } from "redux";



const ProfileContainer = (props) => {

  const userId = useParams();
  const dispatch = useDispatch();

  useEffect(() => {

    if (!userId && !props.authorizedUserId) {
      props.history.push("/login");
    }

    dispatch(getUserProfile(userId || props.authorizedUserId));
    dispatch(getStatus(userId || props.authorizedUserId));
  }, []);

  return (
    <div>
      <Profile
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  id: state.auth.id
});


export default 
  connect(mapStateToProps)
(ProfileContainer);

