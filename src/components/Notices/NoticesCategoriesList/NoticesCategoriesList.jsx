import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getNoticesByCategory } from '../../../api/notices';
import React, { useEffect, useState } from 'react';
import {  message as messageAnt } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import { getCurrentAge } from 'helpers/getCurrentAge';
import styled from './NoticesCategorieslist.module.scss';
import Loader from '../../Loader/Loader';
import CustomPagination from '../../CustomPagination/CustomPagination';
import { fetchNoticesByCategory } from '../../../redux/notices/operation';
import { selectNotices } from '../../../redux/notices/selector';
import { selectIsLoading } from '../../../redux/local/selectors';
import { Modal } from '../../Modal/Modal';
import LearnMoveModal from '../LearnMoveModal/LearnMoveModal';
import DeleteNoticesModal from '../DeleteNoticesModal/DeleteNoticesModal';

const categories = ['sell', 'lost-found', 'for-free', 'favorite', 'own'];

const queryParamsCategories = {
  'sell':"sell",
  'lost-found': 'lost/found',
  'for-free': 'In good hands',
  'favorite': 'favorite',
  'own': 'own',
}

const NoticesCategoriesList = () => {

  const isLoggingIn = useSelector(selectIsLoggedIn);

  // const [messageApi, contextHolder] = messageAnt.useMessage();
  const [current, setCurrent] = useState(3);
  const [isOpenModal, setOpenModal] = useState({isOpen: false, typeModal:''})
  const [dataLearnMoveModal, setDataLearnMoveModal] = useState({})


  const { category } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  const dispatch = useDispatch();

  const notices = useSelector(selectNotices)
  const isLoading = useSelector(selectIsLoading)


  // const filterValue = useSelector(selectNoticesFilters);
  // const onSearchFilms = ({ searchFilm }) => {
  //   if (search === searchFilm) {
  //     return;
  //   }
  //   setSearchParams({ search: searchFilm, page: 1 });
  //   setItems([]);
  // };

  const handleCloseModal = () => {
    setOpenModal(prevState => ({ ...prevState, isOpen: false }));
  }
  const handleOpenModal = (id, type) => {
    console.log(type);

    setOpenModal( { isOpen: true, typeModal: type });

    console.log(isOpenModal);
    console.log('id-------------',id);
if (!id) {
  return
}
    const desiredObject = notices.data.find(obj => obj._id === id);

    if (desiredObject) {
      setDataLearnMoveModal(desiredObject)
    }



  }

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  // const onErrormessage = () => {
  //   messageApi.open({
  //     type: 'error',
  //     content: 'Oops, try again now',
  //   });
  // };


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

    dispatch(fetchNoticesByCategory({ category: queryParamsCategories[category], search }));
  }, [category, searchParams, dispatch]);

  // console.log(items);
  return (<>
    {/*{contextHolder}*/}
    {/*{(message || error) && <p>No result {error}</p>}*/}
    {/*{loading && <Loader/>}*/}
    {notices.data.length === 0 && !isLoading &&  <p>No result</p> }
    <ul className={styled.list}>
      {notices?.data.map((items) => {
        return( <NoticeCategoryItem
          key={items._id}
          data={items}
          toggleModal={handleOpenModal}
          deleteNotices={handleOpenModal}


        />)
      })}
    </ul>
    <div className={styled.paginationWrapper}>
      <CustomPagination currentPage={current} totalItemsPage={60} onChangePage={onChange}/>
    </div>

    { isOpenModal.isOpen &&  <Modal   closeModal={handleCloseModal} >
      {isOpenModal.typeModal==='LeanMove'&& <LearnMoveModal data={dataLearnMoveModal}/> }
      {isOpenModal.typeModal ==='deleteNotices' && <DeleteNoticesModal/> }
    </Modal>}
  </>)


};

export default NoticesCategoriesList;
