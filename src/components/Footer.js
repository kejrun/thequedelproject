import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class TheFooter extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button
              active={this.props.selectedTab === 'following'}
              onPress={() => { Actions.following(); }}
            >
              <Icon type="Entypo" name="bookmarks" style={{ fontSize: 30 }} />
            </Button>
            <Button
              active={this.props.selectedTab === 'feed'}
              onPress={() => { Actions.feed(); }}
            >
              <Icon type="Ionicons" name="md-reorder" style={{ fontSize: 30 }} />
            </Button>
            <Button
              active={this.props.selectedTab === 'user'}
              onPress={() => { Actions.user(); }}
            >
              <Icon type="Ionicons" name="md-person" style={{ fontSize: 30 }} />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
