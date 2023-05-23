import React from 'react';
import { getCurrentAge } from 'helpers/getCurrentAge';
import { ReactComponent as Trash } from '../../assets/images/icon/trash-2.svg';
import { ReactComponent as Location } from '../../assets/images/icon/location-1.svg';
import { ReactComponent as Clock } from '../../assets/images/icon/clock.svg';
import { ReactComponent as Female } from '../../assets/images/icon/female.svg';
import { ReactComponent as PawIcon } from '../../assets/images/icon/pawprint 1.svg';

import styled from './NoticeCategoryItem.module.scss';
// import AddPetButton from 'components/Notices/AddPetButton/AddPetButton';
import AddToFavoriteButton from '../AddToFavoriteButton/AddToFavoriteButton';
import cn from 'classnames';


const NoticeCategoryItem = ({ data, toggleModal, deleteNotices, userID, addFavorite, deleteFavorite, className }) => {
  const { _id, category, image, location, date, sex, title, owner, favorite, birthday } = data;


  return (<li className={cn(styled.item, className)}>
    <div className={styled.category}>
            <span className={styled.categoryText}>
                {category}
            </span>
    </div>
    <AddToFavoriteButton deleteFavorite={deleteFavorite}
                         addFavorite={addFavorite} userID={userID} data={data} />
    {userID === owner && <button
      className={styled.buttonDeleteOnClick}
      type='button'
      onClick={() => deleteNotices(_id, 'deleteNotices')}
    >
      <Trash />
    </button>}
    <div className={styled.imageWrapper}>
      <img className={styled.image}
           src={image}
           alt='Your pet'
           width='280'
      />
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
                {getCurrentAge(birthday)}
            </span>
      </div>
      <div className={styled.info}>
        <Female />
        <span className={styled.infoText}>
                {sex}
            </span>
      </div>

    </div>

    <div className={styled.titleWrapper}>
      <div className={styled.titleBox}>
        <h2 className={styled.title}>{title}</h2>
      </div>

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
    </div>
    {/* <div className={styled.addPetBtnWrapper}>
      <AddPetButton className={styled.addPetBtnIcon} />
    </div> */}
  </li>);
};

export default NoticeCategoryItem;
