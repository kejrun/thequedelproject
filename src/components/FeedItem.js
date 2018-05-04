import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';
import { Text, Card, CardItem, Icon, Right, Left } from 'native-base';
import { connect } from 'react-redux';
import { getId, updateThanks, updateAgreements, updateDisagreements, thankPost,
agreePost, disagreePost, fetchThanks } from '../actions';

class FeedItem extends Component {
  state = {
    thanked: false,
    thanks: this.props.feedpost.thanks,
    agree: false,
    disagree: false,
    agreements: this.props.feedpost.agreements,
    disagreements: this.props.feedpost.disagreements
  }

  componentWillMount() {
    const pid = this.props.feedpost.uid;
    this.props.getId(pid);
    this.props.fetchThanks(pid);
    if (this.props.userCredits && !this.state.thanked) {
      console.log('hej');
      const thanked = true;
      this.setState({ thanked });
    }
    }

    onThanksPressed() {
      const postId = this.props.feedpost.uid;
      const { thanked, thanks } = this.state;
      if (!thanked) {
        this.setState({ thanked: true });
        this.setState({ thanks: thanks + 1 });
        this.props.updateThanks(postId);
        this.props.thankPost({ postId, thanked: true });
      }
    }

    onAgreePress() {
      const postId = this.props.feedpost.uid;
      const { agree, agreements } = this.state;
      if (!agree) {
        this.setState({ agree: true });
        this.setState({ agreements: agreements + 1 });
        this.props.updateAgreements(postId);
        this.props.agreePost({ postId, agree: true });
      }
    }

    onDisagreePress() {
      const postId = this.props.feedpost.uid;
      const { disagree, disagreements } = this.state;
      if (!disagree) {
        this.setState({ disagree: true });
        this.setState({ disagreements: disagreements + 1 });
        this.props.updateDisagreements(postId);
        this.props.disagreePost({ postId, disagree: true });
      }
    }

  render() {
    const { queueLength, agreements, disagreements, thanks } = this.props.feedpost;
    const utcSeconds = this.props.feedpost.time;
    const options = { weekday: 'short', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const date = new Date(utcSeconds).toLocaleDateString('en-SE', options);


    return (
      <Card>
        <CardItem header>
        <Icon type="Ionicons" name="ios-clock-outline" style={{ fontSize: 25 }} />
          <Text style={{ fontFamily: 'Avenir Book' }}>{date}</Text>
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
            checked={this.state.thanked}
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
            checked={this.state.agree}
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
            checked={this.state.disagree}
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
  const { queueLength, chosenNation, agreements, disagreements, pid, time } = state.newpost;
  const userCredits = state.userCredits;
  return { queueLength, chosenNation, agreements, disagreements, pid, time, userCredits };
};

export default connect(mapStateToProps, {
  getId,
  updateThanks,
  updateAgreements,
  updateDisagreements,
  thankPost,
  agreePost,
  disagreePost,
  fetchThanks
})(FeedItem);
