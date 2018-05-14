import {
  TRUSTED_USER,
  TRUST_USER
} from '../actions/types';

const INITIAL_STATE = {
  trusted: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRUSTED_USER:
      return { trusted: action.payload };
    case TRUST_USER:
      return { ...state };
    default:
      return state;
  }
};
