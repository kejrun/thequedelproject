import firebase from 'firebase';
import { USER_CREDITS, TRUSTED_USER, THANK_CREDIT, AGREE_CREDIT, DISAGREE_CREDIT,
          TRUST_USER } from './types';

export const userCredits = () => {
  console.log('hej');
  const credits = 0;
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
    firebase.database().ref(`/users/${userId}/credits/`)
    .on('value', snapshot => {
      console.log(userId, snapshot.val());
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

export const trustedUser = () => {
  const trusted = false;
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
    firebase.database().ref(`/users/${userId}/trusted`)
    .on('value', snapshot => {
      if (snapshot.val() === null) {
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
  const userId = firebase.auth().currentUser.uid;
  return (dispatch) => {
    firebase.database().ref(`/users/${userId}/trusted`)
    .update(true);
    dispatch({ type: TRUST_USER, payload: true });
    };
  };


export const thankCredit = (postUserId, followers) => {
  const userId = firebase.auth().currentUser.uid;
  const updateOwnCredits = firebase.database().ref(`/users/${userId}/credits`);
  updateOwnCredits.transaction((currentRank) => {
    return currentRank + 1;
  });
  const updateUserCredits = firebase.database().ref(`/users/${postUserId}/credits`);
  updateUserCredits.transaction((currentRank) => {
    return currentRank + followers;
  });
  return (dispatch) => {
   dispatch({ type: THANK_CREDIT, payload: 1 + followers });
};
};

export const agreeCredit = (postUserId) => {
  const userId = firebase.auth().currentUser.uid;
  const updateOwnCredits = firebase.database().ref(`/users/${userId}/credits`);
  updateOwnCredits.transaction((currentRank) => {
    return currentRank + 1;
  });
  const updateUserCredits = firebase.database().ref(`/users/${postUserId}/credits`);
  updateUserCredits.transaction((currentRank) => {
    return currentRank + 1;
  });
  return (dispatch) => {
   dispatch({ type: AGREE_CREDIT, payload: 2 });
};
};

export const disagreeCredit = (postUserId) => {
  const userId = firebase.auth().currentUser.uid;
  const updateOwnCredits = firebase.database().ref(`/users/${userId}/credits`);
  updateOwnCredits.transaction((currentRank) => {
    return currentRank + 1;
  });
  const updateUserCredits = firebase.database().ref(`/users/${postUserId}/credits`);
  updateUserCredits.transaction((currentRank) => {
    return currentRank - 1;
  });
  return (dispatch) => {
   dispatch({ type: DISAGREE_CREDIT });
};
};
