import React from 'react';

import UserData from 'components/UserData/UserData';

import Container from 'components/Container/Container';
import Section from 'components/Section/Container';
// import styles from './UserPage.module.css';

const UserPage = () => {
  return (
    <Section>
      <Container>
        <UserData />
      </Container>
    </Section>
  );
};
export default UserPage;
