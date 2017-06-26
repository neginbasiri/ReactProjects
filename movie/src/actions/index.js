import axios from 'axios';
const API_URL = 'http://128.199.212.213:3000/v1/movies';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FILTER_MOVIES = 'FILTER_MOVIES';

export function fetchMovies(){
  const request = axios.get(API_URL);

  return{
    type: FETCH_MOVIES,
    payload: request
  };
}

export function filterMovies(searchKeyword) {

  return {
    type: FILTER_MOVIES,
    payload: searchKeyword
  };
}

