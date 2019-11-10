import {addPostDialogsAction} from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../hoc/whithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    auth: state.auth.isAuth
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    onAddPostDialog: (values) => {
      dispatch(addPostDialogsAction(values));
    }
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

