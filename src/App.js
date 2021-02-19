// import React, { Profiler } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
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
              <Profile />
            )}
            path="/profile"
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
