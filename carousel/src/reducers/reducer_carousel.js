/**
 * Created by nbasiri on 5/05/2017.
 */

import data from '../data.json';
import _ from 'lodash';
import{ NEXT_ITEM, PREV_ITEM } from '../actions';

export default function(state = null, action){

    const init = _.head(data.carousel);

    switch(action.type){
        case 'NEXT_ITEM':
            return
        case 'PREV_ITEM':
            return

    }
    return init;
};

