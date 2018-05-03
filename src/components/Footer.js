import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class FooterTabsIconExample extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 'feed' };
  }

  render() {
    return (
        <Footer>
          <FooterTab>
          <Button
            active={this.state.selectedTab === 'following'}
            onPress={() => { Actions.following(); this.setState({ selectedTab: 'following' }); }}
          >
            <Icon type="Entypo" name="bookmarks" style={{ fontSize: 30 }} />
            </Button>
            <Button
              active={this.state.selectedTab === 'feed'}
              onPress={() => { Actions.feed(); this.setState({ selectedTab: 'feed' }); }}
            >
              <Icon type="Ionicons" name="md-reorder" style={{ fontSize: 30 }} />
            </Button>
            <Button
              active={this.state.selectedTab === 'user'}
              onPress={() => { Actions.user(); this.setState({ selectedTab: 'user' }); }}
            >
              <Icon type="Ionicons" name="md-person" style={{ fontSize: 30 }} />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
