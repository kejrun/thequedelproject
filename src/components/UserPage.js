import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Title, Container, Content, Header, List, ListItem, Right, Left, Text, Icon, Body } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';
import { userThanks } from '../actions';
import TitleCardUser from './TitleCards/TitleCardUser';
import UserCard from './TitleCards/UserCard';
import AboutCreditSystem from './UserModals/AboutCreditSystem';
import AboutQuedel from './UserModals/AboutQuedel';
import InviteFriends from './UserModals/InviteFriends';
import DeleteAccount from './UserModals/DeleteAccount';
import Contact from './UserModals/Contact';
import Footer from './Footer';

class UserPage extends Component {
  state = {
    showModalCreditSystem: false,
    showModalAboutQuedel: false,
    showModalInviteFriends: false,
    showModalContact: false,
    showModalDeleteAccount: false,
    selectedTab: 'user' };

    componentWillMount() {
      this.props.userThanks();
    }

    onDecline() {
      this.setState({ showModalCreditSystem: false });
      this.setState({ showModalAboutQuedel: false });
      this.setState({ showModalInviteFriends: false });
      this.setState({ showModalDeleteAccount: false });
      this.setState({ showModalContact: false });
    }

    render() {
      const { selectedTab } = this.state;
      const credits = this.props.credits;
      const userthanks = this.props.userthanks;
      const creditsLeft = 100 - credits;
      const yesMessage = (<Text style={{ fontFamily: 'Avenir Book', fontSize: 16 }}>
      Nice, you are a trusted user. Keep up the good work!</Text>);
      const noMessage = (<Text style={{ fontFamily: 'Avenir Book', fontSize: 16 }}>
      You are not a trusted user yet. You have to collect {creditsLeft} more credits.</Text>);
      const yesRibbon = (<Icon type="Ionicons" name="md-ribbon" style={{ fontSize: 30, color: '#87C190' }} />);
      const noRibbon = (<Icon type="Ionicons" name="md-ribbon" style={{ fontSize: 30, color: 'gray' }} />);

      let message;
      let ribbon;
      if (this.props.trusted) {
        message = yesMessage;
        ribbon = yesRibbon;
      } else {
        message = noMessage;
        ribbon = noRibbon;
      }

      return (
        <Container>
          <Header span />
            <TitleCardUser>
              <Title style={{ color: '#2B3035', fontFamily: 'Avenir Book', fontSize: 22 }}>You</Title>
            </TitleCardUser>
          <Content>
            <UserCard>
              <Grid>
              <Col>
              <Left>
                <Icon type='SimpleLineIcons' name='diamond' style={{ fontSize: 26 }} />
              </Left>
              <Left>
                <Text style={{ fontFamily: 'Avenir Book', fontSize: 18, marginTop: 2 }}>Credits: {credits} </Text>
              </Left>
              </Col>
              <Col>
              <Left>
                <Icon type='Ionicons' name='md-heart' style={{ fontSize: 26, color: '#fc3768' }} />
              </Left>
              <Left>
                <Text style={{ fontFamily: 'Avenir Book', fontSize: 18 }}>Thanks: {userthanks} </Text>
              </Left>
              </Col>
              </Grid>
              <Text style={{ textAlign: 'center' }}>{ribbon}</Text>
              <Text style={{ textAlign: 'center' }}>{message}</Text>
            </UserCard>
          <List>
          <TouchableWithoutFeedback
          onPress={() => {
            this.setState({ showModalCreditSystem: !this.state.showModalCreditSystem });
          }}
          >
          <ListItem icon>
          <Left>
          <Icon type='SimpleLineIcons' name='diamond' style={{ fontSize: 22 }} />
          </Left>
          <Body>
          <Text style={{ fontFamily: 'Avenir Book', fontSize: 18 }}>About the Credit System</Text>
          </Body>
          <Right>
          <Icon name="arrow-forward" />
          </Right>
          </ListItem>
          </TouchableWithoutFeedback>
          <AboutCreditSystem
          visible={this.state.showModalCreditSystem}
          onDecline={this.onDecline.bind(this)}
          />

          <TouchableWithoutFeedback
          onPress={() => {
            this.setState({ showModalInviteFriends: !this.state.showModalInviteFriends });
          }}
          >
          <ListItem icon>
          <Left>
          <Icon type='Ionicons' name='md-person-add' style={{ fontSize: 22 }} />
          </Left>
          <Body>
          <Text style={{ fontFamily: 'Avenir Book', fontSize: 18 }}>Invite friends</Text>
          </Body>
          <Right>
          <Icon name="arrow-forward" />
          </Right>
          </ListItem>
          </TouchableWithoutFeedback>
          <InviteFriends
          visible={this.state.showModalInviteFriends}
          onDecline={this.onDecline.bind(this)}
          />

          <TouchableWithoutFeedback
          onPress={() => {
            this.setState({ showModalAboutQuedel: !this.state.showModalAboutQuedel });
          }}
          >
          <ListItem icon>
          <Left>
          <Icon type='Ionicons' name='md-information-circle' style={{ fontSize: 22 }} />
          </Left>
          <Body>
          <Text style={{ fontFamily: 'Avenir Book', fontSize: 18 }}>About Quedel</Text>
          </Body>
          <Right>
          <Icon name="arrow-forward" />
          </Right>
          </ListItem>
          </TouchableWithoutFeedback>
          <AboutQuedel
          visible={this.state.showModalAboutQuedel}
          onDecline={this.onDecline.bind(this)}
          />

          <TouchableWithoutFeedback
          onPress={() => {
            this.setState({ showModalContact: !this.state.showModalContact });
          }}
          >
          <ListItem icon>
          <Left>
          <Icon type='Ionicons' name='md-create' style={{ fontSize: 22 }} />
          </Left>
          <Body>
          <Text style={{ fontFamily: 'Avenir Book', fontSize: 18 }}>Contact</Text>
          </Body>
          <Right>
          <Icon name="arrow-forward" />
          </Right>
          </ListItem>
          </TouchableWithoutFeedback>
          <Contact
          visible={this.state.showModalContact}
          onDecline={this.onDecline.bind(this)}
          />

          <TouchableWithoutFeedback
          onPress={() => {
            this.setState({ showModalDeleteAccount: !this.state.showModalDeleteAccount });
          }}
          >
          <ListItem icon>
          <Left>
          <Icon type='Ionicons' name='md-construct' style={{ fontSize: 22 }} />
          </Left>
          <Body>
          <Text style={{ fontFamily: 'Avenir Book', fontSize: 18 }}>Delete account</Text>
          </Body>
          <Right>
          <Icon name="arrow-forward" />
          </Right>
          </ListItem>
          </TouchableWithoutFeedback>
          <DeleteAccount
          visible={this.state.showModalDeleteAccount}
          onDecline={this.onDecline.bind(this)}
          />
          </List>
          </Content>
          <Footer selectedTab={selectedTab} />
        </Container>
      );
    }
  }

  const mapStateToProps = (state) => {
    const { credits } = state.credits;
    const { trusted } = state.trusted;
    const { userthanks } = state.userthanks;
    return { credits, trusted, userthanks };
  };

  export default connect(mapStateToProps, { userThanks })(UserPage);
