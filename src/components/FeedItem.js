import React, { Component } from 'react';
import { Text, Card, CardItem } from 'native-base';

class FeedItem extends Component {

  render() {
    const { queueLength } = this.props.feedpost;

    return (
      <Card>
        <CardItem>
          <Text>
            {queueLength}
          </Text>
        </CardItem>
      </Card>
    );
  }
}

export default FeedItem;
