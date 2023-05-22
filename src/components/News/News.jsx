import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { getNews } from 'redux/news/newsOperations';
import {
  selectNews,
  selectIsLoading,
  // selectError,
  selectTotalPage,
} from '../../redux/news/newsSelectors';

import styles from './News.module.scss';

import Section from 'components/Section/Section';
import CustomSearch from 'components/CustomSearch/CustomSearch';
import NewsItem from './NewsItem/NewsItem';
import Loader from '../Loader/Loader';
import CustomPagination from '../CustomPagination/CustomPagination';

const titlePageNews = 'News';
const initialState = { search: '', page: 1 };

const News = () => {
  const [state, setState] = useState({ ...initialState });
  const [current, setCurrent] = useState(1);
  const { search, page } = state;

  const dispatch = useDispatch();
  const itemsNews = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const totalPage = useSelector(selectTotalPage);

  useEffect(() => {
    dispatch(getNews({ page: page, search: search, perpage: 6 }));
  }, [dispatch, page, search]);

  const handleSearchSubmit = value => {
    if (!value) {
      return setState({ search: '' });
    }
    setState(prevState => {
      if (prevState.search !== value) {
        setState({ search: value, page: 1 });
      }

      return setState({ search: value });
    });
  };

  const onChangePage = page => {
    let updatedSearchParams = { ...state };

    if (page) {
      updatedSearchParams = { ...state, page };
    }
    setState(updatedSearchParams);
    setCurrent(page);
  };

  return (
    <>
      <Section className={styles.sectionNews}>
        <CustomSearch title={titlePageNews} onSearch={handleSearchSubmit} />
        {isLoading && <Loader />}
        <NewsItem items={itemsNews} />
      </Section>
      <Section>
        <div className={styles.paginationWrapper}>
          <CustomPagination
            currentPage={current}
            totalItemsPage={totalPage}
            onChangePage={onChangePage}
            itemsPerPage={6}
            hideOnSinglePage
          />
        </div>
      </Section>
    </>
  );
};

export default News;
