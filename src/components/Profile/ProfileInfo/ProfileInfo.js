import React, {useState} from 'react';
import Preloader from '../../../common/preloader/preloader';
import defaultImage from '../../../assect/img/default-user.png';
import ProfileStatusWithHook from "./ProfileStausWithHook";
import ProfileData from "./ProfileData";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = React.memo(props => {
  let {profile} = props;
  let [editMode, setEditMode] = useState(false);

  if(!profile){
    return <Preloader/>
  }
  const {photos} = profile;
  const {status, updateStatus, saveProfile} = props;

  const goToEditMode = () => {
    setEditMode(true);
  };

  const disableEditMode = () => {
    setEditMode(false);
  };

  const onSubmit = (formData) => {
    console.log(formData);
    saveProfile(formData);
    setEditMode(true);
  };

  return(
    <div className="account">
      <img src={photos.large ? photos.large : defaultImage} alt={'alt'}/>

      {editMode ? <ProfileDataFormReduxForm
                    onSubmit={onSubmit}
                    disableEditMode={disableEditMode}
                    initialValues={profile}
                    profile={profile}
                  />

                : <ProfileData goToEditMode={goToEditMode} profile={profile}/>
      }


      <div>
        <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  )
});

export default ProfileInfo;