import React from 'react'
import Profile from './Profile';
import {getStatus, getUserProfile, updateStatus} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {withAuthRedirect} from "../../hoc/whithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  // зупиняє повторний render
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps !== this.props || nextState !== this.state;
  }

  componentDidMount() {
    const {getUserProfile, getStatus, history, match, authId} = this.props;
    console.log(this.props);
    let userId = match.params.userId;

    if(!userId){
      // todo
      userId = 1218;
      // userId = authId;

      if(!userId){
        history.push('/login');
      }
    }
    getUserProfile(userId);
    getStatus(userId);
  }

  render() {
    return(
      <Profile {...this.props}/>
    );
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  auth: state.auth.isAuth,
  status: state.profilePage.status,
  authId: state.auth.id
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withAuthRedirect,
  withRouter
)(ProfileContainer);
