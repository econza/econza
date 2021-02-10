import store from './redux/state'
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";



let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);