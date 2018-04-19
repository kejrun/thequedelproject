import {
  NEW_POST,
  NEW_POST_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  queueLength: '',
  chosenNationId: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_POST_UPDATE:
      // action.payload === { prop: 'name, value: 'Jane' }
      return { ...state, [action.payload.prop]: action.payload.value };
    case NEW_POST:
      return INITIAL_STATE;
    default:
      return state;
  }
};
