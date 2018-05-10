import {
  USER_THANKS,
} from '../actions/types';

const INITIAL_STATE = {
  userthanks: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_THANKS:
      return { ...state, userthanks: action.payload };
    default:
      return state;
  }
};
