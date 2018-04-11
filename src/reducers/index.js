import { combineReducers } from 'redux';
import NationLibraryReducer from './NationLibraryReducer';
import NationSelectionReducer from './NationSelectionReducer';

export default combineReducers({
  libraries: NationLibraryReducer,
  selectedLibraryId: NationSelectionReducer
});
