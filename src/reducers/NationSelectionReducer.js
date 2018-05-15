export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
    return { libraryId: action.payload.libraryId, title: action.payload.title };
    default:
    return state;
  }
};
