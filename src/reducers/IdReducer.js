import { GET_ID, UP_VOTE, DOWN_VOTE } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case GET_ID:
      //console.log('IdReducer: state, GET_ID payload');
      //console.log(state);
      //console.log(action.payload);
      return action.payload;
    case UP_VOTE:
      return action.payload + 1;
    case DOWN_VOTE:
      return action.payload + 1;
    default:
      return state;
  }
};
