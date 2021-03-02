// import React, { Profiler } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContiner from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContiner />
        <Navbar />
        <div className="app-wrapper-content">
          <Route component={News} path="/news" />
          <Route component={Music} path="/music" />
          <Route component={Settings} path="/settings" /> 
          <Route
            render={() => (
              <DialogsContainer />
            )}
            path="/dialogs"
          />
          <Route
            render={() => (
              <ProfileContainer />
            )}
            path="/profile/:userId?"
          />
          <Route
            render={() => (
              <UsersContainer />
            )}
            path="/users"
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
