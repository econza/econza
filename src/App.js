// import React, { Profiler } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";

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
              <Dialogs store={props.store} />
            )}
            path="/dialogs"
          />
          <Route
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
                newPostText={props.state.newPostText}
              />
            )}
            path="/profile"
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
