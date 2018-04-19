import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Button } from 'native-base';
import { testChanged } from '../actions';


class testComponent extends Component {
  buttonOnPress() {
    console.log(this.props.test);
    this.props.testChanged();
  }

  render() {
    return (
      <Container>
        <Button onPress={this.buttonOnPress.bind(this)}>
          <Text> Click me! </Text>
        </Button>
      </Container>
    );
  }

}

const mapStateToProps = state => {
  const { test } = state.testing;

  return { test };
};

export default connect(mapStateToProps, { testChanged })(testComponent);
