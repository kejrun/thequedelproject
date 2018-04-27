import firebase from 'firebase';
import INTERACT_WITH_POST from './types';

export const interactWithPost = ({ postId, agreed, disagreed, thanked }) => {
  const userId = firebase.auth().currentUser.uid;
  firebase.database().ref(`/users/${userId}/`).child('interactedPost').child(postId)
  .push({ agreed, disagreed, thanked });
  return (dispatch) => {
    dispatch({ type: INTERACT_WITH_POST });
  };
};
