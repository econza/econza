
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
  ]
}

const dialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
    return { 
      ...state,
      newMessageBody: "",
      messages: [...state.messages, {id: 6, message: body}]
      }
    default:
      return state;
  }
};

  export const sendMessageCreator = (newMessageBody) => {
    return {
      type: SEND_MESSAGE, newMessageBody
    };
  };

export default dialogsReducer;
