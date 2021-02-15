import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
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

      newMessageBody: "",
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

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
    
    this._callSubscriber(this._state);
  },
};




export default store;
window.store = store;
