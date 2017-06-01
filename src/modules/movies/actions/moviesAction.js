import { types } from '../constants/moviesActionType';
import Client from '../../../client';

export const setMovies = (movies) => ({
  type: types.SET_MOVIES,
  payload: { movies }
});

export const getMovies = () => {
  return async dispatch => {
    try {
      const result = await Client.service('movies').find();

      dispatch(setMovies(result.data));
    } catch (err) {
      console.log(err);
    }
  };
};
