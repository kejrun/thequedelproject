import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import StartPage from './components/StartPage';

class App extends Component {
  componentWillMount() {
    const config = {
       apiKey: 'AIzaSyAidPd9kc6EPXv3QIsINk-ETmg1cAcYR2s',
       authDomain: 'quedel-8f9b4.firebaseapp.com',
       databaseURL: 'https://quedel-8f9b4.firebaseio.com',
       projectId: 'quedel-8f9b4',
       storageBucket: '',
       messagingSenderId: '616894797260'
     };
     firebase.initializeApp(config);
   }
   render() {
      //second argument is for initial state. third is a store enhancer, adding
      //a additional functionality to the store
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

      return (
        <Provider store={store}>
          <View>
             <Router />
          </View>
        </Provider>
      );
    }
  }

  export default App;
