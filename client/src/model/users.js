import { indexBy, prop } from 'ramda';
import { getJSON, postJSON } from '../util/fetch';
import { updateRequest } from './ajax';
import type { User } from './types/user';

type State = {
  byId: Array<User>
};

const DEFAULT_STATE = {
  byId: []
};
const NAMESPACE = 'USERS';
const ADD_USERS = `${NAMESPACE}/ADD_USERS`;

export const addUsers = (users: Array<User>) => ({
  type: ADD_USERS,
  payload: users
});

export const fetchUsers = () => dispatch => {
  const url = '/api/users.php';
  dispatch(updateRequest(`GET ${url}`, 'Pending'));
  return getJSON(url)
    .then(users => {
      dispatch(updateRequest(`GET ${url}`, 'Success'));
      dispatch(addUsers(users));
    })
    .catch(err => dispatch(updateRequest(`GET ${url}`, 'Error', err)));
};

export const createUser = user => dispatch => {
  const url = '/api/users.php';
  dispatch(updateRequest(`POST ${url}`, 'Pending'));
  return postJSON(url, user)
    .then(user => {
      debugger;
      dispatch(updateRequest(`POST ${url}`, 'Success'));
      dispatch(addUsers([user]));
    })
    .catch(err => dispatch(updateRequest(`POST ${url}`, 'Error', err)));
};

export default (state: State = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_USERS:
      return {
        byId: {
          ...state.byId,
          ...indexBy(prop('id'), action.payload)
        }
      };
    default:
      return state;
  }
};
