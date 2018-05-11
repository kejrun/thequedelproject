import firebase from 'firebase';
import { USER_CREDITS, TRUSTED_USER, THANK_CREDIT, AGREE_CREDIT, DISAGREE_CREDIT,
          TRUST_USER, USER_THANKS } from './types';

export const userCredits = () => {
  const credits = 0;
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
    firebase.database().ref(`/users/${userId}/credits/`)
    .on('value', snapshot => {
      if (snapshot.val() === null) {
        firebase.database().ref(`/users/${userId}/credits/`)
        .set(credits)
        .then(() => dispatch({ type: USER_CREDITS, payload: 0 }));
      } else {
        dispatch({ type: USER_CREDITS, payload: snapshot.val() });
      }
    });
  };
};

export const userThanks = () => {
  const userthanks = 0;
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
    firebase.database().ref(`/users/${userId}/userthanks/`)
    .on('value', snapshot => {
      if (snapshot.val() === null) {
        firebase.database().ref(`/users/${userId}/userthanks/`)
        .set(userthanks)
        .then(() => dispatch({ type: USER_THANKS, payload: 0 }));
      } else {
        dispatch({ type: USER_THANKS, payload: snapshot.val() });
      }
    });
  };
};

export const trustedUser = () => {
  const trusted = false;
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
    firebase.database().ref(`/users/${userId}/trusted`)
    .on('value', snapshot => {
      if (snapshot.val() === null || snapshot.val() < 50) {
        firebase.database().ref(`/users/${userId}/trusted/`)
        .set(trusted)
        .then(() => dispatch({ type: TRUSTED_USER, payload: false }));
      } else {
        dispatch({ type: TRUSTED_USER, payload: snapshot.val() });
      }
    });
  };
};

export const trustUser = () => {
  const trusted = true;
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
    firebase.database().ref(`/users/${userId}/trusted/`)
    .set(trusted);
    dispatch({ type: TRUST_USER, payload: true });
    };
  };


export const thankCredit = (postUserId, followers) => {
  const userId = firebase.auth().currentUser.uid;
  const updateOwnCredits = firebase.database().ref(`/users/${userId}/credits`);
  updateOwnCredits.transaction((currentRank) => {
    return currentRank + 3;
  });
  const updateUserCredits = firebase.database().ref(`/users/${postUserId}/credits`);
  updateUserCredits.transaction((currentRank) => {
    return currentRank + followers;
  });
  const updateUserThanks = firebase.database().ref(`/users/${postUserId}/userthanks`);
  updateUserThanks.transaction((currentRank) => {
    return currentRank + 1;
  });

  return (dispatch) => {
   dispatch({ type: THANK_CREDIT, payload: 3 });
   dispatch({ type: USER_THANKS, payload: 1 });
  };
};

export const agreeCredit = (postUserId) => {
  const userId = firebase.auth().currentUser.uid;
  const updateOwnCredits = firebase.database().ref(`/users/${userId}/credits`);
  updateOwnCredits.transaction((currentRank) => {
    return currentRank + 5;
  });
  const updateUserCredits = firebase.database().ref(`/users/${postUserId}/credits`);
  updateUserCredits.transaction((currentRank) => {
    return currentRank + 5;
  });
  return (dispatch) => {
   dispatch({ type: AGREE_CREDIT, payload: 5 });
};
};

export const disagreeCredit = (postUserId) => {
  const userId = firebase.auth().currentUser.uid;
  const updateOwnCredits = firebase.database().ref(`/users/${userId}/credits`);
  updateOwnCredits.transaction((currentRank) => {
    return currentRank + 5;
  });
  const updateUserCredits = firebase.database().ref(`/users/${postUserId}/credits`);
  updateUserCredits.transaction((currentRank) => {
    return currentRank - 3;
  });
  return (dispatch) => {
   dispatch({ type: DISAGREE_CREDIT, payload: 5 });
};
};
