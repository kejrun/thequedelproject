import React, { Component } from 'react';
import firebase from 'firebase';
import { CheckBox } from 'react-native-elements';
import { Alert } from 'react-native';
import { Text, Card, CardItem, Icon, Right, Left, Button } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { getId, updateThanks, updateAgreements, updateDisagreements, thankPost,
  agreePost, disagreePost, fetchThanks, thankCredit, agreeCredit, disagreeCredit,
  fetchingFollowers, trustUser } from '../actions';

class FeedItem extends Component {

  componentWillMount() {
    const { uid, chosenNation } = this.props.feedpost;
    const { libraryId } = chosenNation;
    this.props.fetchingFollowers({ libraryId });
    this.props.getId(uid);
    }

    onThanksPressed() {
      const thisUserId = firebase.auth().currentUser.uid;
      const { uid, userId, thanked } = this.props.feedpost;
      if (!thanked && thisUserId !== userId) {
        this.props.updateThanks(uid);
        this.props.thankCredit(userId, this.props.followers);
        this.props.thankPost({ uid, thanked: true });
      }
    }

    onAgreePress() {
      const thisUserId = firebase.auth().currentUser.uid;
      const { uid, userId, agree, disagree } = this.props.feedpost;
      if (!agree && !disagree && thisUserId !== this.props.feedpost.userId) {
        this.props.updateAgreements(uid);
        this.props.agreeCredit(userId);
        this.props.agreePost({ uid, agree: true });
      }
    }

    onDisagreePress() {
      const thisUserId = firebase.auth().currentUser.uid;
      const { uid, userId, disagree, agree } = this.props.feedpost;
      if (!disagree && !agree && thisUserId !== userId) {
        this.props.disagreePost({ uid, disagree: true });
        this.props.updateDisagreements(uid);
        this.props.disagreeCredit(userId);
        Alert.alert(
            '',
            'Do you want to make your own post?',
            [
              { text: 'Yes', onPress: () => Actions.makenewpost() },
              { text: 'No' },
            ],
            { cancelable: false }
          );
      }
    }

    onMorePress() {
      Alert.alert(
        '',
        'Do you want to delete your post?',
        [
          { text: 'Yes', onPress: () => { this.deletePost(); Actions.feed(); }
          },
          { text: 'No' },
        ],
        { cancelable: false }
      );
    }

    deletePost() {
      const { uid } = this.props.feedpost;
      firebase.database().ref(`/feed_posts/${uid}`).remove();
    }

  render() {
    const {
      agree,
      disagree,
      thanked,
      queueLength,
      agreements,
      disagreements,
      thanks,
      trusted
    } = this.props.feedpost;
    const utcSeconds = this.props.feedpost.time;
    const options = { weekday: 'short', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const date = new Date(utcSeconds).toLocaleDateString('en-SE', options);
    const thisUserId = firebase.auth().currentUser.uid;

    let isTrusted;
    if (trusted) {
      isTrusted = (
        <Right>
        <Icon type="Ionicons" name="md-ribbon" style={{ fontSize: 25, marginRight: -36, color: '#87C190' }} />
        </Right>
       );
      }

    let colorAgreeDisagree;
    if (agree || disagree || thisUserId === this.props.feedpost.userId) {
      colorAgreeDisagree = 'lightgrey';
    } else {
      colorAgreeDisagree = '#2B3035';
    }

    let moreButton;
    let colorThanks;
    if (thisUserId === this.props.feedpost.userId) {
      moreButton = (
        <CardItem style={{ marginTop: -21 }}>
          <Button transparent style={styles.moreButtonStyle} onPress={() => this.onMorePress()}>
            <Icon type="Entypo" name="dots-three-horizontal" style={{ fontSize: 18, color: 'black' }} />
          </Button>
        </CardItem>
      );
      colorThanks = 'lightgrey';
    } else {
      colorThanks = '#fc3768'
    }

          return (
            <Card>
              <CardItem header>
                <Icon type="Ionicons" name="ios-clock-outline" style={{ fontSize: 25 }} />
                <Text style={{ fontFamily: 'Avenir Book' }}>{date}</Text>
                {isTrusted}
              </CardItem>
            <CardItem>
              <Left>
                <Text style={{ fontSize: 20, fontFamily: 'Avenir-Heavy' }} >
                {queueLength}
                </Text>
              </Left>
            <Right>
              <Text style={{ fontFamily: 'Avenir Book' }}>{thanks} thanks</Text>
              <CheckBox
                onPress={this.onThanksPressed.bind(this)}
                checked={thanked}
                iconType='ionicon'
                checkedIcon='md-heart'
                uncheckedIcon='md-heart-outline'
                checkedColor='#fc3768'
                uncheckedColor={colorThanks}
              />
            </Right>
            </CardItem>
            <CardItem footer bordered>
              <CheckBox
                onPress={this.onAgreePress.bind(this)}
                checked={agree}
                iconType='ionicon'
                checkedIcon='ios-thumbs-up'
                uncheckedIcon='ios-thumbs-up-outline'
                checkedColor='#2B3035'
                uncheckedColor={colorAgreeDisagree}
              />
              <Text style={{ fontFamily: 'Avenir Book' }}>{agreements} agree</Text>
              <Text>                             </Text>
              <CheckBox
                onPress={this.onDisagreePress.bind(this)}
                checked={disagree}
                iconType='ionicon'
                checkedIcon='ios-thumbs-down'
                uncheckedIcon='ios-thumbs-down-outline'
                checkedColor='#2B3035'
                uncheckedColor={colorAgreeDisagree}
              />
              <Text style={{ fontFamily: 'Avenir Book' }}> {disagreements} disagree</Text>
              </CardItem>
              {moreButton}
            </Card>
          );
        }
      }

      const styles = {
        moreButtonStyle: {
          marginTop: -10,
          marginBottom: -10,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }
      };

      const mapStateToProps = (state) => {
        const followers = state.fetchFollowers.followers;
        const credits = state.credits;
        return { followers, credits };
      };


      export default connect(mapStateToProps, {
        getId,
        updateThanks,
        updateAgreements,
        updateDisagreements,
        thankPost,
        agreePost,
        disagreePost,
        fetchThanks,
        thankCredit,
        agreeCredit,
        disagreeCredit,
        fetchingFollowers,
        trustUser
      })(FeedItem);
