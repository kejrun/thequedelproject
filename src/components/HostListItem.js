import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Thumbnail, Body, Text, ListItem } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HostListItem extends Component {

  renderDesciption() {
    const { library, chosen } = this.props;

    if (chosen) {
      return (
          console.log('hej')
      );
    }
  }
//this.props.selectLibrary(id)
  render() {
    const { id, title } = this.props.library;

    return (
      <TouchableOpacity
        onPress={() => console.log('hej')}
      >
        <View>
        <ListItem>
        <Thumbnail square size={80} source={{ uri: 'https://d2rfo6yapuixuu.cloudfront.net/h52/hd3/8864539443230/07311042004714.jpg_1463149054792_master_axfood_400' }} />
          <Body>
            <Text>
              {title}
            </Text>
          </Body>
          {this.renderDesciption()}
          </ListItem>
          </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const chosen = state.selectedLibraryId === ownProps.library.id;
  return { chosen };
};

export default connect(mapStateToProps, actions)(HostListItem);
