import {
  FETCH_FOLLOWERS
} from '../actions/types';

const INITIAL_STATE = {
  followers: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FOLLOWERS:
      return { ...state, followers: action.payload };
    default:
      return state;
  }
};
