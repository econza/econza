const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:{
      let stateCopy = {...state}
      stateCopy.newMessageBody = action.body;
      return stateCopy;}
    case SEND_MESSAGE:
     { let body = state.newMessageBody;
      let stateCopy = {...state}
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(body);
      stateCopy.newMessageBody = "";
      return stateCopy;}
    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = (body) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body,
    };
  };
  export const sendMessageCreator = () => {
    return {
      type: SEND_MESSAGE,
    };
  };

export default dialogsReducer;
