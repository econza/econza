import React from "react";
import Profile from "./Profile";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;

    if (!userId && !this.props.authorizedUserId) {
      this.props.history.push("/login");
    }

    this.props.getUserProfile(userId || this.props.authorizedUserId);
    this.props.getStatus(userId || this.props.authorizedUserId);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  id: state.auth.id
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
