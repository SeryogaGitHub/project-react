import {createSelector} from "reselect";

const getUsersSelector = (state) =>{
  return state.usersPage.users;
};

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
});

export const usersPage = (state) =>{
  return state.usersPage.pageSize;
};

export const totalItemsCount = (state) =>{
  return state.usersPage.totalItemsCount;
};

export const portionSize = (state) =>{
  return state.usersPage.portionSize;
};

export const currentPage = (state) =>{
  return state.usersPage.currentPage;
};

export const isFetching = (state) =>{
  return state.usersPage.isFetching;
};

export const followingInProgress = (state) =>{
  return state.usersPage.followingInProgress;
};