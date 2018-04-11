import { LOGIN_USER } from '../actions/types';

const INITIAL_STATE = {
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
