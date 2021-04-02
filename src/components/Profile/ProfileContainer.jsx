import React, { useEffect } from "react";
import Profile from "./Profile";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { profileStateSelector } from "../../redux/profile-selectors";
import { authStateSelector } from "../../redux/auth-selectors";


const ProfileContainer = () => {
  const { profile, status } = useSelector(profileStateSelector);
  const { authorizedUserId } = useSelector(authStateSelector);

  const { userId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userId && !authorizedUserId) {
      history.push("/login");
    }

    dispatch(getUserProfile(userId || authorizedUserId));
    dispatch(getStatus(userId || authorizedUserId));
  }, []);

  return (
    <div>
      <Profile
        profile={profile}
        status={status}
        updateStatus={dispatch(updateStatus)}
      />
    </div>
  );
};

export default ProfileContainer;
