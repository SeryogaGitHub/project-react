import {profileAPI} from '../api/api';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';

let initialState = {
  postData: [
    {
      id: 1,
      ava: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Girl_in_blue_kimono.jpg',
      message: 'Повідомлення перше',
      like: '1'
    }
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.values,
        like: 1,
        ava: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Girl_in_blue_kimono.jpg',
        name: 'Mia'
      };

      let stateCopy = {...state};
      stateCopy.postData = [...state.postData];
      stateCopy.postData.unshift(newPost);
      return stateCopy;
    }

    case SET_USER_PROFILE:
      return {...state, profile: action.profile};

    case SET_STATUS:
      return {...state, status: action.status};

    default:
      return state;
  }
};

export const addPostAction = (values) => ({ type: ADD_POST, values });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);

  if(!response.data.resultCode){
    dispatch(setStatus(status));
  }
};

export default profileReducer;