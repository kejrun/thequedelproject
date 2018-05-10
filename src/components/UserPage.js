import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Title, Container, Content, Header, List, ListItem, Right, Left, Text, Icon, Body } from 'native-base';
import Footer from './Footer';
import TitleCardUser from './TitleCards/TitleCardUser';
import UserCard from './TitleCards/UserCard';
import AboutCreditSystem from './UserModals/AboutCreditSystem';
import AboutQuedel from './UserModals/AboutQuedel';
import InviteFriends from './UserModals/InviteFriends';

class UserPage extends Component {
  state = {
    showModalCreditSystem: false,
    showModalAboutQuedel: false,
    showModalInviteFriends: false };

onDecline() {
  this.setState({ showModalCreditSystem: false });
  this.setState({ showModalAboutQuedel: false });
  this.setState({ showModalInviteFriends: false });
}

  render() {
    const credits = this.props.credits;
    const creditsLeft = 50 - credits;
    const yesMessage = (<Text style={{ fontFamily: 'Avenir Book', fontSize: 14 }}>
                        Nice, you are a trusted user. Keep up the good work!</Text>);
    const noMessage = (<Text style={{ fontFamily: 'Avenir Book', fontSize: 14 }}>
                        You are not a trusted user yet. You have to collect {creditsLeft} more credits.</Text>);

    let message;
    if (this.props.trusted) {
      message = yesMessage;
    } else {
      message = noMessage;
    }

    return (
      <Container>
        <Header span />
        <TitleCardUser>
          <Title style={{ color: '#2B3035', fontFamily: 'Avenir Book' }}>You</Title>
        </TitleCardUser>
        <Content>
          <UserCard>
              <Icon type='SimpleLineIcons' name='diamond' style={{ fontSize: 24 }} />
              <Text style={{ fontFamily: 'Avenir Book', fontSize: 18 }}>Credits: {credits} </Text>
              <Text />
              <Icon type='Ionicons' name='md-heart' style={{ fontSize: 26, color: '#fc3768' }} />
              <Text style={{ fontFamily: 'Avenir Book', fontSize: 18 }}>Thanks: </Text>
            <Text>{message}</Text>
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
                <Text style={{ fontFamily: 'Avenir Book', fontSize: 16 }}>About the Credit System</Text>
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
                <Text style={{ fontFamily: 'Avenir Book', fontSize: 16 }}>Invite friends</Text>
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
                <Text style={{ fontFamily: 'Avenir Book', fontSize: 16 }}>About Quedel</Text>
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

            <ListItem icon>
              <Left>
                <Icon type='Ionicons' name='md-create' style={{ fontSize: 22 }} />
              </Left>
              <Body>
                <Text style={{ fontFamily: 'Avenir Book', fontSize: 16 }}>Contact</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon type='Ionicons' name='md-construct' style={{ fontSize: 22 }} />
              </Left>
              <Body>
                <Text style={{ fontFamily: 'Avenir Book', fontSize: 16 }}>Delete account</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

          </List>
        </Content>
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { credits } = state.credits;
  const { trusted } = state.trusted;
  return { credits, trusted };
};

export default connect(mapStateToProps)(UserPage);
