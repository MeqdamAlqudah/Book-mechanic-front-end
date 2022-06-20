const initialState = {};
const GET_CAR_DETAIL = 'GET_CAR_DETAIL';
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAR_DETAIL:
      return { currentCarId: action.data };
    default:
      return state;
  }
};

export default reducer;
