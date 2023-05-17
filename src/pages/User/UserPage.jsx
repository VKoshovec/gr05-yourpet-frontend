import React from 'react';

import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';

import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import styles from './UserPage.module.css';

const UserPage = () => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <UserData />
          <PetsData />
        </div>
      </Container>
    </Section>
  );
};
export default UserPage;
