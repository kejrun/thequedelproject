import { combineReducers } from 'redux';
import NationLibraryReducer from './NationLibraryReducer';
import FollowedNationLibraryReducer from './FollowedNationLibraryReducer';
import NationSelectionReducer from './NationSelectionReducer';
import AuthReducer from './AuthReducer';
import NewPostReducer from './NewPostReducer';
import FeedFetchReducer from './FeedFetchReducer';
import test from './test';
import IdReducer from './IdReducer';
import UserCreditReducer from './UserCreditReducer';

export default combineReducers({
  libraries: NationLibraryReducer,
  librariesFollowed: FollowedNationLibraryReducer,
  selectedLibraryId: NationSelectionReducer,
  auth: AuthReducer,
  newpost: NewPostReducer,
  feedpost: FeedFetchReducer,
  testing: test,
  selectedId: IdReducer,
  userCredits: UserCreditReducer
});
