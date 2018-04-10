import React, { Component } from 'react';
//import { TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem,
        Text, Title, Body, Thumbnail } from 'native-base';
import NationList from '../reducers/NationList.json';

class HostList extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title> Choose nation </Title>
          </Body>
        </Header>
        <Content>
          <List
            dataArray={NationList}
            renderRow={(item) =>
              <ListItem>
                <Thumbnail source={{ uri: item.img }} />
                <Text>{item.title}</Text>
              </ListItem>
            }
          />
        </Content>
      </Container>
    );
  }
}

export default HostList;
