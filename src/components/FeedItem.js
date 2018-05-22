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
  state = {
    thanked: this.props.feedpost.thanked,
    agree: this.props.feedpost.agree,
    disagree: this.props.feedpost.disagree
  }

  componentWillMount() {
    const { uid, chosenNation } = this.props.feedpost;
    const { libraryId } = chosenNation;
    this.props.fetchingFollowers({ libraryId });
    this.props.getId(uid);
    }

    onThanksPressed() {
      const { uid, userId, thanked } = this.props.feedpost;
      if (!thanked) {
        this.setState({ thanked: true });
        this.props.updateThanks(uid);
        this.props.thankCredit(userId, this.props.followers);
        this.props.thankPost({ uid, thanked: true });
      }
    }

    onAgreePress() {
      const { uid, userId, agree } = this.props.feedpost;
      if (!agree) {
        this.setState({ agree: true });
        this.props.updateAgreements(uid);
        this.props.agreeCredit(userId);
        this.props.agreePost({ uid, agree: true });
      }
    }

    onDisagreePress() {
      const { uid, userId, disagree } = this.props.feedpost;
      console.log('disagree1', disagree);
      if (!disagree) {
        this.setState({ disagree: true });
        this.props.disagreePost({ uid, disagree: true });
        this.props.updateDisagreements(uid);
        this.props.disagreeCredit(userId);
        console.log('disagree2', disagree);
      }
    }

    onMorePress() {
      Alert.alert(
        '',
        'Do you want to delete your post?',
        [
          { text: 'Yes', onPress: () => this.deletePost()
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

    ifTrusted() {
      return (
        <Right>
        <Icon type="Ionicons" name="md-ribbon" style={{ fontSize: 25, marginRight: -36, color: '#87C190' }} />
        </Right>
      );
    }

  render() {
    const {
      queueLength,
      agreements,
      disagreements,
      thanks,
      trusted
    } = this.props.feedpost;
    const { agree, disagree, thanked } = this.state;
    const utcSeconds = this.props.feedpost.time;
    const options = { weekday: 'short', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const date = new Date(utcSeconds).toLocaleDateString('en-SE', options);

    let isTrusted;

    if (trusted) {
      isTrusted = (
      <Right>
      <Icon type="Ionicons" name="md-ribbon" style={{ fontSize: 25, marginRight: -36, color: '#87C190' }} />
      </Right>
    );
    }

    return (
      <Card>
        <CardItem header>
        <Icon type="Ionicons" name="ios-clock-outline" style={{ fontSize: 25 }} />
          <Text style={{ fontFamily: 'Avenir Book' }}>{date}</Text>
          { isTrusted }
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
            uncheckedColor='#fc3768'
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
            uncheckedColor='#2B3035'
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
            uncheckedColor='#2B3035'
          />
          <Text style={{ fontFamily: 'Avenir Book' }}> {disagreements} disagree</Text>
          </CardItem>
            <CardItem style={{ marginTop: -21 }}>
              <Button transparent style={styles.moreButtonStyle} onPress={() => this.onMorePress()}>
                <Icon type="Entypo" name="dots-three-horizontal" style={{ fontSize: 18, color: 'black' }} />
              </Button>
            </CardItem>
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
