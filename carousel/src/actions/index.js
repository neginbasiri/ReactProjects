export const NEXT_ITEM = 'NEXT_ITEM';
export const INIT_ITEM  = 'INIT_ITEM';
export const PREV_ITEM = 'PREV_ITEM';

export function nextItem(){

    return{
        type: NEXT_ITEM
    };
}

export function initItem(){

    return {
        type: INIT_ITEM
    }
}

export function prevItem(){

    return {
        type: PREV_ITEM
    }
}
