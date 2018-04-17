import React, { Component } from 'react';
import { Text, List, ListItem } from 'native-base';

class FeedItem extends Component {

  render() {
    const { queueLength } = this.props.feedpost;

    return (
      <List>
      <ListItem>
        <Text>
          {queueLength}
        </Text>
      </ListItem>
      </List>
    );
  }
}

export default FeedItem;
