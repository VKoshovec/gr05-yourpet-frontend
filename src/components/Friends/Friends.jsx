import { useState, useEffect } from 'react';

import styles from './Friends.module.scss';

import Section from 'components/Section/Section';
import MainTitle from './MainTitle/MainTitle';
import CardItem from './CardItem/CardItem';

import getAllFriends from '../../api/friends';

const Friends = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchFriends = async () => {
      const res = await getAllFriends();

      setItems(res);
    };
    fetchFriends();
  }, []);
  return (
    <>
      <Section>
        <div className={styles.section}>
          <MainTitle />

          <CardItem items={items} />
        </div>
      </Section>
    </>
  );
};

export default Friends;
