import { types } from '../constants/loginActionType';
import Client from '../../../client';

export const toggleLogin = (status, msg) => ({
  type: types.TOGGLE_LOGIN,
  payload: {
    isLoggedIn: status,
    errorMessage: msg
  }
});

export const login = ({email, password}) => {
  return async dispatch => {
    try {
      const type = 'local';
      const result = await Client.authenticate({
        strategy: type,
        email,
        password
      });
      
      dispatch(toggleLogin(true, ''));
    } catch(err) {
      dispatch(toggleLogin(false, err.message));
    }
  }
};