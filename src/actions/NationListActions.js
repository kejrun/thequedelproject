export const selectLibrary = (libraryId, title) => ({
    type: 'select_library',
    payload: ({ libraryId, title })
  });
