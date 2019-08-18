import { GET_CANDY, ADD_CANDY, CANDY_LOADING } from '../actions/types';

const initialState = {
  data: {},
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {

    case GET_CANDY:
    console.log("GET_CANDY Reducer Working...")
    return {
      ...state,
      data: action.payload,
      loading: false
      }


    case ADD_CANDY:
      return {
        ...state,
        data: [...state.data, action.payload]
      }


    case CANDY_LOADING:
      return {
        ...state,
        loading: true
      }

    default:
      return state;
  }
}