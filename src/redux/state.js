const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store ={
 _state: {
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
},
getState() {
  return this._state;
},
callSubscriber() {
  console.log("state chenged");
},

subscribe(odserver) {
  this._callSubscriber = odserver;
},

dispatch (action) {
  if (action.type === ADD_POST){
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
  
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = " ";
    this._callSubscriber(this._state);
  } else if (action.type === UPDATE_NEW_POST_TEXT){
    this._state.profilePage.newPostText = action.newText;
    this._callSubscriber(this._state);
  }
}

};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = () => {
  return {
    type: UPDATE_NEW_POST_TEXT, newtext: 'text'
  }
}

export default store;
window.store = store;