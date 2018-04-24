import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  POST_UPDATE,
  AGREE,
  DISAGREE,
  SAVE_POST,
  GET_POST_ID,
  GET_ID,
  UPDATE_AGREEMENTS,
  UPDATE_DISAGREEMENTS,
  UP_VOTE,
  DOWN_VOTE,
  NEW_POST_SAME_NATION,
} from './types';

export const updatePost = ({ prop, value }) => {
  return {
    type: POST_UPDATE,
    payload: { prop, value }
  };
};


export const makeNewPost = ({ queueLength, chosenNation, agreements, disagreements }) => {
  const userId = firebase.auth().currentUser.uid;

  return (dispatch) => {
    firebase.database().ref('/feed_posts')
    .push({ time: Date.now(), userId, queueLength, chosenNation, agreements, disagreements })
    .then(() => {
      dispatch({ type: NEW_POST_SAME_NATION });
      Actions.pop();
    });
  };
};


// not used at this moment
export const postSave = ({ queueLength, chosenNation, agreements, disagreements }) => {
    return (dispatch) => {
      firebase.database().ref('/feed_posts')
      .set({ queueLength, chosenNation, agreements, disagreements })
      .then(() => {
        dispatch({ type: SAVE_POST });
      });
    };
};

export const updateAgreements = ({ postId }) => {
    return (dispatch) => {
      const updates =
      firebase.database().ref(`/feed_posts/${postId}/agreements`);
      updates.transaction(currentRank => { return currentRank + 1; });
      dispatch({ type: UPDATE_AGREEMENTS });
    };
};

export const updateDisagreements = (postId) => {
    return (dispatch) => {
      const updates =
      firebase.database().ref(`/feed_posts/${postId}/disagreements`);
      updates.transaction(currentRank => { return currentRank + 1; });
      dispatch({ type: UPDATE_DISAGREEMENTS });
    };
};

export const agree = () => {
  return { type: AGREE };
};

export const disagree = () => {
  return { type: DISAGREE };
};

export const getId = (feedpostId) => {
  return {
  type: GET_ID,
  payload: feedpostId
  };
};

export const getPostId = (pid) => {
  return {
    type: GET_POST_ID,
    pid
  };
};
