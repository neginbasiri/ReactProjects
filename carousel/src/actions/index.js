const NEXT_ITEM = 'NEXT_ITEM';
const PREV_ITEM = 'PREV_ITEM';


export function nextItem(id){

    return{
        type: NEXT_ITEM,
        payload: id
    };
}

export function prevItem(id){

    return{
        type: PREV_ITEM,
        payload: id
    };
}

