import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  POST_UPDATE,
  NEW_POST,
  FEED_FETCH_SUCCESS,
  AGREE,
  DISAGREE,
  SAVE_POST,
  GET_POST_ID,
  GET_ID,
  UPDATE_AGREEMENTS,
  UP_VOTE,
  DOWN_VOTE
} from './types';

export const updatePost = ({ prop, value }) => {
  return {
    type: POST_UPDATE,
    payload: { prop, value }
  };
};

export const makeNewPost = ({ queueLength, agreements, disagreements }) => {
  const { currentUser } = firebase.auth();
  //console.log({ queueLength, agreements, disagreements });

  return (dispatch) => {
    console.log({ queueLength, agreements, disagreements });
    firebase.database().ref(`/users/${currentUser.uid}/user_posts`)
    .push({ queueLength, agreements, disagreements })
    .then(() => {
      dispatch({ type: NEW_POST });
      Actions.pop({ type: 'reset' });
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

export const postSave = ({ queueLength, agreements, disagreements, postId }) => {
  const { currentUser } = firebase.auth();
    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/user_posts/${postId}`)
      .set({ queueLength, agreements, disagreements })
      .then(() => {
        dispatch({ type: SAVE_POST });
      });
    };
};

export const updateAgreements = ({ postId }) => {
  const { currentUser } = firebase.auth();
    return (dispatch) => {
      const agreementCount =
      firebase.database().ref(`/users/${currentUser.uid}/user_posts/${postId}/agreements`);
      agreementCount.on('value', snapshot => {
        console.log('updateAgreements snapshotvalue');
        console.log(snapshot.val);
        dispatch({ type: UPDATE_AGREEMENTS, payload: snapshot.val() });
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
