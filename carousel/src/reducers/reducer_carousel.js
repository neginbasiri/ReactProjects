/**
 * Created by nbasiri on 5/05/2017.
 */

import data from '../data.json';
import{ PREV_ITEM, NEXT_ITEM, INIT_ITEM } from '../actions/index';

export default function(state = {}, action){

    const carousel = data.carousel;
    let index = Math.max(0, carousel.indexOf(state));

    switch(action.type){
        case INIT_ITEM:
            return carousel[index];
        case NEXT_ITEM:
            index = Math.min(index + 1, carousel.length - 1);
            return carousel[index];
        case PREV_ITEM:
            index = Math.max(index - 1, 0);
            return carousel[index];
    }

    return state;
};

