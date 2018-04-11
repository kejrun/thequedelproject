import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
//import StartPage from './components/StartPage';
//import HostList from './components/HostList';
import Feed from './components/Feed';
import NotificationList from './components/NotificationList';
import UserPage from './components/UserPage';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        {/* Tab Container */}
        <Scene
          key="tabbar"
          tabs
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          {/* Tab and it's scenes */}
          <Scene key="feed" title="Feed" icon={TabIcon}>
            <Scene
              key="feedpage"
              component={Feed}
              title="Title of nation"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="notifyMe" title="Notify Me" icon={TabIcon}>
            <Scene
              key="nofifyMePage"
              component={NotificationList}
              title="Notify Me"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="user" title="User" icon={TabIcon}>
            <Scene
              key="userPage"
              component={UserPage}
              title="User"
            />
          </Scene>
          </Scene>
        </Scene>
    </Router>
  );
};

const TabIcon = ({ title }) => {
  return (
    <Text>{title}</Text>
  );
};

export default RouterComponent;
