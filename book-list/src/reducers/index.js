/**
 * Created by nbasiri on 11/04/2017.
 */
import { combineReducers } from 'redux';
import BooksReducer from './reducer-books';
import ActiveBook from './reducer-active-book';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
