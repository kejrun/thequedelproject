import {
  POST_UPDATE,
  AGREE,
  DISAGREE,
  SAVE_POST,
  UPDATE_AGREEMENTS,
  UPDATE_DISAGREEMENTS,
  GET_POST_ID,
  NEW_POST_SAME_NATION

} from '../actions/types';

const INITIAL_STATE = {
  queueLength: '',
  chosenNationId: '',
  agreements: 0,
  disagreements: 0,
  pid: ''
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
      //console.log(state);
      return { ...state, agreements: state.agreements + 1 };
    case UPDATE_AGREEMENTS:
    //console.log(state);
      return { ...state, agreements: action.payload };
    case UPDATE_DISAGREEMENTS:
      return { ...state, disagreements: action.payload }
    case DISAGREE:
      return { ...state, disagreements: state.disagreements + 1 };
    case SAVE_POST:
      return { ...state };
    case 'select_library':
      return { ...state, chosenNationId: action.payload };
    default:
      return state;
  }
};
