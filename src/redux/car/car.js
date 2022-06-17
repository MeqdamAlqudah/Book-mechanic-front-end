const initialState = [];
const GET_CARS_DATA = 'GET_CARS_DATA';
const POST_CARS_DATA = 'POST_CARS_DATA';
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CARS_DATA:
      return [...state, action.newitem];
    case (GET_CARS_DATA):
      return [action.cardata];
    default:
      return state;
  }
};

export default reducer;
