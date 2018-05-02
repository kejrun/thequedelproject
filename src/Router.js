import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import StartPage from './components/StartPage';
import HostList from './components/HostList';
import Feed from './components/Feed';
import FollowingList from './components/FollowingList';
import UserPage from './components/UserPage';
import NewPostCreate from './components/NewPostCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>

      <Scene key='auth'>
        <Scene key='startpage' component={StartPage} hideNavBar />
      </Scene>

      <Scene key='hostOverview'>
        <Scene key='HostList' component={HostList} title='' />
      </Scene>

          <Scene key="feed" hideNavBar>
            <Scene
              key="feedpage"
              component={Feed}
              title="Title of nation"
            />
          </Scene>

          <Scene key="following">
            <Scene
              key="followingPage"
              component={FollowingList}
              title=""
            />
          </Scene>

          <Scene key="user">
            <Scene
              key="userPage"
              component={UserPage}
              title="User"
            />
          </Scene>

          <Scene key='makenewpost' hideNavBar>
            <Scene key='NewPost' component={NewPostCreate} title='Make a new post' />
          </Scene>

        </Scene>
    </Router>
  );
};

export default RouterComponent;
