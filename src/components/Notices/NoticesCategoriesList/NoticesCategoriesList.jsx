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
import { selectNotices, selectNoticesAdditionalFilters } from '../../../redux/notices/selector';
import { selectIsLoading } from '../../../redux/local/selectors';
import { Modal } from '../../Modal/Modal';
import LearnMoveModal from '../LearnMoveModal/LearnMoveModal';
import DeleteNoticesModal from '../DeleteNoticesModal/DeleteNoticesModal';
import AddPetButton from '../../Notices/AddPetButton/AddPetButton';
import { initialNotices } from '../../../presets/initial';
import { setFilter } from '../../../redux/notices/slice';


const categories = ['sell', 'lost-found', 'for-free', 'favorite', 'own'];
const ageObject = {
  '1year': '1',
  '2year': '2',
  '3-12m': '3-12',
};

const NoticesCategoriesList = () => {

  const isLoggingIn = useSelector(selectIsLoggedIn);
  const [deletedID, setDeletedID] = useState('');
  const [current, setCurrent] = useState(1);
  const [isOpenModal, setOpenModal] = useState({ isOpen: false, typeModal: '' });
  const [dataLearnMoveModal, setDataLearnMoveModal] = useState({});

  const { category } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');
  const gender = searchParams.get('gender');
  const age = searchParams.get('age');

  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);
  const additionalFilters = useSelector(selectNoticesAdditionalFilters);
  // console.log(additionalFilters);

  const setAdditionalFilters = (additionalFilter) => {


    const ageArray = Object.keys(additionalFilter.byAge).filter(key => additionalFilter.byAge[key]);
    const age = ageArray.filter(field => field in ageObject).map(field => ageObject[field]).join(',');

    const genderArray = Object.keys(additionalFilter.byGender).filter(key => additionalFilter.byGender[key]);
    const gender = genderArray.join(',');

    const searchFiltersParams = {};

    if (age) {
      searchFiltersParams.age = age;
    }

    if (gender) {
      searchFiltersParams.gender = gender;
    }

    setSearchParams({ ...searchParams, ...searchFiltersParams });
  };


  const handleCloseModal = () => {
    setOpenModal(prevState => ({ ...prevState, isOpen: false }));
  };

  const handleOpenModal = (id, type) => {
    setOpenModal({ isOpen: true, typeModal: type });
    if (type === 'deleteNotices') setDeletedID(id);
    const desiredObject = notices.data.find(obj => obj._id === id);

    if (desiredObject) {
      setDataLearnMoveModal(desiredObject);
    }
  };

  const handleDeleteNotice = () => {
    dispatch(fetchDeleteNotices(deletedID)).then(() => {
      setDeletedID('');
      handleCloseModal();
      dispatch(fetchNoticesByCategory({ category, search, page }));
    });
  };

  const handleDeleteFavorite = (id, userId) => {
    dispatch(fetchRemoveNoticesFavorite({ id, userId }));
  };

  const handleAddFavorite = (id, userId) => {

    dispatch(fetchAddNoticesFavorite({ id, userId }));
  };


  const onChangePage = (page) => {
    let updatedSearchParams = { ...searchParams };

    if (page) {
      updatedSearchParams = { ...updatedSearchParams, page };
    }
    setSearchParams(updatedSearchParams);
    setCurrent(page);
  };

  useEffect(() => {
    setAdditionalFilters(additionalFilters);

  }, [additionalFilters]);


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

    dispatch(fetchNoticesByCategory({ category, search, page, gender, age }));

    if (!page) {
      setCurrent(1);
    }

  }, [category, searchParams, dispatch]);

  useEffect(() => {
    dispatch(setFilter(initialNotices.additionalFilter));

  }, [category]);

  return (<>
    {notices.data.length === 0 && !isLoading && <p className={styled.noResult}>No result</p>}
    <div className={styled.listWrapper}>
      <ul className={styled.list}>
        {notices?.data.map((items) => {
          return (<NoticeCategoryItem
            key={items._id}
            data={items}
            toggleModal={handleOpenModal}
            deleteNotices={handleOpenModal}
            addFavorite={handleAddFavorite}
            deleteFavorite={handleDeleteFavorite}
            userID={user._id}
            className={category === 'favorite' && !items.favorite.includes(user._id) ? styled.isHidden : ''}
          />);
        })}
      </ul>

      <div className={styled.addPetBtnWrapper}>
        <AddPetButton className={styled.addPetBtnIcon} />
      </div>
    </div>
    <div className={styled.paginationWrapper}>
      <CustomPagination
        currentPage={current}
        totalItemsPage={notices.total}
        onChangePage={onChangePage}
        itemsPerPage={12}
        hideOnSinglePage
      />
    </div>

    {isOpenModal.isOpen && <Modal closeModal={handleCloseModal}>
      {isOpenModal.typeModal === 'LeanMove' &&
        <LearnMoveModal data={dataLearnMoveModal}
                        addFavorite={handleAddFavorite}
                        deleteFavorite={handleDeleteFavorite}
                        userID={user._id}
                        closeModal={handleCloseModal}
        />}
      {isOpenModal.typeModal === 'deleteNotices' &&
        <DeleteNoticesModal title={dataLearnMoveModal.title}
                            onCancel={handleCloseModal}
                            onDelete={handleDeleteNotice}
        />}
    </Modal>}
  </>);

};

export default NoticesCategoriesList;
