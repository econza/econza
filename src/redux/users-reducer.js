
const SET_USERS = "SET_USERS"

let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [
    // {
    //   id: "1",
    //   photoUrl: 'https://www.meme-arsenal.com/memes/a538041abe14be401629711790bdd84d.jpg',
    //   followed: false,
    //   fullName: "Stefon",
    //   status: "i am a lover",
    //   location: { city: "Rostov-on-Don", country: "Russia" },
    // },
    // {
    //   id: "2",
    //   photoUrl: 'https://lh3.googleusercontent.com/proxy/RLf6q57CwczZBlB285hBGHsq9saGLBMwLIQTZd1HPGpKrT0cd8WKeywXQl6AOEUekbieXrRjMX9YcMgMPbAntkrlQFdJIvAv8w-IABom0l9NbbFNU5U1glGB8Lvtg36hNW_egR6et6Fwn6W22dVVSKs',
    //   followed: true,
    //   fullName: "Yana",
    //   status: "Whats up?",
    //   location: { city: "Gomel", country: "Belarus" },
    // },
    // {
    //   id: "3",
    //   photoUrl: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkzFB3khwQLJh-v57INgQs76aKTM5SRkZCeTgDn6uOyic&fn=sqr_288',
    //   followed: true,
    //   fullName: "Marina",
    //   status: "VIP",
    //   location: { city: "Moscow", country: "Russia" },
    // },
  ],

  newPostText: "Stefon dot com ",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map( (u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( (u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]}
    }
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export default usersReducer;
