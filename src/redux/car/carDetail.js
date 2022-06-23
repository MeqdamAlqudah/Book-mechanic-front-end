const initialState = {};
const GET_CAR_DETAIL = 'GET_CAR_DETAIL';
const DELETE_CAR = 'DELETE_CAR';
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAR_DETAIL:
      return { currentCarId: action.data };
    case DELETE_CAR:
      return { currentCarId: 0 };
    default:
      return state;
  }
};

export default reducer;
