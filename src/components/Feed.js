import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Feed extends Component {

onButtonPress() {
  Actions.makenewpost();
}

  render() {
  return (
    <View>
      <Text> Feed page </Text>
      <Button
        onPress={() => { this.onButtonPress(); }}
        title="Press to make a new post"
      />
      </View>
  );
}
}

export default Feed;
