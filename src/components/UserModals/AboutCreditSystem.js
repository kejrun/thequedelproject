import React from 'react';
import { Modal, View } from 'react-native';
import { CardItem, Button, Card, Body, Text, Left, Icon } from 'native-base';

const AboutCreditSystem = ({ visible, onDecline }) => {
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
              <Text style={{ fontFamily: 'Avenir Book', fontSize: 20, fontWeight: 'bold'}} >
              {'\n'}How does the credit system work?
              </Text>
              <Text style={{ fontFamily: 'Avenir Book', fontSize: 16 }}>
              Press Agree: Both you and the user who made the post receives 5 credits. {'\n'}{'\n'}

              Press Disagree: You receive 5 credits. The user who made the post looses 3 credits.
              If you disagree with your own post you will not receive any credits. {'\n'}{'\n'}

              Press Thanks: You receive 3 credits. The user who made the post will receive as many
              credits as the number of followers of that specific student nation.</Text>
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

export default AboutCreditSystem;
