import axios from 'axios';
import { GET_CANDY, CANDY_LOADING } from './types';

export const getCandy = () => (dispatch) => {
  console.log("getCandy() Action Working...")
  dispatch(setCandyLoading())
  axios.get("api/candy")
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