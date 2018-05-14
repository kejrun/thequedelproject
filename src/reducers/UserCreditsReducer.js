import {
  USER_CREDITS,
  THANK_CREDIT,
  AGREE_CREDIT
} from '../actions/types';

const INITIAL_STATE = {
  credits: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_CREDITS:
      return { ...state, credits: action.payload };
    case THANK_CREDIT:
      return { ...state };
    case AGREE_CREDIT:
      return { ...state };
    default:
      return state;
  }
};
