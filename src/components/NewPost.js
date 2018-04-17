import React, { Component } from 'react';
import { Container, Header, Title, Content, Button,
        Icon, Right, Body, Left, Picker, Form, Text } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { makeNewPost } from '../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queueLength: undefined
    };
  }

  onValueChange(value: string) {
    this.setState({ queueLength: value });
    this.props.makeNewPost({ prop: 'queueLength', value });
  }

  onButtonPress() {
      console.log('Thank you for making a post!');
      Actions.pop();
  }

  render() {
  return (
    <Container>
       <Header>
         <Left>
           <Button transparent onPress={() => Actions.pop()}>
             <Icon name="arrow-back" />
           </Button>
         </Left>
         <Body>
           <Title>Make a post</Title>
         </Body>
         <Right />
       </Header>
       <Content>
       <Text> How long is the queue at arrival?</Text>
         <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select"
              style={{ width: undefined }}
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Select one"
              itemStyle={{
                marginLeft: 0,
                paddingLeft: 10
              }}
              selectedValue={this.state.queueLength}
              onValueChange={this.onValueChange.bind(this)}
            >
             <Picker.Item label='0-10 min' value='1-10 min' />
             <Picker.Item label='10-20 min' value='10-20 min' />
             <Picker.Item label='20-40 min' value='20-40 min' />
             <Picker.Item label='40-60 min' value='40-60 min' />
             <Picker.Item label='>1h' value='>1 hour' />
             <Picker.Item label='>2h' value='>2 hour' />
             <Picker.Item label='One-in-one-out' value='One-in-one-out' />
            </Picker>
            </Form>
          <Button onPress={this.onButtonPress.bind(this)}>
            <Text>Create post</Text>
          </Button>
      </Content>
    </Container>
  );
}
}

const mapStateToProps = (state) => {
  const { queueLength } = state.newpost;
    return { queueLength };
};

export default connect(mapStateToProps, { makeNewPost })(NewPost);
