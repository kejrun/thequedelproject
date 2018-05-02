import React from 'react';
import { Title, Container, Content } from 'native-base';
import Footer from './Footer';
import TitleCardUser from './TitleCards/TitleCardUser';

const UserPage = () => {
  return (
    <Container>
      <Content>
      <TitleCardUser>
        <Title>Following</Title>
        </TitleCardUser>
      </Content>
    <Footer />
    </Container>
  );
};

export default UserPage;
