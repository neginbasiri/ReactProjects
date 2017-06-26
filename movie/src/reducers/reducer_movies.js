import { FETCH_MOVIES, FILTER_MOVIES } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action){

  switch(action.type){
    case FETCH_MOVIES:
      return _.mapKeys(action.payload.data, '_id');
    case FILTER_MOVIES:
      return _.pickBy(state, (o) => _.includes(o.title, action.payload));
    default:
      return state;
  }
}
