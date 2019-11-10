import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/form/FormsControls";

const Dialogs = (props) => {

  const {dialogsData, messageData} = props.dialogsPage;
  const {onAddPostDialog} = props;

  const dialogsEl = dialogsData.map((d, i) => <DialogItem key={i} name={d.name} id={d.id}/>);
  const messagesEl = messageData.map((m,i) => <Message key={i} author={m.author} name={m.name} ava={m.ava} message={m.message}/>);

  let addPostDialog = (value) => {
    onAddPostDialog(value.message);
  };

  return (
    <div className='page-dialogs'>
      <h1>Повідомлення</h1>

      <DialogReduxForm onSubmit={addPostDialog}/>

      <div className="message-dialogs">
        <ul className='dialogs'>
          {dialogsEl}
        </ul>

        <pre className="messages">
          {messagesEl}
        </pre>

      </div>
    </div>
  );
};

const maxLength = maxLengthCreator(10);

const DialogForm = (props) => {
  const {handleSubmit} = props;

  return(
    <form onSubmit={handleSubmit} className="dialogs-send-message">
      <Field placeholder={"Текст повідомлення"}
             component={Textarea}
             name={'message'}
             validate={[required, maxLength]}
      />
      <button className="btn">Відправити повідомлення</button>
    </form>
  );
};

const DialogReduxForm = reduxForm({form: 'dialog'})(DialogForm);

export default Dialogs;

