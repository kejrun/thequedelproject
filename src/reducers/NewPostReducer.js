import {
  NEW_POST,
  POST_UPDATE,
  AGREE,
  DISAGREE,
  SAVE_POST,
  UPDATE_AGREEMENTS,
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
      return { INITIAL_STATE };
    case GET_POST_ID:
      return { ...state, pid: action.payload };
    case AGREE:
      console.log(state);
      return { ...state, agreements: state.agreements + 1 };
    case UPDATE_AGREEMENTS:
    console.log(state);
      return { ...state, agreements: action.payload };
    case DISAGREE:
      return { ...state, disagreements: state.disagreements + 1 };
    case SAVE_POST:
      return { ...state };
    default:
      return state;
  }
};
