import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Feed extends Component {

onButtonPress() {
  Actions.makenewpost();
}

  render() {
  return (
    <Container>
      <Content>
        <Button onPress={() => { this.onButtonPress(); }}>
          <Text>Press to make a new post</Text>
        </Button>
      </Content>
    </Container>
  );
}
}

export default Feed;
