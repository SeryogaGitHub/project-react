const ADD_POST_DIALOG = 'ADD-POST-DIALOG';

let initialState = {
  dialogsData: [
    {id: 1, name: 'Mia'},
    {id: 2, name: 'Beverly'},
    {id: 3, name: 'Marilyn'},
    {id: 4, name: 'Eva'},
  ],
  messageData: [
    {
      id: 1,
      name: 'Mia',
      ava: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Girl_in_blue_kimono.jpg',
      message: 'Lorem ipsum dolor'
    },
    {
      id: 2,
      name: 'Me',
      author: true,
      ava: 'https://i.work.ua/sent_photo/f/8/7/f87e96e9b571602f6fa2181c95d79b00.jpg',
      message: 'Lorem ipsum dolor sit amet.'
    }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_DIALOG:
      let newPost = {
        id: 1,
        name: 'Mia',
        ava: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Girl_in_blue_kimono.jpg',
        message: action.values
      };

      return {
        ...state,
        messageData: [newPost, ...state.messageData]
      };

    default:
      return state;
  }
};

export const addPostDialogsAction = (values) => ({ type: ADD_POST_DIALOG, values });

export default dialogsReducer;
