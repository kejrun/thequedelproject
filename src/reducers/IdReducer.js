import { GET_ID, UP_VOTE, DOWN_VOTE } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case GET_ID:
      return action.payload;
    case UP_VOTE:
      return action.payload + 1;
    case DOWN_VOTE:
      return action.payload + 1;
    default:
      return state;
  }
};
