import _ from 'lodash';
import React, { Component } from 'react';
import { CardItem, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { agree, disagree, getId, updatePost, postSave, updateAgreements } from '../actions';

class PostVotes extends Component {
  componentWillMount() {
  }

  onAgreePress() {
    const credit = 1;
    const { thisPost, postId } = this.props;
    this.props.getId(postId);
    //console.log('agreepress: thisprops');
    //console.log(this.props);
    if (thisPost) {
        console.log(thisPost);
        this.props.agree();
        this.props.updateAgreements({ postId });
        console.log('postSave sent');
    }
  }

  onDisagreePress() {
    const credit = 1;
    const { thisPost, postId, queueLength, chosenNationId, agreements, disagreements } = this.props;
    this.props.getId(postId);
    if (thisPost) {
      this.props.disagree();
      //this.props.postSave({ queueLength, chosenNationId, agreements, disagreements, postId });
    }
  }

  render() {
    const { agreements, disagreements } = this.props;
    return (
    <CardItem >
      <Button
        onPress={this.onAgreePress.bind(this)}
        value={agreements}
      >
        <Text> Agree: {agreements} </Text>
      </Button>
      <Button
        onPress={this.onDisagreePress.bind(this)}
        value={disagreements}
      >
        <Text> Disagree: {disagreements} </Text>
      </Button>
    </CardItem>
  );
  }
}

export const mapStateToProps = (state, ownProps) => {
  const thisPost = state.selectedId === ownProps.postId;

  return { thisPost };
};

export default connect(mapStateToProps, {
  agree,
  disagree,
  getId,
  updatePost,
  postSave,
  updateAgreements
})(PostVotes);
