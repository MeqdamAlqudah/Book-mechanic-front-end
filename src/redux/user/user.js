const initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, current_user: action.newUser };
    default:
      return state;
  }
};

export default reducer;
