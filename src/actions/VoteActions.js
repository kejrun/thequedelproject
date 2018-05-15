import firebase from 'firebase';
import { THANK_POST, AGREE_POST, DISAGREE_POST, FETCH_VOTED } from './types';

export const thankPost = ({ postId, thanked }) => {
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
    firebase.database().ref(`/users/${userId}/interacted_posts/${postId}`)
    .update({ thanked })
    .then(() => dispatch({ type: THANK_POST }));
  };
};

export const agreePost = ({ postId, agree }) => {
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
    firebase.database().ref(`/users/${userId}/interacted_posts/${postId}`)
    .update({ agree })
    .then(() => dispatch({ type: AGREE_POST }));
  };
};

export const disagreePost = ({ postId, disagree }) => {
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
    firebase.database().ref(`/users/${userId}/interacted_posts/${postId}`)
    .update({ disagree })
    .then(() => dispatch({ type: DISAGREE_POST }));
  };
};

export const fetchVoted = () => {
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
    firebase.database().ref(`/users/${userId}/interacted_posts/`)
    .ref.on('value', (snapshot) => {
      dispatch({ type: FETCH_VOTED, payload: snapshot.val() });
    });
  };
};
