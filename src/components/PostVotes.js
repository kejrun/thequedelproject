import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import { connect } from 'react-redux';

class PostVotes extends Component {

  render() {
    return (
    <Container>
      <Button>
        <Text> Agree </Text>
      </Button>
      <Button>
        <Text> Disagree </Text>
      </Button>
    </Container>
  );
  }
}

export default PostVotes;
