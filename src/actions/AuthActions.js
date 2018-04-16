import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN_USER,
  WELCOME_USER,
  WELCOME_TIMEOUT,
  PROCEED_TO_OVERVIEW
 } from './types';

export const loginUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInAnonymously()
    .then(console.log('user logged in'))
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`error code: ${errorCode}`);
      console.log(`error message: ${errorMessage}`);
    });
  };
};

export const welcomeTimeout = () => {
  return (dispatch) => {
      setTimeout(() => {
      dispatch(proceedToHostOverview(), { type: WELCOME_TIMEOUT });
    }, 2000);
  };
};

export const welcomeUser = () => {
  return { type: WELCOME_USER };
};


export const proceedToHostOverview = () => {
  return (dispatch) => {
    dispatch({ type: PROCEED_TO_OVERVIEW });
    Actions.hostOverview();
  };
};
