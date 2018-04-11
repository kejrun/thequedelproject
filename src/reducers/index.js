import { combineReducers } from 'redux';
import NationLibraryReducer from './NationLibraryReducer';
import NationSelectionReducer from './NationSelectionReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  libraries: NationLibraryReducer,
  selectedLibraryId: NationSelectionReducer,
  auth: AuthReducer
});
