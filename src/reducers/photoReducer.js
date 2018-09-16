import { GET_PHOTOS } from '../actions/types';

const initialState = {
  photos: [],
  photo: {}
}

export default function(state = initialState, action){
  switch (action.type){
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload
      };
    default:
      return state;
  }
}