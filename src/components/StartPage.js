import React, { Component } from 'react';
import { Image, Dimensions, Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Button } from 'native-base';
import { loginUser, welcomeUser } from '../actions';

class StartPage extends Component {

componentWillMount() {
//  this.props.welcomeUser();
//  console.log('welcome user');
}
  componentDidMount() {
    this.props.loginUser();
  }

  //onWelcomeUser() {
  //  welcomeUserTimeout(this.props.dispatch);
  //}

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
    flexDirection: 'row'
  },
  logoImgStyle: {
    position: 'absolute',
    width: screenWidth,
    resizeMode: 'contain',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 600,
    paddingLeft: screenWidth / 3,
    paddingRight: screenWidth / 3
  }
};

export default connect(
  null, { loginUser, welcomeUser })(StartPage);
