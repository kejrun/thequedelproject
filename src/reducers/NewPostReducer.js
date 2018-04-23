import {
  POST_UPDATE,
  AGREE,
  DISAGREE,
  SAVE_POST,
  UPDATE_AGREEMENTS,
  GET_POST_ID,
  NEW_POST_SAME_NATION,
  UPDATE_FOLLOWERS
} from '../actions/types';

const INITIAL_STATE = {
  queueLength: '',
  chosenNationId: '',
  agreements: 0,
  disagreements: 0,
  pid: '',
  followers: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_UPDATE:
      // action.payload === { prop: 'name, value: 'Jane' }
      return { ...state, [action.payload.prop]: action.payload.value };
    case NEW_POST_SAME_NATION:
      return state;
    case GET_POST_ID:
      return { ...state, pid: action.payload };
    case AGREE:
      return { ...state, agreements: state.agreements + 1 };
    case UPDATE_AGREEMENTS:
      return { ...state, agreements: action.payload };
    case DISAGREE:
      return { ...state, disagreements: state.disagreements + 1 };
    case UPDATE_FOLLOWERS:
      return { ...state, followers: action.payload };
    case SAVE_POST:
      return { ...state };
    case 'select_library':
      return { ...state, chosenNationId: action.payload };
    default:
      return state;
  }
};
