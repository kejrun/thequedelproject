import firebase from 'firebase';
import {
  SET_FOLLOWED,
  UPDATE_FOLLOWERS,
  FETCH_FOLLOWERS
} from './types';

export const setFollowed = () => {
  const libraryIds =
  { libraryIds: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false
  }
};
const userId = firebase.auth().currentUser.uid;
return (dispatch) => {
  firebase.database().ref(`/users/${userId}/following/libraryIds`).on('value', snapshot => {
    if (snapshot.val() === null) {
      firebase.database().ref(`/users/${userId}/following/`)
      .set(libraryIds).then(
        dispatch({ type: SET_FOLLOWED, payload: libraryIds }));
      } else {
        dispatch({ type: SET_FOLLOWED, payload: snapshot.val() });
      }
    });
  };
};

export const following = ({ libraryId, followed }) => {
  const isFollowing = !followed;
  const userId = firebase.auth().currentUser.uid;
  firebase.database().ref(`/users/${userId}/following/libraryIds/${libraryId}`)
  .set(isFollowing);

  const currentFollowers = firebase.database().ref(`/feed_following/${libraryId}/followers`);
  currentFollowers.transaction((currentRank) => {
    if (isFollowing) {
      return currentRank + 1;
    }
    return currentRank - 1;
  });
  return (dispatch) => {
    dispatch({ type: UPDATE_FOLLOWERS });
  };
};

export const fetchingFollowers = ({ libraryId }) => {
  return (dispatch) => {
    firebase.database().ref(`/feed_following/${libraryId}/followers`).on('value', snapshot => {
      dispatch({ type: FETCH_FOLLOWERS, payload: snapshot.val() });
    });
  };
};
