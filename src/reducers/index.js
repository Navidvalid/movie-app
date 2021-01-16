import { combineReducers } from 'redux';
import moviesReducer from './movieReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
});

export default rootReducer;
