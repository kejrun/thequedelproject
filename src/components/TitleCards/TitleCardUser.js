import React from 'react';
import { ImageBackground } from 'react-native';

const TitleCardUser = (props) => (
  <ImageBackground
    source={require('../../images/gradient-background.png')}
    style={styles.containerStyle}
  >
  {props.children}
  </ImageBackground>
);

const styles = {
  containerStyle: {
    padding: 20
  }
};

export default TitleCardUser;
