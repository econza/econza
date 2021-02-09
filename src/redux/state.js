import {renderEntireTree} from '../render';

let state = {
  sidebarPage: {
    friends: [
      { id: "1", name: "Stefon" },
      { id: "2", name: "Marina" },
      { id: "3", name: "Vyacheslav" },
    ],
  },

  profilePage: {
    posts: [
      { id: "1", message: "Hi, how are you?", likesCount: "15" },
      { id: "2", message: "It's my first post", likesCount: "20" },
    ],
  },

  dialogsPage: {
    dialogs: [
      { id: "1", name: "Stefon" },
      { id: "2", name: "Marina" },
      { id: "3", name: "Vyacheslav" },
      { id: "4", name: "Jana" },
      { id: "5", name: "Alisa" },
      { id: "6", name: "Polina" },
    ],

    messages: [
      { id: "1", message: "HI" },
      { id: "2", message: "lol" },
      { id: "3", message: "where is my mind?" },
      { id: "4", message: "what is love?" },
      { id: "5", message: "Baby dont hurt me" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  renderEntireTree (state);
}

export default state;
