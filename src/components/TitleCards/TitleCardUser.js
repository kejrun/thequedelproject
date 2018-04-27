import React from 'react';
import { View } from 'react-native';

const TitleCardUser = (props) => (
    <View style={styles.containerStyle}>
    {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    padding: 20,
    backgroundColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 8
  }
};

export default TitleCardUser;
