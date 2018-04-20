import {
  NEW_POST_SAME_NATION,
  NEW_POST_UPDATE,
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
    case 'select_library':
      return { ...state, chosenNationId: action.payload };
    case NEW_POST_SAME_NATION:
      return state;
    default:
      return state;
  }
};
