import { combineReducers } from 'redux';
import candyReducer from './candyReducer';


export default combineReducers({
  candy: candyReducer,
})