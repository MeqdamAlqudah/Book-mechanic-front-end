const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENT:
      return [...state, action.newAppointment];
    default:
      return state;
  }
};

export default reducer;
