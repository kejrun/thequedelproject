import firebase from 'firebase';
import { THANK_POST, AGREE_POST, DISAGREE_POST, FETCH_THANKS_SUCCESS } from './types';

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

export const fetchThanks = (postId) => {
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
    firebase.database().ref(`/users/${userId}/interacted_posts/${postId}/thanked`)
    .ref.on('value', (snapshot) => {
      const thanked = snapshot.val();
      dispatch({ type: FETCH_THANKS_SUCCESS, payload: thanked });
    });
  };
};

export const fetchAgreements = (postId) => {
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
  firebase.database().ref(`/users/${userId}/interacted_posts/${postId}`)
  .ref.orderByChild('thanks').equalTo(true).on('value', snapshot => {
    dispatch({ type: FETCH_THANKS_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const fetchDisagreements = (postId) => {
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
  firebase.database().ref(`/users/${userId}/interacted_posts/${postId}`)
  .ref.orderByChild('thanks').equalTo(true).on('value', snapshot => {
    dispatch({ type: FETCH_THANKS_SUCCESS, payload: snapshot.val() });
    });
  };
};
