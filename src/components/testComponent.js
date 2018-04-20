import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Button } from 'native-base';
import { testChanged } from '../actions';

class testComponent extends Component {

  onAgreePress() {
    const { queueLength, agreements, disagreements } = this.props;
    this.props.agree();
    this.props.updatePostStatus({
      queueLength,
      agreements,
      disagreements,
      uid: this.props.feedpost.uid
    });
    //console.log(this.props.agreements);
  }

  onDisagreePress() {
  const { queueLength, agreements, disagreements } = this.props;
    this.props.disagree();
    this.props.updatePostStatus({
      queueLength,
      agreements,
      disagreements,
      uid: this.props.feedpost.uid });
    //console.log(this.props.disagreements);
  }

  buttonOnPress() {
    //console.log(this.props.test);
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
