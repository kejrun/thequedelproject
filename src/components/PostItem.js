import React, { Component } from 'react';
import { Text, List, ListItem } from 'native-base';

class PostItem extends Component {

  render() {
    const { value } = this.props.feedpost;

    return (
      <List>
      <ListItem>
        <Text>
          {value}
        </Text>
      </ListItem>
      </List>
    );
  }
}

export default PostItem;
