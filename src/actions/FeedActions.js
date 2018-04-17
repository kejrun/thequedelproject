import firebase from 'firebase';
import {
  NEW_POST,
  FEED_FETCH_SUCCESS
} from './types';

export const makeNewPost = ({ prop, value }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/user_posts`)
    .push({ prop, value })
    .then(() => {
      dispatch({ type: NEW_POST });
    });
  };
};

export const feedFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/user_posts`)
    .on('value', snapshot => {
      dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};
