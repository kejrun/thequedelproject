import React from 'react';
import { Title, Container, Content, Header } from 'native-base';
import Footer from './Footer';
import TitleCardUser from './TitleCards/TitleCardUser';

const UserPage = () => {
  return (
    <Container>
    <Header span />
    <TitleCardUser>
      <Title>You</Title>
      </TitleCardUser>
      <Content />
    <Footer />
    </Container>
  );
};

export default UserPage;
