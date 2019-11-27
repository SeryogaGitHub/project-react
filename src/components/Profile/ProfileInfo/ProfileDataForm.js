import React from "react";
import {createField, Input, Textarea} from "../../../common/form/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = (props) => {
  const {handleSubmit, disableEditMode, profile} = props;

  return(
    <form onSubmit={handleSubmit} className={'default'}>
      <br/>

      <div className={'default'}>
        <button onClick={disableEditMode}>Зберегти профіль</button>
      </div>

      <div className={'default'}>
        <strong>Про мене:</strong>
        {createField("", 'aboutMe', Input)}
      </div>

      <div className={'default'}>
        <strong>Имя:</strong>
        {createField("", 'fullName', Input)}
      </div>

      <div className={'default'}>
        <strong>Роботу шукаю:</strong>
        {createField("", 'lookingForAJob', Input, [], {type: 'checkbox'})}
      </div>

      <div className={'default'}>
        <strong>Описання роботи:</strong>
        {createField("", 'lookingForAJobDescription', Textarea)}
      </div>

      <br/>

      <p><strong>Соцмережі:</strong></p>
      {Object.keys(profile.contacts).map(key => {
        return <div key={key} className={'default'}>
          <strong>{key}</strong>
          {createField("", 'contacts.' + key, Input)}
        </div>;
      })}
    </form>
  );
};
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataFormReduxForm;