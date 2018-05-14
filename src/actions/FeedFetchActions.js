import firebase from 'firebase';
import {
  FEED_FETCH_SUCCESS
} from './types';

export const feedFetch1 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNation/libraryId').equalTo(1).limitToLast(10).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch2 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNation/libraryId').equalTo(2).limitToLast(10).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch3 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNation/libraryId').equalTo(3).limitToLast(10).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch4 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNation/libraryId').equalTo(4).limitToLast(10).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch5 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNation/libraryId').equalTo(5).limitToLast(10).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch6 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNation/libraryId').equalTo(6).limitToLast(10).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch7 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNation/libraryId').equalTo(7).limitToLast(10).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch8 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNation/libraryId').equalTo(8).limitToLast(10).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch9 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNation/libraryId').equalTo(9).limitToLast(10).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch10 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNation/libraryId').equalTo(10).limitToLast(10).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch11 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNation/libraryId').equalTo(11).limitToLast(10).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch12 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNation/libraryId').equalTo(12).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch13 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNation/libraryId').equalTo(13).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};
