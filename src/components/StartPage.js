import React, { Component } from 'react';
import { Image, Dimensions, Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Button } from 'native-base';
import { loginUser } from '../actions';

class StartPage extends Component {
  componentWillMount() {
    this.props.loginUser();
  }
  render() {
    return (
      <Container style={styles.containerStyle}>
          <Image
          style={styles.logoImgStyle}
          source={require('../images/Quedel_logga_bla_small.png')}
          />
          <Button bordered light style={styles.buttonStyle}>
            <Text>Host? Log in!</Text>
          </Button>
      </Container>
    );
  }
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = {
  containerStyle: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'column'
  },
  logoImgStyle: {
    position: 'absolute',
    width: screenWidth,
    resizeMode: 'contain',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: screenWidth / 3,
    marginTop: screenHeight / 2,
  }
};

export default connect(
  null, { loginUser })(StartPage);
