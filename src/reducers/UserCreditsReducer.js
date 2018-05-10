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
      console.log(state.credits);
      return { ...state, credits: action.payload };
    case THANK_CREDIT:
      return { ...state, credits: state.credits + action.payload };
    case AGREE_CREDIT:
      return { ...state, credits: state.credits + action.payload };
    default:
      return state;
  }
};
