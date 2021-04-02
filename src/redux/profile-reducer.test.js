import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer.js";
import React from "react";


let state = {  posts: [
  { id: "1", message: "Hi, how are you?", likesCount: "15" },
  { id: "2", message: "It's my first post", likesCount: "20" },
]};

test('post should be increased', () => {
  // 1. start data 
  let action = addPostActionCreator("it-kamasutra.com");

  // 2. action
  let newState = profileReducer (state, action);

  //3. expectation 
   expect(newState.posts.length).toBe(3);

}); 

test('message of new post should be correct', () => {
  // 1. start data 
  let action = addPostActionCreator("it-kamasutra.com");

  // 2. action
  let newState = profileReducer (state, action);

  //3. expectation 

   expect(newState.posts[2].message).toBe("it-kamasutra.com");
}); 

test('lenght od post should be decreased', () => {
  // 1. start data 
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer (state, action);

  //3. expectation 

   expect(newState.posts.length).toBe(1);
}); 

test('lenght od post should be chenged if id is incorrect', () => {
  // 1. start data 
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer (state, action);

  //3. expectation 

   expect(newState.posts.length).toBe(2);
}); 