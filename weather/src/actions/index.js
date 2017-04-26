import axios from 'axios';
const API_KEY = 'e7eb1e2880d1a5fae28d69db7e3c698e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
import {FETCH_WEATHER} from '../actions/actionTypesProxy';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},au`;
    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload: request
    };
}