import {Redirect} from "react-router";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
  auth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      const {auth} = this.props;
      if (!auth) return <Redirect to={'/login'}/>

      return <Component {...this.props}/>
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
};

