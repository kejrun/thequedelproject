import firebase from 'firebase';
import {
  UPDATE_FOLLOWERS,
  FETCH_FOLLOWERS
} from './types';

export const following = ({ libraryId }) => {
  const userId = firebase.auth().currentUser.uid;
  firebase.database().ref(`/users/${userId}/following`)
  .push({ libraryId });

  const currentFollowers = firebase.database().ref(`/feed_following/${libraryId}/followers`);
  currentFollowers.transaction((currentRank) => {
    return currentRank + 1;
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
