import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

//this func is reeally the mapping of our state.
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBookReducer: ActiveBookReducer
});

export default rootReducer;
