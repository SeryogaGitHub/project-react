import React, {PureComponent} from 'react';
import Post from "./Posts/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/form/FormsControls";

class MyPosts extends PureComponent {

  render() {
    const {onPostClick, postData} = this.props;
    const postEl = postData.map((p, i) => <Post key={i} message={p.message} like={p.like} ava={p.ava}/>);

    let addPostMessage = (values) => {
      onPostClick(values.message);
    };

    return (
      <div className='posts-block'>
        <h2>Мої повідомлення</h2>

        <ProfileReduxForm onSubmit={addPostMessage}/>

        {postEl}
      </div>
    )
  }
}

const maxLength10 = maxLengthCreator(10);

const ProfileForm = (props) => {
  const {handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field component={Textarea}
             placeholder="Текст повідомлення"
             name={'message'}
             validate={[required, maxLength10]}
      />
      <button>Створити повідомлення</button>
    </form>
  );
};

const ProfileReduxForm = reduxForm({form: 'profile'})(ProfileForm);

export default MyPosts;