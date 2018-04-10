import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { LOGIN_USER } from './types';

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

//Actions.hostOverview();
