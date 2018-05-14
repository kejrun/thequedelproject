import React from 'react';
import { View } from 'react-native';

const TitleCardFeed = (props) => (
    <View style={styles.containerStyle}>
    {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 0,
    backgroundColor: '#F8DC97',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#F8DC97',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  }
};

export default TitleCardFeed;
