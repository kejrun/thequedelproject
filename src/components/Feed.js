import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Container, Content, Button, Text, Header, Left, Icon,
        Body, Title, Right } from 'native-base';
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
  //console.log(feedpost);
  return <FeedItem feedpost={feedpost} />;
}

  render() {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => Actions.hostOverview()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Title of Nation</Title>
        </Body>
        <Right />
      </Header>
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
    //console.log(uid);
    return { ...val, uid };
  });

  return { feedpost };
};

export default connect(mapStateToProps, { feedFetch })(Feed);
