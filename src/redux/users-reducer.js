import {userAPI} from '../api/api';
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'user/FOLLOW';
const UNFOLLOW = 'user/UNFOLLOW';
const SET_USERS = 'user/SET_USERS';
const CURRENT_PAGE = 'user/CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'user/TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'user/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'user/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 10,
  portionSize: 10,
  totalItemsCount: 50,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
      };
    case SET_USERS:
      // return {...state, users: [...state.users, ...action.users]};

      let stateCopy = {...state};
      stateCopy.users = action.users;
      return stateCopy;
    case CURRENT_PAGE:
      return {...state, currentPage: action.currentPage};
    case TOTAL_USERS_COUNT:
      return {...state, totalItemsCount: action.count};
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter(id => id !== action.userID)
      };
    default:
      return state;
  }
};

export const followSuccses = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: CURRENT_PAGE, currentPage});
export const setTotalUserCount = (totalPage) => ({type: TOTAL_USERS_COUNT, count: totalPage});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userID) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID});

export const requestUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));

    userAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setTotalUserCount(data.totalCount));
      dispatch(setUsers(data.items));
      dispatch(setIsFetching(false));
    });
  };
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));

  let data = await apiMethod(userId);

  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.setUnfollow.bind(userAPI), unfollowSuccess);
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.setFollow.bind(userAPI), followSuccses);
  };
};

export default usersReducer;
