import { combineReducers } from 'redux';
import CarouselReducer from './reducer_carousel';


const rootReducer = combineReducers({
    item: CarouselReducer
});

export default rootReducer;
