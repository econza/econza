import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: "1", name: "Stefon" },
  { id: "2", name: "Marina" },
  { id: "3", name: "Vyacheslav" },
  { id: "4", name: "Jana" },
  { id: "5", name: "Alisa" },
  { id: "6", name: "Polina" },
];

let messages = [
  { id: "1", message: "HI" },
  { id: "2", message: "lol" },
  { id: "3", message: "where is my mind?" },
  { id: "4", message: "what is love?" },
  { id: "5", message: "Baby dont hurt me" },
];

let posts = [
  { id: "1", message: "Hi, how are you?", likesCount: "15"},
  { id: "2", message: "It's my first post", likesCount: "20"},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
