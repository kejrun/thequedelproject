import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  POST_UPDATE,
  GET_ID,
  UPDATE_AGREEMENTS,
  UPDATE_DISAGREEMENTS,
  UPDATE_THANKS,
  NEW_POST_SAME_NATION,
} from './types';

export const updatePost = ({ prop, value }) => {
  return {
    type: POST_UPDATE,
    payload: { prop, value }
  };
};

export const makeNewPost = ({ queueLength, chosenNation, agreements, disagreements, thanks }) => {
  const userId = firebase.auth().currentUser.uid;

  return (dispatch) => {
    firebase.database().ref('/feed_posts')
    .push({
      time: Date.now(),
      userId,
      queueLength,
      chosenNation,
      agreements,
      disagreements,
      thanks })
    .then(() => {
      dispatch({ type: NEW_POST_SAME_NATION });
      Actions.pop();
    });
  };
};


export const updateAgreements = (postId) => {
  const updates =
  firebase.database().ref(`/feed_posts/${postId}/agreements`);
  updates.transaction((currentRank) => {
    return currentRank + 1;
  });
    return (dispatch) => {
      dispatch({ type: UPDATE_AGREEMENTS });
    };
};

export const updateDisagreements = (postId) => {
  const updates =
  firebase.database().ref(`/feed_posts/${postId}/disagreements`);
  updates.transaction((currentRank) => {
    return currentRank + 1;
  });
    return (dispatch) => {
      dispatch({ type: UPDATE_DISAGREEMENTS });
    };
};

export const updateThanks = (postId) => {
  const updates =
  firebase.database().ref(`/feed_posts/${postId}/thanks`);
  updates.transaction((currentRank) => {
    return currentRank + 1;
  });
    return (dispatch) => {
      dispatch({ type: UPDATE_THANKS });
    };
};

export const getId = (feedpostId) => {
  return {
  type: GET_ID,
  payload: feedpostId
  };
};
