import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../../redux/auth/selectors';
import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import styled from './NoticesCategorieslist.module.scss';
import CustomPagination from '../../CustomPagination/CustomPagination';
import {
  fetchAddNoticesFavorite,
  fetchNoticesByCategory,
  fetchRemoveNoticesFavorite,
  fetchDeleteNotices,
} from '../../../redux/notices/operation';
import { selectNotices } from '../../../redux/notices/selector';
import { selectIsLoading } from '../../../redux/local/selectors';
import { Modal } from '../../Modal/Modal';
import LearnMoveModal from '../LearnMoveModal/LearnMoveModal';
import DeleteNoticesModal from '../DeleteNoticesModal/DeleteNoticesModal';

const categories = ['sell', 'lost-found', 'for-free', 'favorite', 'own'];

const NoticesCategoriesList = () => {

  const isLoggingIn = useSelector(selectIsLoggedIn);
  const [deletedID, setDeletedID] = useState('');
  const [current, setCurrent] = useState(1);
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
  const user = useSelector(selectUser)

  const handleCloseModal = () => {
    setOpenModal(prevState => ({ ...prevState, isOpen: false }));
  }
  const handleOpenModal = (id, type) => {
    setOpenModal( { isOpen: true, typeModal: type });
    if (type === "deleteNotices") setDeletedID(id);
// if (!id) {
//   return
// }
    const desiredObject = notices.data.find(obj => obj._id === id);

    if (desiredObject) {
      setDataLearnMoveModal(desiredObject)
    }
  }
  const handleAddFavoriteClick = (id) => {
    const { favorite } = notices.data.find(notice => notice._id === id);
const inFavorites = favorite.includes(user._id);
    if (inFavorites) {
      dispatch(fetchRemoveNoticesFavorite({ id }))
    } else {
      dispatch(fetchAddNoticesFavorite({ id }))
    }
    handleCloseModal();
    dispatch(fetchNoticesByCategory({category, search, page, }));
  }

  
  const handleDeleteNotice = () => {
    dispatch(fetchDeleteNotices(deletedID)).then(()=> {setDeletedID(''); handleCloseModal(); dispatch(fetchNoticesByCategory({category, search, page, }));});
  }

  const handleDeleteFavorite = (id, userId) => {

    dispatch(fetchRemoveNoticesFavorite({ id, userId }))
  }

  const handleAddFavorite = (id, userId) => {

    dispatch(fetchAddNoticesFavorite({ id, userId }))
  }


  const onChangePage = (page) => {
    let updatedSearchParams = { ...searchParams };

    if (page) {
      updatedSearchParams = { ...updatedSearchParams, page };
    }
    setSearchParams(updatedSearchParams);
    setCurrent(page);
  };

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

    dispatch(fetchNoticesByCategory({category, search, page, }));
  }, [category, searchParams, dispatch ]);

  return (<>
    {notices.data.length === 0 && !isLoading &&  <p>No result</p> }
    <ul className={styled.list}>
      {notices?.data.map((items) => {
        return( <NoticeCategoryItem
          key={items._id}
          data={items}
          toggleModal={handleOpenModal}
          deleteNotices={handleOpenModal}
          addFavorite={handleAddFavorite}
          deleteFavorite={handleDeleteFavorite}
          userID={user._id}

        />)
      })}
    </ul>
    <div className={styled.paginationWrapper}>
      <CustomPagination
        currentPage={current}
        totalItemsPage={notices.total}
        onChangePage={onChangePage}
        itemsPerPage={6}
        hideOnSinglePage
      />
    </div>

    { isOpenModal.isOpen &&  <Modal closeModal={handleCloseModal} >
      {isOpenModal.typeModal==='LeanMove'&& <LearnMoveModal data={dataLearnMoveModal} onClickAdd={handleAddFavoriteClick}/> }
      {isOpenModal.typeModal ==='deleteNotices' && <DeleteNoticesModal title={dataLearnMoveModal.title} onCancel={handleCloseModal} onDelete={handleDeleteNotice}/> }
    </Modal>}
  </>)

};

export default NoticesCategoriesList;
