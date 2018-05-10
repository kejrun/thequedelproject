import {
  SET_FOLLOWED
} from '../actions/types';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FOLLOWED:
      return action.payload;
    default:
      return state;
  }
};
