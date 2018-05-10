import {
  FETCH_VOTED
} from '../actions/types';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_VOTED:
      return action.payload;
    default:
      return state;
  }
};
