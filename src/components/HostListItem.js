import React, { Component } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Thumbnail, Body, Text, ListItem, Icon, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HostListItem extends Component {

  ifChosenNation() {
    //const { library, chosen } = this.props;

    //if (chosen) {
      //return (
      //  console.log({ library })
      //);
    //}
  }

  render() {
    const { id, title } = this.props.library;

    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => { this.props.selectLibrary(id); Actions.feedpage(); }}
        >
          <ListItem>
            <Thumbnail square size={80} source={require('../NationLogos/logo-gh.png')} />
              <Body>
                <Text>{title}</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
              {this.ifChosenNation()}
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
