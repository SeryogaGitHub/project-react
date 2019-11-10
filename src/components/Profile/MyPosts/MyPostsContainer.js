import {addPostAction} from '../../../redux/profile-reducer.js';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return{
    postData: state.profilePage.postData,
    textareaDefault: state.profilePage.textareaDefault
  }
};

let mapDispatchToProps = (dispatch) => {
  return{
    onPostClick: (values) => {
      dispatch(addPostAction(values));
    }
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
