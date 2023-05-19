import { useState, useEffect } from 'react';
import Section from 'components/Section/Section';
import CustomSearch from 'components/CustomSearch/CustomSearch';
import NewsItem from './NewsItem/NewsItem';

import getAllNews from 'api/news';

import styles from './News.module.scss';

const titlePageNews = 'News';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await getAllNews();
      // console.log(data);

      setNews(data);
    };
    fetchNews();
  }, []);

  return (
    <Section className={styles.sectionNews}>
      <CustomSearch title={titlePageNews} />
      <NewsItem items={news} />
    </Section>
  );
};

export default News;
