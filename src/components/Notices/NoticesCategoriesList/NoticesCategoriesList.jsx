import { useNavigate, useParams } from 'react-router-dom';
import { getNoticesByCategory, getNoticesByFilter } from '../../../api/notices';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import { selectNoticesFilters } from '../../../redux/filters/noticesFilter/selectors';
import NoticeCategoryItem from '../../NoticeCategoryItem/NoticeCategoryItem';
import {getCurrentAge} from 'helpers/getCurrentAge'
import styled from './NoticesCategorieslist.module.scss'
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


  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(false);

  const { category } = useParams();
  const navigate = useNavigate();

  const filterValue = useSelector(selectNoticesFilters);
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
        console.log( encodeURIComponent('In good hands'));
        const data = await getNoticesByCategory(queryParamsCategories[category]);
        if (!data.length) {
          setMessage(true);
          return;
        }
        // console.log('data', data);
        setItems(data);
        setMessage(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, [category]);


  return (

    <ul className={styled.list}>
      {items.map(({id, category, image, location, date, sex, birthday}) => {
     return( <NoticeCategoryItem
       key={id}
       category={category}
       image={image}
       location={location}
       date={getCurrentAge(birthday)}
       sex={sex}
     />)
      })}

    </ul>)
};

export default NoticesCategoriesList;
