import React, { Component } from 'react';
import _ from 'lodash';
import { ListView } from 'react-native';
import { Container, Content, List, Text, Header } from 'native-base';
import { connect } from 'react-redux';
import HostListItem from './HostListItem';
import TitleCardFollowing from './TitleCards/TitleCardFollowing';
import Footer from './Footer';

class FollowingList extends Component {
  state = { selectedTab: 'feed' }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.setState({ selectedTab: 'following' });
    const followedLibraries = this.isFollowed();
    this.dataSource = ds.cloneWithRows(followedLibraries);
  }

  isFollowed() {
    const { libraries, followed } = this.props;
    const followedNations = [];
    const theFollowed = _.map(libraries, (val) => {
      if (followed[val.id]) {
        followedNations.push(val);
      }
      return theFollowed;
    });
    return followedNations;
  }

  renderRow(library) {
    return <HostListItem library={library} />;
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <Container>
      <Header span />
      <TitleCardFollowing>
        <Text style={{ color: '#2B3035', fontFamily: 'Avenir Book', fontSize: 20 }}>Following</Text>
        </TitleCardFollowing>
        <Content>
          <List>
            <ListView
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            />
          </List>
       </Content>
       <Footer selectedTab={selectedTab} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const libraries = state.libraries;
  const followed = state.followedNations;
  return { libraries, followed };
  };

export default connect(mapStateToProps)(FollowingList);
