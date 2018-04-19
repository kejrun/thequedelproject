import React, { Component } from 'react';
import { Text, Card, CardItem } from 'native-base';

class FeedItem extends Component {

  render() {
    const { queueLength, chosenNationId } = this.props.feedpost;

    return (
      <Card>
        <CardItem>
          <Text>
            {queueLength}
          </Text>
          <Text>
            {chosenNationId}
          </Text>
        </CardItem>
      </Card>
    );
  }
}

export default FeedItem;
