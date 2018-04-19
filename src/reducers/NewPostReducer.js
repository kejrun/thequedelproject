import {
  NEW_POST,
  POST_UPDATE,
  AGREE,
  DISAGREE,
  UPDATE_POST_STATUS,
  GET_POST_ID
} from '../actions/types';

const INITIAL_STATE = {
  queueLength: '',
  agreements: 0,
  disagreements: 0,
  pid: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_UPDATE:
      // action.payload === { prop: 'name, value: 'Jane' }
      return { ...state, [action.payload.prop]: action.payload.value };
    case NEW_POST:
      return INITIAL_STATE;
    case GET_POST_ID:
      return { ...state, pid: action.payload };
    case AGREE:
      return { ...state, agreements: state.agreements + 1 };
    case DISAGREE:
      return { ...state, disagreements: state.disagreements + 1 };
    case UPDATE_POST_STATUS:
      return { ...state };
    default:
      return state;
  }
};
