import React from 'react';
import { ImageBackground } from 'react-native';

const TitleCardFollowing = (props) => (
    <ImageBackground
    source={require('../../images/Gradient-background-and-pattern-background-creates-an-artistic-design-effect-1024x576.png')}
    style={styles.containerStyle}
    >
    {props.children}
    </ImageBackground>
  );

const styles = {
  containerStyle: {
    padding: 20,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  }
};

export default TitleCardFollowing;
