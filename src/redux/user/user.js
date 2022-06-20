const USER_SIGNUP = 'USER_SIGNUP';
const USER_LOGIN = 'USER_LOGIN';
const LOGOUT = 'LOGOUT'

const initialState = {
  current_user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return { ...state };
    case USER_LOGIN:
      return { ...state, current_user: action.newUser };
    case LOGOUT:
      return {...state, current_user: {}}
    default:
      return state;
  }
};

export default reducer;
