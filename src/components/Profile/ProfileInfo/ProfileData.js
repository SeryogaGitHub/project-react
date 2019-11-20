import React from "react";

const ProfileData = (props) => {
  const {aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts} = props.profile;
  const {goToEditMode} = props;

  return(
    <div>
      <button onClick={ goToEditMode }>Редагувати</button>

      <p><strong>Про мене:</strong> {aboutMe}</p>
      <p><strong>Имя:</strong> {fullName}</p>

      <p><strong>Роботу:</strong> {lookingForAJob ? "Нешукаю" : "Шукаю"}</p>
      <p><strong>Описання роботи:</strong> {lookingForAJobDescription ? lookingForAJobDescription : "Інформація відсутня"}</p>

      <p><strong>Соцмережі:</strong></p> {Object.keys(contacts).map(key => {
      return <Contacts key={key} contactTitle={key} contactValue={contacts[key] ? contacts[key] : "-"}/>
    })}
    </div>

  );
};

const Contacts = ({contactTitle, contactValue}) => {
  return <p><strong>{contactTitle}:</strong> {contactValue}</p>
};

export default ProfileData;