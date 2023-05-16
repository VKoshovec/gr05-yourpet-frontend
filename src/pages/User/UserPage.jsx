import React from 'react';

import UserData from 'components/UserData/UserData';

import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
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
