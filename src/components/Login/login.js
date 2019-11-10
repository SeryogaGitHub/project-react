import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {createField, Input} from "../../common/form/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";

const maxLength = maxLengthCreator(50);

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit} className={'login'}>
      {createField("Email", 'email', Input, [required, maxLength])}
      {createField("Password", 'password', Input, [required, maxLength], {type:'password'})}
      {createField("Запамятати", 'rememberMe', Input, [], {type:'checkbox', id:'remember'})}

      {error &&
        <div className={'form-error'}>
          {error}
        </div>
      }

      <div className={'default'}>
        <button type={'submit'}>Логінитися</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

class Login extends React.Component {
  state = {
    submitLogin: false
  };

  onSubmit = (formData) => {
    const {login} = this.props;
    login(formData.email, formData.password, formData.rememberMe);
  };

  render() {
    const {auth} = this.props;
    if(auth) return <Redirect to={'/profile'}/>

    return (
      <div>
        <h1 className={"text-center"}>Логін</h1>
        <LoginReduxForm onSubmit={this.onSubmit}/>
      </div>
    )
  };
};

const mapStateToProps = (state) => ({
  auth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);