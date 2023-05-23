import { useState, useEffect } from 'react';

import styles from './Friends.module.scss';

import Section from 'components/Section/Section';
import MainTitle from './MainTitle/MainTitle';
import CardItem from './CardItem/CardItem';

import getAllFriends from '../../api/friends';

const Friends = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchFriends = async () => {
        const res = await getAllFriends();
        setItems(res);
      };
      fetchFriends();
    } catch (error) {
      setError({ error });
    } finally {
      setIsLoading(true);
    }
  }, []);
  return (
    <>
      <Section>
        <div className={styles.section}>
          <MainTitle />
        </div>
      </Section>

      <Section>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && !error && (
          <div className={styles.sectionItems}>
            <CardItem items={items} />
          </div>
        )}
      </Section>
    </>
  );
};

export default Friends;

/* 
    const fetchFriends = async () => {
      const res = await getAllFriends();

      setItems(res);
    };
    fetchFriends();

*/
