import React, { Component } from 'react';
import { Picker, Form, Icon } from 'native-base';
import { connect } from 'react-redux';
import { updatePost } from '../actions';

class NewPost extends Component {

  render() {
  return (
        <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select"
              style={{ width: undefined }}
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Select length of queue"
              itemStyle={{
                marginLeft: 0,
                paddingLeft: 10
              }}
              selectedValue={this.props.queueLength}
              onValueChange={value => this.props.updatePost({ prop: 'queueLength', value })}
            >
             <Picker.Item label='0-10 min' value='1-10 min' />
             <Picker.Item label='10-20 min' value='10-20 min' />
             <Picker.Item label='20-40 min' value='20-40 min' />
             <Picker.Item label='40-60 min' value='40-60 min' />
             <Picker.Item label='>1h' value='>1 hour' />
             <Picker.Item label='>2h' value='>2 hour' />
             <Picker.Item label='One-in-one-out' value='One-in-one-out' />
            </Picker>
          </Form>
  );
}
}

const mapStateToProps = (state) => {
  const { queueLength, chosenNationId } = state.newpost;
    return { queueLength, chosenNationId };
};

export default connect(mapStateToProps, { updatePost })(NewPost);
