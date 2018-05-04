import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { Thumbnail, Body, ListItem, Icon, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HostListItem extends Component {

  render() {
    const { id, title } = this.props.library;

    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => { this.props.selectLibrary(id, title); Actions.feedpage(); }}
        >
          <ListItem>
          {(() => {
            switch (id) {
            case 1:
              return <Thumbnail square size={60} source={require('../NationLogos/logo-gotlands.png')} />;
            case 2:
              return <Thumbnail square size={60} source={require('../NationLogos/logo-gh.png')} />;
            case 3:
              return <Thumbnail square size={60} source={require('../NationLogos/logo-goteborgs.png')} />;
            case 4:
              return <Thumbnail square size={60} source={require('../NationLogos/logo-kalmar.png')} />;
            case 5:
              return <Thumbnail square size={60} source={require('../NationLogos/logo-norrlands.png')} />;
            case 6:
              return <Thumbnail square size={60} source={require('../NationLogos/logo-smalands.png')} />;
            case 7:
              return <Thumbnail square size={60} source={require('../NationLogos/logo-stockholms.png')} />;
            case 8:
              return <Thumbnail square size={60} source={require('../NationLogos/logo-snerikes.png')} />;
            case 9:
              return <Thumbnail square size={60} source={require('../NationLogos/logo-uplands.png')} />;
            case 10:
              return <Thumbnail square size={60} source={require('../NationLogos/logo-varmlands.png')} />;
            case 11:
              return <Thumbnail square size={60} source={require('../NationLogos/logo-vg.png')} />;
            case 12:
              return <Thumbnail square size={60} source={require('../NationLogos/logo-vdala.png')} />;
            case 13:
              return <Thumbnail square size={60} source={require('../NationLogos/logo-og.png')} />;
            default :
              return <Thumbnail square size={60} source={require('../NationLogos/logo-og.png')} />;
            }
            })()}
              <Body>
                <Text style={{ fontFamily: 'Avenir Book', fontSize: 16 }}>{title}</Text>
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
