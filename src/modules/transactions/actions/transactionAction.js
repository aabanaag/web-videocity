import { types } from '../constants/transactionActionType';
import { push } from 'react-router-redux';
import Client from '../../../client';
import { isEmpty } from 'lodash';

export const setTransactions = (transactions, movies) => ({
  type: types.SET_TRANSACTIONS,
  payload: { transactions, movies }
});

export const setTransaction = (transaction) => ({
  type: types.SET_TRANSACTION,
  payload: { transaction }
});

export const setMovies = (movies) => ({
  type: types.SET_MOVIES,
  payload: { movies }
});

export const getTransactions = () => {
  return async dispatch => {
    try {
      await Client.authenticate();
      const query = {
        query: { type: 'rent' }
      };

      const result = await Client.service('transactions').find(query);

      dispatch(setTransactions(result.data, result.subDocument.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getTransaction = (id) => {
  return async dispatch => {
    try {
      await Client.authenticate();
      const result = await Client.service('transactions').get(id);

      dispatch(setTransaction(result));
    } catch (err) {
      console.log(err);
    }
  };
};

export const findTransaction = (id) => {
  return async dispatch => {
    try {
      let query = {};

      if (isEmpty(id)) {
        query = { query: { type: 'rent' } };
      } else {
        query = { query: { _id: id } };
      }

      await Client.authenticate();
      const result = await Client.service('transactions').find(query);

      dispatch(setTransactions(result.data, result.subDocument.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const returnMovie = (sourceId, movieId) => {
  return async dispatch => {
    try {
      await Client.authenticate();
      await Client.service('transactions').create({
        movieId,
        sourceId,
        type: 'return'
      });

      dispatch(getTransactions());
    } catch (err) {
      console.log(err);
    }
  }
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