//import _ from 'lodash';
import React, { Component } from 'react';
import { Text, Card, CardItem, CheckBox } from 'native-base';
import { connect } from 'react-redux';
import { updatePostStatus, getId } from '../actions';
import PostVotes from './PostVotes';

class FeedItem extends Component {
  state = {
    thanked: false,
    thanks: 0
  }

  componentWillMount() {
    const pid = this.props.feedpost.uid;
    this.props.getId(pid);
    }

    onThanksPressed() {
    const { thanks } = this.state;
      this.setState({ thanked: true });
      this.setState({ thanks: thanks + 1 });
    }

  render() {
    const { queueLength, agreements, disagreements, uid } = this.props.feedpost;

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
          {this.state.thanks}
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
  updatePostStatus,
  getId
})(FeedItem);
