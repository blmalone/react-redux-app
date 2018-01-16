import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//this func is reeally the mapping of our state.
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
