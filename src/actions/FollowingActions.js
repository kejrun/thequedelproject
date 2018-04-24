import firebase from 'firebase';
import {
  UPDATE_FOLLOWERS
} from './types';

export const following = ({ libraryId }) => {
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
