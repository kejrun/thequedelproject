import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  POST_UPDATE,
  NEW_POST,
  FEED_FETCH_SUCCESS,
  AGREE,
  DISAGREE,
  UPDATE_POST_STATUS,
  GET_POST_ID
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

export const agree = () => {
  return { type: AGREE };
};

export const disagree = () => {
  return { type: DISAGREE };
};

export const getPostId = (pid) => {
  return {
    type: GET_POST_ID,
    pid
  };
};

export const updatePostStatus = ({ queueLength, agreements, disagreements, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/user_posts/${uid}`)
    .set({ queueLength, agreements, disagreements })
    .then(() => {
      dispatch({ type: UPDATE_POST_STATUS });
    });
  };
};
