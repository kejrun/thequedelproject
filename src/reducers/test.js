
const INITIAL_STATE = {
  test: 0,
  global: 'global'
};


export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case 'TEST':
      return { ...state, test: state.test + 1 };
    default:
      return state;
    }
};
