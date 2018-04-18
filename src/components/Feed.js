import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { feedFetch } from '../actions';
import FeedItem from './FeedItem';

class Feed extends Component {
  componentWillMount() {
  this.props.feedFetch();
  this.createDataSource(this.props);
}

componentWillReceiveProps(nextProps) {
  this.createDataSource(nextProps);
}

onButtonPress() {
  Actions.makenewpost();
}

createDataSource({ feedpost }) {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });

  this.dataSource = ds.cloneWithRows(feedpost);
}

renderRow(feedpost) {
  return <FeedItem feedpost={feedpost} />;
}

  render() {
  return (
    <Container>
      <Content>
        <Button block onPress={() => { this.onButtonPress(); }}>
          <Text>Press to make a new post</Text>
        </Button>

        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </Content>
    </Container>
  );
}
}

const mapStateToProps = state => {
  const feedpost = _.map(state.feedpost, (val, uid) => {
    return { ...val, uid };
  });

  return { feedpost };
};

export default connect(mapStateToProps, { feedFetch })(Feed);
