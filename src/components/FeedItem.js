//import _ from 'lodash';
import React, { Component } from 'react';
import { Text, Card, CardItem } from 'native-base';
import { connect } from 'react-redux';
import { updatePostStatus, getId } from '../actions';
import PostVotes from './PostVotes';

class FeedItem extends Component {

  componentWillMount() {
    const pid = this.props.feedpost.uid;
    this.props.getId(pid);
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
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { queueLength, agreements, disagreements, pid } = state.newpost;
  return { queueLength, agreements, disagreements, pid };
};

export default connect(mapStateToProps, {
  updatePostStatus,
  getId
})(FeedItem);
