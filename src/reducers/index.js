import { combineReducers } from 'redux';
import NationLibraryReducer from './NationLibraryReducer';
import FollowedNationLibraryReducer from './FollowedNationLibraryReducer';
import NationSelectionReducer from './NationSelectionReducer';
import AuthReducer from './AuthReducer';
import NewPostReducer from './NewPostReducer';
import FeedFetchReducer from './FeedFetchReducer';
import IdReducer from './IdReducer';
import UserVotesReducer from './UserVotesReducer';
import UserCreditsReducer from './UserCreditsReducer';
import FetchFollowersReducer from './FetchFollowersReducer';
import TrustedUserReducer from './TrustedUserReducer';

export default combineReducers({
  libraries: NationLibraryReducer,
  librariesFollowed: FollowedNationLibraryReducer,
  selectedLibraryId: NationSelectionReducer,
  auth: AuthReducer,
  newpost: NewPostReducer,
  feedpost: FeedFetchReducer,
  selectedId: IdReducer,
  userVotes: UserVotesReducer,
  credits: UserCreditsReducer,
  fetchFollowers: FetchFollowersReducer,
  trusted: TrustedUserReducer
});
