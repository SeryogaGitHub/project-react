import {connect} from 'react-redux';
import Users from './Users';
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers
} from '../../redux/users-reducer';
import React from 'react';
import Preloader from '../../common/preloader/preloader';
import {
  currentPage,
  followingInProgress,
  getUsers,
  isFetching, portionSize,
  totalItemsCount,
  usersPage
} from "../../redux/users-selectors";

class UsersContainer extends React.Component{
  componentDidMount() {
    const {pageSize, currentPage, getUsers} = this.props;
    getUsers(currentPage, pageSize);
  }

  onPageChanged = (page) => {
    const {pageSize, getUsers, setCurrentPage} = this.props;
    setCurrentPage(page);
    getUsers(page, pageSize);
  };

  render() {
    const {users, follow, unfollow, pageSize, totalItemsCount, currentPage, isFetching, toggleFollowingProgress, followingInProgress, portionSize} = this.props;

    return(

      <>
        {isFetching ? <Preloader/> : null}
        <Users users={users}
               follow={follow}
               unfollow={unfollow}
               pageSize={pageSize}
               totalItemsCount={totalItemsCount}
               currentPage={currentPage}
               onPageChanged={this.onPageChanged}
               toggleFollowingProgress={toggleFollowingProgress}
               followingInProgress={followingInProgress}
               portionSize={portionSize}
        />
      </>
    )
  }
}

// let mapStateToProps = (state) => {
//   return{
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalItemsCount: state.usersPage.totalItemsCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// };

let mapStateToProps = (state) => {
  return{
    users: getUsers(state),
    pageSize: usersPage(state),
    totalItemsCount: totalItemsCount(state),
    currentPage: currentPage(state),
    isFetching: isFetching(state),
    followingInProgress: followingInProgress(state),
    portionSize: portionSize(state)
  }
};

const UserContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers: requestUsers})(UsersContainer);
export default UserContainer;
