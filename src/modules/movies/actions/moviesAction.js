import { types } from '../constants/moviesActionType';
import { push } from 'react-router-redux';
import Client from '../../../client';
import { isEmpty } from 'lodash';

export const setMovies = (movies) => ({
  type: types.SET_MOVIES,
  payload: { movies }
});

export const setMovie = (movie) => ({
  type: types.SET_MOVIE,
  payload: { movie }
});

export const getMovies = () => {
  return async dispatch => {
    try {
      await Client.authenticate();
      const query = { query: { status: 'available'} };
      const result = await Client.service('movies').find(query);

      dispatch(setMovies(result.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMovie = (id) => {
  return async dispatch => {
    try {
      await Client.authenticate();
      const result = await Client.service('movies').get(id);

      dispatch(setMovie(result));
    } catch (err) {
      console.log(err);
    }
  };
};

export const findMovie = (title) => {
  return async dispatch => {
    try {
      let query = (isEmpty(title)) ? {} : { query: {
        title: { $regex: title }
      }};
      const result = await Client.service('movies').find(query);

      dispatch(setMovies(result.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const rentMovie = (movieId) => {
  return async dispatch => {
    try {
      await Client.authenticate();
      await Client.service('transactions').create({
        movieId,
        amount: 20,
        type: 'rent'
      });

      dispatch(push('/movies'));
    } catch (err) {
      console.log(err);
    }
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      await Client.logout();

      dispatch(push('/'));
    } catch (err) {
      console.log(err);
    }
  };
};
