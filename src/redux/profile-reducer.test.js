import React from "react";
import profileReducer, {addPostAction} from "./profile-reducer";

let state = {
  postData: [
    {
      id: 1,
      ava: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Girl_in_blue_kimono.jpg',
      message: 'Повідомлення перше',
      like: '1'
    }
  ]
};

it('renders without crashing', () => {
  // 1. test data
  let action = addPostAction('New message');

  // 2.action
  let newState = profileReducer(state, action);

  // expectation
  expect(newState.postData.length).toBe(1);
});