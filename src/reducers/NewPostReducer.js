import {
  NEW_POST
} from '../actions/types';

const INITIAL_STATE = {
  queueLength: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_POST:
      // action.payload === { prop: 'name, value: 'Jane' }
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
