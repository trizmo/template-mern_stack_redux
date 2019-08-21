import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS
} from './types'
import axios from 'axios'
import { returnErrors } from './errorActions'


// Load Authenticated User
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING })
  const token = getState().auth.token
  const config = { headers: { "Content-type": "application/json" } }
  if (token) { config.headers["x-auth-token"] = token }

  axios.get("/api/user/current", config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.msg, err.response.status, err.response.data));
      dispatch({
        type: AUTH_ERROR,
        // payload: err
      })
    })
}

// Login User
export const login = ({ email, password }) => dispatch => {
  console.log("login action")
  // Headers
  const config = { headers: { "Content-type": "application/json" } }

  // Request body
  const body = JSON.stringify({ email, password });
  axios.post('/api/user/login', body, config)
    .then(res => dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    }))
    // .then(() => {
    //   this.props.history.push("/")
    // })
    .catch(err => {
      console.log(err)
      dispatch(returnErrors(err.response.message, err.response.status, err.response.data))
      dispatch({
        type: LOGIN_FAIL
      })
    })
}




// Register User
export const register = ({ email, password }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }
  // Request body
  const body = JSON.stringify({ email, password });
  axios.post('/api/user/register', body, config)
    .then(res => dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.msg, err.response.status, err.response.data))
      dispatch({
        type: REGISTER_FAIL
      })
    })
}

// To log out user
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}