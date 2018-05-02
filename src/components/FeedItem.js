//import _ from 'lodash';
import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';
import { Text, Card, CardItem, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import { getId, updateThanks, updateAgreements, updateDisagreements } from '../actions';

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
    }

    onThanksPressed() {
      const { thanked, thanks } = this.state;
      const postId = this.props.feedpost.uid;
      this.setState({ thanked: true });
      if (!thanked) {
        this.setState({ thanks: thanks + 1 });
        this.props.updateThanks(postId);
      }
    }

    onAgreePress() {
      const postId = this.props.feedpost.uid;
      const { agreements } = this.state;
      this.setState({ agree: true });
      this.setState({ agreements: agreements + 1 });
      this.props.updateAgreements(postId);
    }

    onDisagreePress() {
      const postId = this.props.feedpost.uid;
      const { disagreements } = this.state;
      this.setState({ disagree: true });
      this.setState({ disagreements: disagreements + 1 });
      this.props.updateDisagreements(postId);
    }

  render() {
    const { queueLength, agreements, disagreements, thanks } = this.props.feedpost;

    const utcSeconds = this.props.feedpost.time;
    const date = new Date(utcSeconds).toLocaleString();

    return (
      <Card>
        <CardItem header>
        <Icon type="Ionicons" name="ios-clock-outline" style={{ fontSize: 20 }} />
          <Text>{date}</Text>
        </CardItem>
        <CardItem>
          <Text style={{ fontSize: 20 }} >
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
          <CheckBox
            onPress={this.onThanksPressed.bind(this)}
            checked={this.state.thanked}
            iconType='ionicon'
            checkedIcon='md-heart'
            uncheckedIcon='md-heart-outline'
            checkedColor='#fc3768'
            uncheckedColor='#fc3768'
          />
          <Text>
          {thanks} thanks
          </Text>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { queueLength, chosenNation, agreements, disagreements, pid, time } = state.newpost;
  return { queueLength, chosenNation, agreements, disagreements, pid, time };
};

export default connect(mapStateToProps, {
  getId,
  updateThanks,
  updateAgreements,
  updateDisagreements
})(FeedItem);
