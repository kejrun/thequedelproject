import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, RefreshControl } from 'react-native';
import { Container, Content, Button, Text, Header, Left, Icon, Right, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { feedFetch1, feedFetch2, feedFetch3, feedFetch4, feedFetch5,
        feedFetch6, feedFetch7, feedFetch8, feedFetch9, feedFetch10,
        feedFetch11, feedFetch12, feedFetch13, following, fetchVoted,
        userCredits, trustedUser, trustUser, setFollowed, fetchingFollowers } from '../actions';
import FeedItem from './FeedItem';
import Footer from './Footer';
import TitleCardFeed from './TitleCards/TitleCardFeed';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: false };
  }

  componentWillMount() {
  this.props.userCredits();
  this.props.trustedUser();
  this.props.setFollowed();

  const { libraryId } = this.props;
  this.props.fetchingFollowers({ libraryId });

  this.props.fetchVoted();

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

componentWillUpdate(nextProps) {
  if (this.props.credits !== nextProps.credits) {
    this.props.trustUser(nextProps.credits);
  }
}

onButtonPress() {
  Actions.makenewpost();
}

notifyPress() {
  this.props.setFollowed();
  const { libraryId } = this.props;
  following({ libraryId });

  Toast.show({
    text: '   Following',
  });
}

ifInteracted(feedVotes, post) {
  const thePost = _.map(feedVotes, (val) => {
  if (val.uid === post.uid) {
    return Object.assign(post, val);
  }
  return thePost;
});
}

mappingfunction(feedpost) {
  const { feedVotes } = this.props;
const feedposts = _.map(feedpost, (val) => {
  const post = val;
  return this.ifInteracted(feedVotes, post);
});
return feedposts;
}

_onRefresh() {
  console.log('refreshing');
  this.setState({ refreshing: true });
  this.componentWillMount().then(() => {
    this.setState({ refreshing: false });
  });
}

createDataSource({ feedpost }) {
  const feedposts = this.mappingfunction(feedpost);
  feedpost.reverse();
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
            <Icon type="Ionicons" name="ios-arrow-back" style={{ color: 'gray', fontSize: 30 }} />
          </Button>
        </Left>
        <Right>
        <Icon type='SimpleLineIcons' name='diamond' style={{ fontSize: 18, color: 'white', marginTop: 10 }} />
        <Text
          style={{ color: 'white', fontFamily: 'Avenir Book', fontSize: 18, marginTop: 10, marginLeft: 5, marginRight: 10 }}
        >
        {this.props.credits}
        </Text>
        </Right>
      </Header>
      <TitleCardFeed>
      <Text style={{ color: '#2B3035', fontFamily: 'Avenir Book', fontSize: 20 }}>{this.props.title}</Text>
      <Text
      style={{ color: '#2B3035', fontFamily: 'Avenir Book', fontSize: 20 }}
      >
      {this.props.followers}
      </Text>
      <Button
        transparent
        onPress={this.notifyPress.bind(this)}
      >
        <Icon type="Entypo" name="bookmark" style={{ color: 'gray', fontSize: 30, marginTop: -14, marginLeft: -5 }} />
      </Button>
      </TitleCardFeed>
      <Content>
        <ListView
          enableEmptySections
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </Content>
      <Button full iconLeft onPress={() => { this.onButtonPress(); }}>
        <Icon type='MaterialIcons' name='playlist-add' style={{ color: '#2B3035' }} />
        <Text style={{ fontFamily: 'Avenir Book', color: '#2B3035' }}>Make a post</Text>
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
  const feedVotes = _.map(state.userVotes, (val, uid) => {
    return { ...val, uid };
  });

  const { libraryId, title } = state.selectedLibraryId;
  const { credits } = state.credits;
  const { trusted } = state.trusted;
  const { followers } = state.fetchFollowers;
  return { feedpost, libraryId, title, feedVotes, credits, trusted, followers };
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
  feedFetch13,
  fetchVoted,
  userCredits,
  trustedUser,
  trustUser,
  setFollowed,
  fetchingFollowers })(Feed);
