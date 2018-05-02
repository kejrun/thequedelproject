import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Container, Content, Button, Text, Header, Left, Icon,
         Right, Toast, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { feedFetch1, feedFetch2, feedFetch3, feedFetch4, feedFetch5,
        feedFetch6, feedFetch7, feedFetch8, feedFetch9, feedFetch10,
        feedFetch11, feedFetch12, feedFetch13, following } from '../actions';
import FeedItem from './FeedItem';
import Footer from './Footer';
import TitleCardFeed from './TitleCards/TitleCardFeed';

class Feed extends Component {

  componentWillMount() {
  const libraryId = this.props.libraryId;

  if (libraryId === 1) {
    this.props.feedFetch1();
  }
  if (libraryId === 2) {
    this.props.feedFetch2();
  }
  if (libraryId === 3) {
    this.props.feedFetch3();
  }
  if (libraryId === 4) {
    this.props.feedFetch4();
  }
  if (libraryId === 5) {
    this.props.feedFetch5();
  }
  if (libraryId === 6) {
    this.props.feedFetch6();
  }
  if (libraryId === 7) {
    this.props.feedFetch7();
  }
  if (libraryId === 8) {
    this.props.feedFetch8();
  }
  if (libraryId === 9) {
    this.props.feedFetch9();
  }
  if (libraryId === 10) {
    this.props.feedFetch10();
  }
  if (libraryId === 11) {
    this.props.feedFetch11();
  }
  if (libraryId === 12) {
    this.props.feedFetch12();
  }
  if (libraryId === 13) {
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

notifyPress() {
  const { libraryId } = this.props;
  following({ prop: 'libraryId', libraryId });

  Toast.show({
    text: '   Following',
  });
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
      <Header span>
        <Left>
          <Button transparent onPress={() => Actions.hostOverview()}>
            <Icon type="Ionicons" name="ios-arrow-back" style={{ color: 'white', fontSize: 30 }} />
          </Button>
        </Left>
        <Right>
        <Button
          transparent
          onPress={this.notifyPress.bind(this)}
        >
          <Icon type="Entypo" name="bookmark" style={{ color: 'white', fontSize: 30 }} />
        </Button>
        </Right>
      </Header>
      <TitleCardFeed>
      <Title>{this.props.title}</Title>
      </TitleCardFeed>
      <Content>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </Content>
      <Button full iconLeft onPress={() => { this.onButtonPress(); }}>
        <Icon type='MaterialIcons' name='playlist-add' />
        <Text>Make a post</Text>
      </Button>
      <Footer />
    </Container>
  );
}
}

const mapStateToProps = state => {
  const feedpost = _.map(state.feedpost, (val, uid) => {
    return { ...val, uid };
  });
  const { libraryId, title } = state.selectedLibraryId;

  return { feedpost, libraryId, title };
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
