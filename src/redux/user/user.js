const USER_SIGNUP = 'USER_SIGNUP';
const USER_LOGIN = 'USER_LOGIN';

const initialState = {
  current_user: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return { ...state };
    case USER_LOGIN:
      console.log(action.newUser)
      return { ...state, current_user: action.newUser };
    default:
      return state;
  }
};

export default reducer;
