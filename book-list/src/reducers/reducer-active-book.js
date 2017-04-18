/**
 * Created by nbasiri on 12/04/2017.
 */
export default function (state = null, action){

    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload
    }

    return state;
}