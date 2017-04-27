/**
 * Created by nbasiri on 27/04/2017.
 */
import { FETCH_POSTS } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}