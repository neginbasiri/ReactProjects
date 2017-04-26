/**
 * Created by nbasiri on 18/04/2017.
 */
import {FETCH_WEATHER} from '../actions/actionTypesProxy';

export default function(state = [], action){

    switch (action.type){
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
    }
    return state;
}
