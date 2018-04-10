import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';

export default class HostList extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'Image URL' }} />
              <Body>
                <Text>Sankhadeep</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
