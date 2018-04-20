import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  NEW_POST_UPDATE,
  NEW_POST_SAME_NATION,
  FEED_FETCH_SUCCESS
} from './types';

export const updateNewPost = ({ prop, value }) => {
  return {
    type: NEW_POST_UPDATE,
    payload: { prop, value }
  };
};

export const makeNewPost = ({ queueLength, chosenNationId }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/user_posts`)
    .push({ queueLength, chosenNationId });
    firebase.database().ref('/feed_posts')
    .push({ queueLength, chosenNationId })
    .then(() => {
      dispatch({ type: NEW_POST_SAME_NATION });
      Actions.pop();
    });
  };
};

export const feedFetch = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNationId').equalTo(5).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};


/* export const feedFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/feed_posts')
    .on('value', snapshot => {
      dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
}; */
