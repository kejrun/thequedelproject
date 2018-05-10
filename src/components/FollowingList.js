import React, { Component } from 'react';
import _ from 'lodash';
import { ListView } from 'react-native';
import { Container, Content, List, Text, Header } from 'native-base';
import { connect } from 'react-redux';
import HostListItem from './HostListItem';
import Footer from './Footer';
import TitleCardFollowing from './TitleCards/TitleCardFollowing';

class FollowingList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const followedLibraries = this.isFollowed();

    this.dataSource = ds.cloneWithRows(followedLibraries);
  }

  isFollowed() {
    const { libraries, followed } = this.props;
    const followedNations = [];
    const theFollowed = _.map(libraries, (val) => {
      if (followed[val.id]) {
        followedNations.push(val);
        console.log(followedNations);
      }
      return theFollowed;
    });
    return followedNations;
  }

  renderRow(library) {
    return <HostListItem library={library} />;
  }

  render() {
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
       <Footer />
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
