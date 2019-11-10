import React from 'react';
import Pagination from "./Pagination";
import User from "./User";

let Users = (props) => {
  const {users, follow, unfollow, pageSize, portionSize, totalItemsCount, currentPage, onPageChanged, followingInProgress} = props;

  return (
    <div className='users'>
      <Pagination pageSize={pageSize}
                  totalItemsCount={totalItemsCount}
                  currentPage={currentPage}
                  onPageChanged={onPageChanged}
                  portionSize={portionSize}
      />

      {users.map((u, i) => <User key={u.id}
                                 user={u}
                                 follow={follow}
                                 unfollow={unfollow}
                                 followingInProgress={followingInProgress}
      />)}

      <Pagination pageSize={pageSize}
                  totalItemsCount={totalItemsCount}
                  currentPage={currentPage}
                  onPageChanged={onPageChanged}
                  portionSize={portionSize}
      />
    </div>
  );
};
export default Users;
