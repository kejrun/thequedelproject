//import _ from 'lodash';
import React, { Component } from 'react';
import { Text, Card, CardItem, CheckBox, Button } from 'native-base';
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
    console.log('this.props.feedpost.uid');
    console.log(pid);
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

    return (
      <Card>
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
  const { queueLength, chosenNation, agreements, disagreements, pid } = state.newpost;
  return { queueLength, chosenNation, agreements, disagreements, pid };
};

export default connect(mapStateToProps, {
  getId,
  updateThanks,
  updateAgreements,
  updateDisagreements
})(FeedItem);
