export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return { nationID: action.payload.libraryId, title: action.payload.title };
    default:
      return state;
  }
};
