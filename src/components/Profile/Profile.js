import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const {profile, status, updateStatus, saveProfile} = props;

  return (
    <div className='content-profile'>
      <ProfileInfo profile={profile}
                   status={status}
                   updateStatus={updateStatus}
                   saveProfile={saveProfile}/>
      <MyPostsContainer/>
    </div>
  )
};

export default Profile;
