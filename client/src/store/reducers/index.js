import { combineReducers } from 'redux';
import candyReducer from './candyReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';


export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  candy: candyReducer,
})