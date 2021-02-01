import React, { Profiler } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          {/* <Dialogs /> */}
          <Route component="Dialogs" />
          <Route component="Profile" />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
