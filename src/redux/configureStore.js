import { combineReducers } from 'redux'
import {configureStore} from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import logger from "redux-logger"
import userReducer from './user/user'
import carReducer from  './car/car'
import appointmentReducer from './appointment/appointment'

const rootReducer = combineReducers({
  userReducer,
  carReducer,
  appointmentReducer})
const store = configureStore({ reducer:rootReducer, Middleware:[thunk,logger] })

export default store
