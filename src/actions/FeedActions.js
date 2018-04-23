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


export const makeNewPost = ({ queueLength, chosenNationId, agreements, disagreements }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    console.log({ queueLength, agreements, disagreements });
    firebase.database().ref(`/users/${currentUser.uid}/user_posts`)
    .push({ queueLength, chosenNationId, agreements, disagreements });
    firebase.database().ref('/feed_posts')
    .push({ queueLength, chosenNationId, agreements, disagreements })
    .then(() => {
      dispatch({ type: NEW_POST_SAME_NATION });
      Actions.pop();
    });
  };
};

export const postSave = ({ queueLength, chosenNationId, agreements, disagreements, postId }) => {
  const { currentUser } = firebase.auth();
    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/user_posts/${postId}`)
      .set({ queueLength, chosenNationId, agreements, disagreements });
      firebase.database().ref('/feed_posts')
      .set({ queueLength, chosenNationId, agreements, disagreements })
      .then(() => {
        dispatch({ type: SAVE_POST });
      });
    };
};

export const updateAgreements = ({ postId }) => {
    return (dispatch) => {
      const updates =
      firebase.database().ref(`/feed_posts/${postId}/agreements`);
      updates.transaction(currentRank => {
        dispatch({ type: UPDATE_AGREEMENTS, payload: currentRank + 1 });
      });
    };
};

export const updateDisagreements = (postId) => {
    return (dispatch) => {
      const updates =
      firebase.database().ref(`/feed_posts/${postId}/disagreements`);
      updates.transaction(currentRank => {
        dispatch({ type: UPDATE_DISAGREEMENTS, payload: currentRank + 1 });
      });
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
