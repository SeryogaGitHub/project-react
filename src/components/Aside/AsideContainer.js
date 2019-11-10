import {connect} from 'react-redux';
import Aside from './Aside';
import {compose} from "redux";

let mapStateToProps = (state) => {
  return{
    friendsData: state.aside.friendsData
  }
};

export default compose(
  connect(mapStateToProps)
)(Aside);

