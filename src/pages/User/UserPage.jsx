import React from 'react';

import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';

import Section from 'components/Section/Section';
import styles from './UserPage.module.css';

const UserPage = () => {
  return (
    <Section>
        <div className={styles.wrapper}>
          <UserData />
          <PetsData />
        </div>
    </Section>
  );
};
export default UserPage;
