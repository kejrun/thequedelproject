import React from 'react';
import { Modal, View } from 'react-native';
import { CardItem, Button, Card, Body, Text, Left, Icon } from 'native-base';

const DeleteAccount = ({ visible, onDecline }) => {
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
                Delete account</Text>
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

export default DeleteAccount;
