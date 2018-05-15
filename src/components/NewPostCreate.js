import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Content, Button, Icon, Right, Left, Text, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { makeNewPost } from '../actions';
import NewPost from './NewPost';
import MakeaPostCard from './TitleCards/MakeaPostCard';

class NewPostCreate extends Component {
  onButtonPress() {
  const { queueLength, chosenNation, agreements, disagreements, thanks, trusted } = this.props;
  if (queueLength !== '') {
    this.props.makeNewPost({ queueLength, chosenNation, agreements, disagreements, thanks, trusted });
  } else {
    Toast.show({
      text: '   Select a queueing time',
    });
  }
}

render() {
    return (
      <Container>
         <Header span>
           <Left>
             <Button transparent onPress={() => Actions.pop()}>
              <Icon type="Ionicons" name="ios-arrow-back" style={{ color: 'white', fontSize: 30 }} />
             </Button>
           </Left>
           <Right />
         </Header>
         <Content>
         <MakeaPostCard>
            <Text />
            <Text />
           <Text style={{ fontFamily: 'Avenir Book' }}> How long is the queue at arrival?</Text>
           <Text />
          <NewPost {...this.props} />
            <Text />
          <Button block onPress={this.onButtonPress.bind(this)}>
            <Text style={{ fontFamily: 'Avenir Book', color: 'white' }}>Create post</Text>
          </Button>
        </MakeaPostCard>
    </Content>
  </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { queueLength, chosenNation, agreements, disagreements, thanks } = state.newpost;
  const { trusted } = state.trusted;
  return { queueLength, chosenNation, agreements, disagreements, thanks, trusted };
};

export default connect(mapStateToProps, { makeNewPost })(NewPostCreate);
