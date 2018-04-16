import {
  LOGIN_USER,
  WELCOME_USER,
  PROCEED_TO_OVERVIEW
 } from '../actions/types';

const INITIAL_STATE = {
  error: '',
  loading: false,
  welcoming: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case WELCOME_USER:
      return { ...state, welcoming: true };
    case PROCEED_TO_OVERVIEW:
      return { ...state, loading: false, welcoming: false };
    default:
      return state;
  }
};
