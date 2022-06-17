const USER_SIGNUP = 'USER_SIGNUP'
const USER_LOGIN = 'USER_LOGIN'

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP: 
    return {...state, current_user: action.newUser}
    case USER_LOGIN:
      return {...state, current_user: action.newUser};
    default:
      return state;
  }
};

export default reducer;
