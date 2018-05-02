import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Root, StyleProvider } from 'native-base';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
       apiKey: 'AIzaSyAidPd9kc6EPXv3QIsINk-ETmg1cAcYR2s',
       authDomain: 'quedel-8f9b4.firebaseapp.com',
       databaseURL: 'https://quedel-8f9b4.firebaseio.com',
       projectId: 'quedel-8f9b4',
       storageBucket: 'quedel-8f9b4.appspot.com',
       messagingSenderId: '616894797260'
     };
     firebase.initializeApp(config);
   }

   render() {
      //second argument is for initial state. third is a store enhancer, adding
      //a additional functionality to the store

      const store = createStore(reducers, {}, applyMiddleware(thunk));

      return (
        <StyleProvider style={getTheme(material)}>
          <Provider store={store}>
          <Root>
            <Router />
          </Root>
          </Provider>
        </StyleProvider>
      );
    }
  }

  export default App;
