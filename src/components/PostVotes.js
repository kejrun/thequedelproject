import _ from 'lodash';
import React, { Component } from 'react';
import { CardItem, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { agree, disagree, getId, updatePost, postSave, updateAgreements } from '../actions';

class PostVotes extends Component {
  state = {
    agree: false,
    disagree: false,
    agreements: this.props.agreements,
    disagreements: this.props.disagreements
  }

  componentWillMount() {
  }

  onAgreePress() {
    const { thisPost, postId } = this.props;
    this.setState({ agree: true });
    this.setState({ agreements: this.state.agreements + 1 });
    this.props.getId(postId);
    if (thisPost) {
        //this.props.agree();
        //this.props.updateAgreements({ postId });
    }
  }

  onDisagreePress() {
    const { thisPost, postId } = this.props;
    this.setState({ disagree: true });
    this.setState({ disagreements: this.state.disagreements + 1 });
    this.props.getId(postId);
    if (thisPost) {
      //this.props.disagree();
      //this.props.postSave({ queueLength, chosenNationId, agreements, disagreements, postId });
    }
  }

  render() {
    const { agreements, disagreements } = this.state;
    return (
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
