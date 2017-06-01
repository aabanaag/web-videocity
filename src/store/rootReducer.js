import { combineReducers } from 'redux';

import movies from '../modules/movies/reducers/moviesReducer';

const rootReducer = combineReducers({
  movies
});

export default rootReducer;