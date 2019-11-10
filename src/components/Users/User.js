import React from 'react';
import defaultImage from '../../assect/img/default-user.png';
import {NavLink} from 'react-router-dom';

let User = (props) => {
  const {user, follow, unfollow, followingInProgress} = props;

  return (
    <div className='user'>
      <div className='ava-follow'>
        <NavLink to={'/profile/' + user.id}>
          <div className="ava" style={{backgroundImage: `url(${user.ava != null ? user.ava : defaultImage})`}}/>
        </NavLink>
        {
          user.followed
            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

              follow(user.id);

            }}>Відписатися</button>
            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

              unfollow(user.id);

            }}>Підписатися</button>}
      </div>

      <div className="information">
        <div className="name-location">
          <h3>{user.name}</h3>

          <div className="location text-center">
            {'user.location.country'} <br/> {'user.location.city'}
          </div>
        </div>

        <div className="status">{user.status}</div>
      </div>
    </div>
  );
};
export default User;
