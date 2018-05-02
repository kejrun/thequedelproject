import React from 'react';
import { Title, Container, Content, Header } from 'native-base';
import Footer from './Footer';
import TitleCardUser from './TitleCards/TitleCardUser';
import MakeaPostCard from './TitleCards/MakeaPostCard';

const UserPage = () => {
  return (
    <Container>
      <Header span />
      <TitleCardUser>
        <Title style={{ color: '#2B3035' }}>You</Title>
      </TitleCardUser>
      <Content>
        <MakeaPostCard />
      </Content>
      <Footer />
    </Container>
  );
};

export default UserPage;
