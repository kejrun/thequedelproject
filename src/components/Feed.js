import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, RefreshControl, View, ActivityIndicator } from 'react-native';
import { Container, Content, Button, Text, Header, Left, Icon, Right, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { feedFetch, following, fetchVoted,
  userCredits, trustedUser, trustUser, setFollowed, fetchingFollowers } from '../actions';
import FeedItem from './FeedItem';
import TitleCardFeed from './TitleCards/TitleCardFeed';
import Footer from './Footer';
import AboutCreditSystem from './UserModals/AboutCreditSystem';

  class Feed extends Component {
    state = {
      refreshing: false,
      selectedTab: 'feed',
      followed: false,
      loading: true,
      showModalCreditSystem: false, };

    componentWillMount() {
      this.setState({ loading: true });
      this.props.userCredits();
      this.props.trustedUser();
      this.props.setFollowed();

      const { libraryId } = this.props;
      this.props.fetchingFollowers({ libraryId });
      this.props.fetchVoted();

      this.props.feedFetch(libraryId);
      this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
      this.createDataSource(nextProps);
      if (nextProps.feedpost !== [] || nextProps.librariId !== this.props.libraryId) {
        this.setState({ loading: false });
      }
      const { libraryId } = this.props;
      if (this.props.followed !== nextProps.followed) {
        if (nextProps.followed[libraryId]) {
          this.setState({ followed: true });
        } else {
          this.setState({ followed: false });
        }
      }
      if (this.props.credits !== nextProps.credits) {
        this.props.trustUser(nextProps.credits);
      }
    }

    /*componentWillUpdate(nextProps) {
      if (this.props.credits !== nextProps.credits) {
        this.props.trustUser(nextProps.credits);
      }
    }*/

    onButtonPress() {
      Actions.makenewpost();
    }

    onDecline() {
      this.setState({ showModalCreditSystem: false });
    }

    notifyPress() {
      const { libraryId } = this.props;
      const { followed } = this.state;
      this.props.setFollowed();
      this.props.following({ libraryId, followed });
      if (!followed) {
        Toast.show({
          text: '   Following',
        });
      } else {
        Toast.show({
          text: '   Unfollowed',
        });
      }
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

    ifLoading() {
      if (this.state.loading) {
        return (
          <View>
            <Text />
            <Text />
            <Text />
            <ActivityIndicator size="large" color='black' />
          </View>);
        }
      }

      doRefresh() {
        const { libraryId } = this.props;
        this.props.fetchingFollowers({ libraryId });
        this.props.fetchVoted();
        this.props.feedFetch(libraryId);
        this.createDataSource(this.props);
      }

      _onRefresh() {
        this.setState({ refreshing: true });
        this.doRefresh().then(() => {
          this.setState({ refreshing: false });
        });
      }

      componentWillUnMount() {
        this.setState({ loading: true });
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
        const { selectedTab, followed } = this.state;

        let bookMark;
        if (followed) {
          bookMark = (
            <Icon type="Entypo" name="bookmark" style={{ color: '#202428', fontSize: 30, marginTop: -14, marginRight: 0 }} />
          );
        } else {
          bookMark = (
            <Icon type="Entypo" name="bookmark" style={{ color: '#393F44', fontSize: 30, marginTop: -14, marginRight: 0 }} />
          );
        }


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
                  onPress={() => {
                    this.setState({ showModalCreditSystem: !this.state.showModalCreditSystem });
                  }}
                >
                  <Icon type='SimpleLineIcons' name='diamond' style={{ fontSize: 20, color: 'white' }} />
                  <Text
                  style={{ color: 'white', fontFamily: 'Avenir Book', fontSize: 20, paddingTop: 10, paddingLeft: 5, paddingRight: 0 }}
                  >
                  {this.props.credits}
                  </Text>
                </Button>
              </Right>
            </Header>
            <TitleCardFeed>
              <Text style={{ color: '#2B3035', fontFamily: 'Avenir Book', fontSize: 20 }}>{this.props.title}</Text>
              <Button
                transparent
                onPress={this.notifyPress.bind(this)}
              >
                {bookMark}
                <Text
                style={{ color: '#2B3035', fontFamily: 'Avenir Book', fontSize: 18, marginLeft: 0, paddingLeft: 0, marginTop: -10 }}
                >
                {this.props.followers}
                </Text>
              </Button>
            </TitleCardFeed>
            <Content>
            <View>
              {this.ifLoading()}
            </View>
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
              <AboutCreditSystem
              visible={this.state.showModalCreditSystem}
              onDecline={this.onDecline.bind(this)}
              />
            </Content>
              <Button block iconLeft onPress={() => { this.onButtonPress(); }}>
                <Icon type='MaterialIcons' name='playlist-add' style={{ color: 'white' }} />
                <Text style={{ fontFamily: 'Avenir Book', color: 'white', fontSize: 18 }}>Make a post</Text>
              </Button>
            <Footer selectedTab={selectedTab} />
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
      const followed = state.followedNations;
      return { feedpost, libraryId, title, feedVotes, credits, trusted, followers, followed };
    };

    export default connect(mapStateToProps, {
      feedFetch,
      fetchVoted,
      userCredits,
      trustedUser,
      trustUser,
      setFollowed,
      following,
      fetchingFollowers })(Feed);
