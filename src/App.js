import React, { Profiler } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContiner from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialaized) {
      return <Preloader />;
    } 

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContiner />
          <Navbar />
          <div className="app-wrapper-content">
            <Route component={News} path="/news" />
            <Route component={Music} path="/music" />
            <Route component={Settings} path="/settings" />
            <Route render={() => <DialogsContainer />} path="/dialogs" />
            <Route
              render={() => <ProfileContainer />}
              path="/profile/:userId?"
            />
            <Route render={() => <UsersContainer />} path="/users" />
            <Route render={() => <Login />} path="/login" />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialaized: state.app.initialaized,
});

export default compose(connect(mapStateToProps, { initializeApp }))(
  //  withRouter)
  App
);
