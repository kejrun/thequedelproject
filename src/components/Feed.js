import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Container, Content, Button, Text, Header, Left, Icon,
        Body, Title, Right, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { feedFetch1, feedFetch2, feedFetch3, feedFetch4, feedFetch5,
        feedFetch6, feedFetch7, feedFetch8, feedFetch9, feedFetch10,
        feedFetch11, feedFetch12, feedFetch13, notifyMe } from '../actions';
import FeedItem from './FeedItem';

class Feed extends Component {

  componentWillMount() {
  const nationID = this.props.nationID;

  if (nationID === 1) {
    this.props.feedFetch1();
  }
  if (nationID === 2) {
    this.props.feedFetch2();
  }
  if (nationID === 3) {
    this.props.feedFetch3();
  }
  if (nationID === 4) {
    this.props.feedFetch4();
  }
  if (nationID === 5) {
    this.props.feedFetch5();
  }
  if (nationID === 6) {
    this.props.feedFetch6();
  }
  if (nationID === 7) {
    this.props.feedFetch7();
  }
  if (nationID === 8) {
    this.props.feedFetch8();
  }
  if (nationID === 9) {
    this.props.feedFetch9();
  }
  if (nationID === 10) {
    this.props.feedFetch10();
  }
  if (nationID === 11) {
    this.props.feedFetch11();
  }
  if (nationID === 12) {
    this.props.feedFetch12();
  }
  if (nationID === 13) {
    this.props.feedFetch13();
  }
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
      <Header>
        <Left>
          <Button transparent onPress={() => Actions.hostOverview()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Title of Nation</Title>
        </Body>
        <Right>
        <Button
          transparent
          onPress={() => {
            Toast.show({
              text: '   Following',
            });
            notifyMe(this.props.nationID);
          }
          }
        >
          <Icon name="alarm" />
        </Button>
        </Right>
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
  const nationID = state.selectedLibraryId;
  return { feedpost, nationID };
};

export default connect(mapStateToProps, {
  feedFetch1,
  feedFetch2,
  feedFetch3,
  feedFetch4,
  feedFetch5,
  feedFetch6,
  feedFetch7,
  feedFetch8,
  feedFetch9,
  feedFetch10,
  feedFetch11,
  feedFetch12,
  feedFetch13 })(Feed);
