import React from 'react';
import { ImageBackground } from 'react-native';

const TitleCardFeed = (props) => (
  <ImageBackground
    source={require('../../images/gradient-background.png')}
    style={styles.containerStyle}
  >
  {props.children}
  </ImageBackground>
);
const styles = {
  containerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 0,
  }
};

export default TitleCardFeed;
