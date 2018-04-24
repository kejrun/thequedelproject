import _ from 'lodash';
import React, { Component } from 'react';
import { CardItem, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { agree,
  disagree,
  getId,
  updatePost,
  postSave,
  updateAgreements,
  updateDisagreements
} from '../actions';

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
    const { postId } = this.props;
    this.setState({ agree: true });
    this.setState({ agreements: this.state.agreements + 1 });
    this.props.getId(postId);
    this.props.updateAgreements({ postId });
  }

  onDisagreePress() {
    const { postId } = this.props;
    this.setState({ disagree: true });
    this.setState({ disagreements: this.state.disagreements + 1 });
    this.props.getId(postId);
    this.props.updateDisagreements({ postId });
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
  updateAgreements,
  updateDisagreements
})(PostVotes);
