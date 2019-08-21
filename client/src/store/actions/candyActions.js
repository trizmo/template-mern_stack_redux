import axios from 'axios';
import { GET_CANDY, CANDY_LOADING } from './types';

export const getCandy = () => (dispatch, getState) => {
  console.log("getCandy() Action Working...")
  const token = getState().auth.token
  const config = { headers: { "Content-type": "application/json" } }
  if (token) {
    config.headers["x-auth-token"] = token
  }

  dispatch(setCandyLoading())
  axios.get("api/candy", config)
    .then(res => {
      dispatch({
        type: GET_CANDY,
        payload: res.data
      })
    }).catch(err => console.log(err))
}

export const setCandyLoading = () => {
  return {
    type: CANDY_LOADING
  }
}