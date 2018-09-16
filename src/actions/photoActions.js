import { GET_PHOTO, GET_PHOTOS } from "./types";
import axios from 'axios';

export const getPhotos = () => async dispatch => {
  const res = await axios.get('https://api.unsplash.com/photos?per_page=100&client_id=0431d93d8ca6fdf995fc128909810726e56ad428d0bcf5ba9eeb831ff2981480');
  dispatch({
    type: GET_PHOTOS,
    payload: res.data
  })
}

export const getPhoto = (id) => async dispatch => {
  const res = await axios.get(`https://api.unsplash.com/photos/${id}/?client_id=0431d93d8ca6fdf995fc128909810726e56ad428d0bcf5ba9eeb831ff2981480`);
  dispatch({
    type: GET_PHOTO,
    payload: res.data
  })
}

