import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
}

export default function (state = initialState, action) {
  switch (action.type) {

    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      }

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      }

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      }

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        token: null,
        user: null,
      }


    default:
      return state;
  }
}