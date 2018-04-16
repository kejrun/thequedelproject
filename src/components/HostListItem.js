import React, { Component } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Thumbnail, Body, Text, ListItem, Icon, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HostListItem extends Component {

  ifChosenNation() {
    const { library, chosen } = this.props;

    if (chosen) {
      return (
        console.log({ library })
      );
    }
  }

  render() {
    const { id, title } = this.props.library;

    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => { this.props.selectLibrary(id); Actions.feedpage(); }}
        >
          <ListItem>
            <Thumbnail square size={80} source={{ uri: 'https://d2rfo6yapuixuu.cloudfront.net/h52/hd3/8864539443230/07311042004714.jpg_1463149054792_master_axfood_400' }} />
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
