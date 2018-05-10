import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { loginUser, welcomeUser, welcomeTimeout, userCredits } from '../actions';

class StartPage extends Component {

  componentWillMount() {
    this.props.welcomeUser();
    this.props.welcomeTimeout();
  }
  componentDidMount() {
    this.props.loginUser();
  }

  render() {
    return (
      <Container style={styles.containerStyle}>
          <Image
          style={styles.logoImgStyle}
          source={require('../images/Quedel_logga_bla_small.png')}
          />
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

const mapStateToProps = ({ auth }) => {
  const { welcoming } = auth;

  return { welcoming };
};

export default connect(
  mapStateToProps, { loginUser, welcomeUser, welcomeTimeout, userCredits })(StartPage);
