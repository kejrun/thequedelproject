import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Content, List, Title, Header } from 'native-base';
import { connect } from 'react-redux';
import HostListItem from './HostListItem';
import Footer from './Footer';
import TitleCardFollowing from './TitleCards/TitleCardFollowing';

class FollowingList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <HostListItem library={library} />;
  }

  render() {
    return (
      <Container>
      <Header span />
      <TitleCardFollowing>
        <Title>Following</Title>
        </TitleCardFollowing>
        <Content>
          <List>
            <ListView
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

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(FollowingList);
