//import _ from 'lodash';
import React, { Component } from 'react';
import { Text, Card, CardItem, CheckBox, Button } from 'native-base';
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
    const date = new Date(utcSeconds).toLocaleString();

    return (
      <Card>
        <CardItem header>
          <Text>{date}</Text>
        </CardItem>
        <CardItem>
          <Text>
            {queueLength}
          </Text>
          <CardItem >
            <Button
              onPress={this.onAgreePress.bind(this)}
              value={agreements}
            >
              <Text> A: {agreements} </Text>
            </Button>
            <Button
              onPress={this.onDisagreePress.bind(this)}
              value={disagreements}
            >
              <Text> D: {disagreements} </Text>
            </Button>
          </CardItem>
          <CheckBox onPress={this.onThanksPressed.bind(this)} checked={this.state.thanked} />
          <Text>
          {thanks}
          </Text>
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
