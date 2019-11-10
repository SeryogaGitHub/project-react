import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Content from './components/Main/Main';
import AsideContainer from './components/Aside/AsideContainer';
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/login";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/preloader/preloader";
import {withSuspense} from "./hoc/whithSuspense";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
  componentDidMount() {
    const {initializeApp} = this.props;
    initializeApp();
  }

  render() {
    const {init} = this.props;

    if(!init){
      return <Preloader/>;
    }

    return (
      <div className='grid'>
        <HeaderContainer/>
        <AsideContainer/>
        <div className='main-content'>
          <Route exact path='/' component={Content}/>
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
          <Route path='/users' render={() => <UserContainer/>}/>
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/setting' component={Setting}/>
          <Route path='/login' component={Login}/>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  init: state.app.initialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
