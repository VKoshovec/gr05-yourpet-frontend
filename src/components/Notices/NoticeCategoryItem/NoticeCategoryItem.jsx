import React from 'react';

import { ReactComponent as HeartIcon } from '../../assets/images/icon/heart.svg';
import { ReactComponent as Trash } from '../../assets/images/icon/trash-2.svg';
import { ReactComponent as Location } from '../../assets/images/icon/location-1.svg';
import { ReactComponent as Clock } from '../../assets/images/icon/clock.svg';
import { ReactComponent as Female } from '../../assets/images/icon/female.svg';
import { ReactComponent as PawIcon } from '../../assets/images/icon/pawprint 1.svg';


import styled from './NoticeCategoryItem.module.scss';
import AddPetButton from 'components/Notices/AddPetButton/AddPetButton';


const NoticeCategoryItem = ({ data, toggleModal, deleteNotices }) => {

  const { _id, category, image, location, date, sex, title, owner } = data;

  // console.log(id===owner);

  return (<li className={styled.item}>
    <div className={styled.category}>
            <span className={styled.categoryText}>
                {category}
            </span>
    </div>
    <button
      className={styled.buttonOnClick}
      type='button'
      // onClick={addAndDeleteFavorite}
    >
      <HeartIcon />
    </button>
    {/*{_id===owner &&  <button*/}
    {/*  className={styled.buttonDeleteOnClick}*/}
    {/*  type="button"*/}
    {/*  onClick={() => deleteNotices(null, 'deleteNotices')}*/}
    {/*>*/}
    {/*  <Trash />*/}
    {/*</button>}*/}
    <button
      className={styled.buttonDeleteOnClick}
      type='button'
      onClick={() => deleteNotices(null, 'deleteNotices')}
    >
      <Trash />
    </button>
    <div className={styled.imageWrapper}>
      <img className={styled.image} src={image} alt='Your pet' width='280' />
    </div>
    <div className={styled.infoWrapper}>
      <div className={styled.info}>
        <Location />
        <span className={styled.infoText}>
                {location}
            </span>
      </div>
      <div className={styled.info}>
        <Clock />
        <span className={styled.infoText}>
                {date}
            </span>
      </div>
      <div className={styled.info}>
        <Female />
        <span className={styled.infoText}>
                {sex}
            </span>
      </div>

    </div>

    <h2 className={styled.title}>{title}</h2>
    <button
      className={styled.buttonOnClickModal}
      type='button'
      onClick={() => toggleModal(_id, 'LeanMove')}
    >
            <span className={styled.buttonText}>
                LearnMore
            </span>
      <PawIcon />
    </button>
    <div className={styled.addPetBtnWrapper}>
      <AddPetButton className={styled.addPetBtnIcon} />
    </div>
  </li>);
};

export default NoticeCategoryItem;
