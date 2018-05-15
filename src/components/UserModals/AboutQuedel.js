import React from 'react';
import { Modal, View } from 'react-native';
import { CardItem, Button, Card, Body, Text, Left, Icon } from 'native-base';

const AboutQuedel = ({ visible, onDecline }) => {
  const { containerStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType='slide'
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <Card>
          <CardItem header>
          <Left>
            <Button transparent onPress={onDecline}>
              <Icon type="Ionicons" name="ios-close" style={{ color: 'gray', fontSize: 50 }} />
            </Button>
          </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={{ fontFamily: 'Avenir Book', fontSize: 16 }}>
              Uppsalas 13 student nations all host different kind of events, ranging from spring proms,
                  to stand up comedy, to nightclubs. But for many of the events can queuing time sometimes
                  can be several hours long.

                  An standard problem is that the student and his or her group of friends wants to leave as late as possible
                  without having to stand in an hour-long queue, and this is the problem that Quedel solves!

                  Quedel is an app where students can post estimations of the queuing time for a specific nation
                  or event in a live feed to help others and collect credits.</Text>
              </Body>
          </CardItem>
        </Card>
      </View>
    </Modal>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
  }
};

export default AboutQuedel;
