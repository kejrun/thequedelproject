import React, { Component } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Thumbnail, Body, Text, ListItem, Icon, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HostListItem extends Component {

  render() {
    const { id, title, img } = this.props.library;
    console.log(img);

    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => { this.props.selectLibrary(id, title); Actions.feedpage(); }}
        >
          <ListItem>
            <Thumbnail square size={80} source={require('../NationLogos/logo-gh.png')} />
              <Body>
                <Text>{title}</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
          </ListItem>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const chosen = state.selectedLibraryId === ownProps.library.id;
  return { chosen };
};

export default connect(mapStateToProps, actions)(HostListItem);
