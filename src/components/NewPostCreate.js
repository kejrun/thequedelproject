import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeNewPost } from '../actions';
import NewPost from './NewPost';

class NewPostCreate extends Component {
render() {
    return (
        <NewPost {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  const { queueLength } = state.newpost;
  return { queueLength };
};

export default connect(mapStateToProps, { makeNewPost })(NewPostCreate);
