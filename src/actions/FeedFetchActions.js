import firebase from 'firebase';
import {
  FEED_FETCH_SUCCESS
} from './types';

export const feedFetch1 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNationId').equalTo(1).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch2 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNationId').equalTo(2).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch3 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNationId').equalTo(3).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch4 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNationId').equalTo(4).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch5 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNationId').equalTo(5).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch6 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNationId').equalTo(6).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch7 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNationId').equalTo(7).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch8 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNationId').equalTo(8).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch9 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNationId').equalTo(9).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch10 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNationId').equalTo(110).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch11 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNationId').equalTo(11).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch12 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNationId').equalTo(12).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const feedFetch13 = () => {
  return (dispatch) => {
  firebase.database().ref('/feed_posts')
  .ref.orderByChild('chosenNationId').equalTo(13).on('value', snapshot => {
    dispatch({ type: FEED_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};
