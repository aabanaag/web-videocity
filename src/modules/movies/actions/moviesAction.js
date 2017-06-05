import { types } from '../constants/moviesActionType';
import { push } from 'react-router-redux';
import Client from '../../../client';
import { isEmpty } from 'lodash';
import moment from 'moment';

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
      let query = (isEmpty(title)) ? {} : { query: { title } };
      const result = await Client.service('movies').find(query);

      dispatch(setMovies(result.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const rentMovie = (id) => {
  return async dispatch => {
    try {
      await Client.authenticate();
      const result = await Client.service('transactions').create({
        movieId: id,
        userId: '',
        dueDate: moment().add(7, 'd'),
        amount: 20
      });
      console.log(result);
      dispatch(push('/movies'));
    } catch (err) {
      console.log(err);
    }
  };
};
