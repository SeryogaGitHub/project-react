import React from 'react';
import Preloader from '../../../common/preloader/preloader';
import defaultImage from '../../../assect/img/default-user.png';
import ProfileStatusWithHook from "./ProfileStausWithHook";

const ProfileInfo = React.memo(props => {
  if(!props.profile){
    return <Preloader/>
  }

  const {photos, aboutMe, fullName} = props.profile;
  const {status, updateStatus} = props;
  return(
    <div className="account">
      <img src={photos.large ? photos.large : defaultImage} alt={'alt'}/>

      <p>Про мене: {aboutMe}</p>
      <p>Имя: {fullName}</p>

      <div>
        <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  )
});

export default ProfileInfo;
