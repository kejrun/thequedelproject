import React from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Feed = () => {
  return (
    <View>
      <Text> Feed page </Text>
      <Button
        onPress={Actions.makenewpost()}
        title="Press to make a new post"
      />
    </View>
  );
};

export default Feed;
