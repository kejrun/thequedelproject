import {
  DELETE_POST
 } from '../actions/types';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_POST:
      return state;
    default:
      return state;
  }
};
