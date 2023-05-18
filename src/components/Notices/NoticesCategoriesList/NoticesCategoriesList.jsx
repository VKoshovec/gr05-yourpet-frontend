import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getNoticesByCategory } from '../../../api/notices';
import React, { useEffect, useState } from 'react';
import {  message as messageAnt } from 'antd';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import NoticeCategoryItem from '../../NoticeCategoryItem/NoticeCategoryItem';
import { getCurrentAge } from 'helpers/getCurrentAge';
import styled from './NoticesCategorieslist.module.scss';
import Loader from '../../Loader/Loader';
import CustomPagination from '../../CustomPagination/CustomPagination';

const categories = ['sell', 'lost-found', 'for-free', 'favorite', 'own'];

const queryParamsCategories = {
  'sell':"sell",
  'lost-found': 'lost/found',
  'for-free': 'In good hands',
  'favorite': 'favorite',
  'own': 'my ads',
}

const NoticesCategoriesList = () => {

  const isLoggingIn = useSelector(selectIsLoggedIn);

  const [messageApi, contextHolder] = messageAnt.useMessage();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(false);
  const [current, setCurrent] = useState(3);

  const { category } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');



  // const filterValue = useSelector(selectNoticesFilters);
  // const onSearchFilms = ({ searchFilm }) => {
  //   if (search === searchFilm) {
  //     return;
  //   }
  //   setSearchParams({ search: searchFilm, page: 1 });
  //   setItems([]);
  // };



  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  const onErrormessage = () => {
    messageApi.open({
      type: 'error',
      content: 'Oops, try again now',
    });
  };


  // console.log(category, loading, error, message);
  //
  // useEffect(() => {
  //   if (!filterValue) {
  //     return
  //   }
  //   const fetchNotices = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await getNoticesByFilter({ filterValue, category });
  //       if (!data.length) {
  //         setMessage(true);
  //         return;
  //       }
  //       // console.log('data', data);
  //       setItems(data);
  //       setMessage(false);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchNotices();
  //
  //   // console.log(filterValue);
  // }, [filterValue])

  useEffect(() => {
    if ((category === 'favorite' || category === 'own') && !isLoggingIn) {
      navigate('/');
    }

  }, [category]);

  useEffect(() => {
    if (!category) {
      return;
    }

    if (!categories.includes(category)) {
      navigate('/not-found');
      return;
    }

    const fetchNotices = async () => {
      try {
        setLoading(true);
        setError(null)
        const data = await getNoticesByCategory(queryParamsCategories[category], search);
        if (!data.length) {
          setMessage(true);
          return;
        }
        setItems(data);
        setMessage(false);
      } catch (error) {
        setError(error.message);
        onErrormessage()
        setItems([])
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, [category, searchParams]);


  return (<>
    {contextHolder}
    {(message || error) && <p>No result {error}</p>}
    {loading && <Loader/>}
    <ul className={styled.list}>
      {items.map(({_id, category, image, location, date, sex, birthday, title}) => {
        return( <NoticeCategoryItem
          key={_id}
          category={category}
          image={image}
          location={location}
          date={getCurrentAge(birthday)}
          sex={sex}
          title={title}
        />)
      })}
    </ul>
    <div className={styled.paginationWrapper}>
      <CustomPagination currentPage={current} totalItemsPage={60} onChangePage={onChange}/>
    </div>
  </>)

};

export default NoticesCategoriesList;
