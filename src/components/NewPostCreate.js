import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button,
        Icon, Right, Body, Left, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { makeNewPost } from '../actions';
import NewPost from './NewPost';

class NewPostCreate extends Component {
  onCreatePress() {
  const { queueLength, agreements, disagreements } = this.props;
  //console.log(this.props);
  this.props.makeNewPost({ queueLength, agreements, disagreements });
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
        <NewPost {...this.props} />
        <Button block onPress={this.onCreatePress.bind(this)}>
          <Text>Create post</Text>
        </Button>
    </Content>
  </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { queueLength, agreements, disagreements } = state.newpost;
  return { queueLength, agreements, disagreements };
};

export default connect(mapStateToProps, { makeNewPost })(NewPostCreate);
