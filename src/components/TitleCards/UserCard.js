import React from 'react';
import { View } from 'react-native';

const UserCard = (props) => (
    <View style={styles.containerStyle}>
    {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    padding: 30,
    height: 200,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  }
};

export default UserCard;
