let renderEntireTree = () => {
  console.log("state chenged");
};

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

    newPostText: "Stefon dot com ",
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

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = " ";
  renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export const subscribe = (odserver) => {
  renderEntireTree = odserver;
};

export default state;
