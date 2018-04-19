//import _ from 'lodash';
import React, { Component } from 'react';
import { Text, Card, CardItem, Button } from 'native-base';
import { connect } from 'react-redux';
import { agree, disagree, updatePostStatus, getPostId } from '../actions';

class FeedItem extends Component {

  componentWillMount() {
    const pid = this.props.feedpost.uid;
    console.log('get id');
    this.props.getPostId(pid);
    console.log({ prop: 'pid', pid });
    }


  onAgreePress() {
    const { queueLength, agreements, disagreements } = this.props;
    this.props.agree();
    this.props.updatePostStatus({
      queueLength,
      agreements,
      disagreements,
      uid: this.props.feedpost.uid
    });
    //console.log(this.props.agreements);
  }

  onDisagreePress() {
  const { queueLength, agreements, disagreements } = this.props;
    this.props.disagree();
    this.props.updatePostStatus({
      queueLength,
      agreements,
      disagreements,
      uid: this.props.feedpost.uid });
    //console.log(this.props.disagreements);
  }

  render() {
    const { queueLength, agreements, disagreements, uid } = this.props.feedpost;

    return (
      <Card>
        <CardItem>
          <Text>
            {queueLength}
          </Text>
          <Button
          onPress={this.onAgreePress.bind(this)}
          value={uid}
          >
            <Text> Agree: {agreements} </Text>
          </Button>
          <Button
          onPress={this.onDisagreePress.bind(this)}
          value={uid}
          >
            <Text> Disagree: {disagreements} </Text>
          </Button>
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
  agree,
  disagree,
  updatePostStatus,
  getPostId
})(FeedItem);
