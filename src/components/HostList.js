import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Content, List, Header } from 'native-base';
import { connect } from 'react-redux';
import HostListItem from './HostListItem';
import { userCredits } from '../actions';

class HostList extends Component {
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
        <Content>
          <List>
            <ListView
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            />
          </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps, { userCredits })(HostList);
