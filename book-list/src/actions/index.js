/**
 * Created by nbasiri on 12/04/2017.
 */
export function selectBook (book){
    return{
        type: 'BOOK-SELECTED',
        payload: book
    };
}