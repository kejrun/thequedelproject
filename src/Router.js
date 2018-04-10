import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import StartPage from './components/StartPage';
import HostList from './components/HostList';
import Feed from './components/Feed';
import NotificationList from './components/NotificationList';
import UserPage from './components/UserPage';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='startpage' component={StartPage} title='startpage' />
          </Scene>

        <Scene key='hostOverview'>
          <Scene key='HostList' component={HostList} title='Choose nation' />
        </Scene>

        <Scene key='mainFlow'>
          <Scene key='feed' component={Feed} title='Name of nation (not hardcoded)' />
          <Scene key='notifyMe' component={NotificationList} title='Notify Me' />
          <Scene key='userPage' component={UserPage} title='User' />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
