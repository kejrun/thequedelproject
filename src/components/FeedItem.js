//import _ from 'lodash';
import React, { Component } from 'react';
import { Text, Card, CardItem, CheckBox } from 'native-base';
import { connect } from 'react-redux';
import { getId, updateThanks } from '../actions';
import PostVotes from './PostVotes';

class FeedItem extends Component {
  state = {
    thanked: false,
    thanks: this.props.feedpost.thanks
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

  render() {
    const { queueLength, agreements, disagreements, uid, thanks } = this.props.feedpost;

    return (
      <Card>
        <CardItem>
          <Text>
            {queueLength}
          </Text>
          <PostVotes
            postId={uid}
            queueLength={queueLength}
            agreements={agreements}
            disagreements={disagreements}
          />
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
  updateThanks
})(FeedItem);
