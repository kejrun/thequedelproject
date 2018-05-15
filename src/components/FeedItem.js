import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';
import { Alert } from 'react-native';
import { Text, Card, CardItem, Icon, Right, Left } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { getId, updateThanks, updateAgreements, updateDisagreements, thankPost,
  agreePost, disagreePost, fetchThanks, thankCredit, agreeCredit, disagreeCredit,
  fetchingFollowers, trustUser } from '../actions';

  class FeedItem extends Component {

    componentWillMount() {
      const { uid, queueLength, thanked, thanks, agree, disagree, agreements, disagreements,
        chosenNation, trusted } = this.props.feedpost;
        const { libraryId } = chosenNation;
        this.props.fetchingFollowers({ libraryId });
        this.props.getId(uid);
        this.setState({
          id: uid,
          queueLength,
          thanked,
          thanks,
          agree,
          disagree,
          agreements,
          disagreements,
          trusted
        });
      }

      onThanksPressed() {
        const postId = this.props.feedpost.uid;
        const { thanked, thanks } = this.state;
        const { credits } = this.props;
        if (!thanked) {
          this.setState({
            thanked: true,
            thanks: thanks + 1,
            credits: credits + 1
          });
          this.props.updateThanks(postId);
          this.props.thankCredit(this.props.feedpost.userId, this.props.followers);
          this.props.thankPost({ postId, thanked: true });
        }
      }

      onAgreePress() {
        const postId = this.props.feedpost.uid;
        const { agree, agreements } = this.state;
        const { credits } = this.props;
        if (!agree) {
          this.setState({
            agree: true,
            agreements: agreements + 1,
            credits: credits + 1 });
            this.props.updateAgreements(postId);
            this.props.agreeCredit(this.props.feedpost.userId);
            this.props.agreePost({ postId, agree: true });
          }
        }

        onDisagreePress() {
          const postId = this.props.feedpost.uid;
          const { disagree, disagreements } = this.state;
          if (!disagree) {
            this.setState({
              disagree: true,
              disagreements: disagreements + 1
            });
            this.props.updateDisagreements(postId);
            this.props.disagreeCredit(this.props.feedpost.userId);
            this.props.disagreePost({ postId, disagree: true });
          }
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
            thanked,
            agree,
            disagree,
            trusted
          } = this.state;
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
            </Card>
          );
        }
      }

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
