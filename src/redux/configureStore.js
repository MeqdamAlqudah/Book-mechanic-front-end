import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import axios from 'axios';
import userReducer from './user/user';
import carReducer from './car/car';
import appointmentReducer from './appointment/appointment';
import carDetailReducer from './car/carDetail';

const rootReducer = combineReducers({
  userReducer,
  carReducer,
  appointmentReducer,
  carDetailReducer,
});
const DELETE_CAR_MIDDLEWARE = 'DELETE_CAR_MIDDLEWARE';
const DELETE_CAR = 'DELETE_CAR';

const deletecarmiddleware = (store) => (next) => (action) => {
  if (action.type === DELETE_CAR_MIDDLEWARE) {
    // Make an API call to fetch Book from the server

    axios.delete(`http://localhost:3000/api/v1/users/${action.data.user_id}/cars/${action.data.car_id}`).then((response) => {
      store.dispatch({ type: DELETE_CAR, data: response });
    });
  }

  return next(action);
};

const store = configureStore(
  {
    reducer: rootReducer,
    middleware:
     (getDefaultMiddleware) => getDefaultMiddleware().concat(
       logger, deletecarmiddleware,
     ),
  },
);

export default store;
