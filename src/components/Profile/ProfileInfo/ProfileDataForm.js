import React from "react";
import {createField, Input, Textarea} from "../../../common/form/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = (props) => {
  const {disableEditMode} = props.profile;
  const {handleSubmit} = props;

  return(
    <form onSubmit={handleSubmit} className={'default'}>
      <br/>

      <div className={'default'}>
        <button onClick={ disableEditMode }>Зберегти профіль</button>
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

      {/*<p><strong>Соцмережі:</strong></p> {Object.keys(contacts).map(key => {*/}
      {/*return <Contacts key={key} contactTitle={key} contactValue={contacts[key] ? contacts[key] : "-"}/>*/}
    </form>
  );
};
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataFormReduxForm;