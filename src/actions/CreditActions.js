import firebase from 'firebase';
import { THANK_POST, AGREE_POST, DISAGREE_POST } from './types';

export const thankPost = ({ postId, thanked }) => {
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
  firebase.database().ref(`/users/${userId}/interacted_posts/${postId}`)
  .update({ thanked: `${thanked}` })
  .then(() => dispatch({ type: THANK_POST }));
};
};

export const agreePost = ({ postId, agree }) => {
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
  firebase.database().ref(`/users/${userId}/interacted_posts/${postId}`)
  .update({ agree: `${agree}` })
  .then(() => dispatch({ type: AGREE_POST }));
};
};

export const disagreePost = ({ postId, disagree }) => {
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
  firebase.database().ref(`/users/${userId}/interacted_posts/${postId}`)
  .update({ disagree: `${disagree}` })
  .then(() => dispatch({ type: DISAGREE_POST }));
};
};
