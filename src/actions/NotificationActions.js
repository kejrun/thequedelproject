import firebase from 'firebase';
import {
  UPDATE_FOLLOWERS,
  NOTIFICATION_FEED_FETCH_SUCCESS
} from './types';

export const notifyMe = ({ libraryId }) => {
  const userId = firebase.auth().currentUser.uid;
  firebase.database().ref(`/users/${userId}/`).child('following').push()
  .set({ libraryId });

  const currentFollowers = firebase.database().ref(`/feed_following/${libraryId}/followers`);
  currentFollowers.transaction((currentRank) => {
    return currentRank + 1;
  });
  return (dispatch) => {
    dispatch({ type: UPDATE_FOLLOWERS });
  };
};

export const feedFetchNotification = () => {
  const userId = firebase.auth().currentUser.uid;

  return (dispatch) => {
    firebase.database().ref(`/users/${userId}/`)
    .ref.orderByChild('following').on('value', snapshot => {
      dispatch({ type: NOTIFICATION_FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};
