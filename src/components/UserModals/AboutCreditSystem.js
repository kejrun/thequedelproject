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
              <Text style={{ fontFamily: 'Avenir Book', fontSize: 16 }}>
                    The credit system works this way.. A disabled button is unusable and un-clickable.
                    The disabled prop of NativeBase Button is of type boolean. When present, it specifies that
                    the button should be disabled. The disabled prop can be set to keep a user from clicking on
                    the button until some other conditions are met (like selecting a checkbox, etc.). Then, a
                    conditional code could remove the disabled value, and make the button usable.</Text>
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
