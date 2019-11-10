import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const {profile, status, updateStatus} = props;

  return (
    <div className='content-profile'>
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
      <MyPostsContainer/>
    </div>
  )
};

export default Profile;
