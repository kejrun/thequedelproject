import firebase from 'firebase';
import {
  FEED_FETCH_SUCCESS
} from './types';

export const feedFetch = (libraryId) => {
  return (dispatch) => {
    firebase.database().ref('/feed_posts')
    .ref.orderByChild('chosenNation/libraryId').equalTo(libraryId).limitToLast(10).on('value', snapshot => {
      dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};
