import {
  FETCH_THANKS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_THANKS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
