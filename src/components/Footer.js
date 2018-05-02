import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class FooterTabsIconExample extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
          <Button onPress={() => { Actions.following(); }}>
            <Icon type="Entypo" name="bookmarks" style={{ fontSize: 30, color: '#D6D3D1' }} />
            </Button>
            <Button onPress={() => { Actions.feed(); }}>
              <Icon type="Ionicons" name="md-reorder" style={{ fontSize: 30, color: '#D6D3D1' }} />
            </Button>
            <Button onPress={() => { Actions.user(); }}>
              <Icon type="Ionicons" name="md-person" style={{ fontSize: 30, color: '#D6D3D1' }} />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
