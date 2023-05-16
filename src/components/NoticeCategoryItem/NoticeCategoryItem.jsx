import { useDispatch } from "react-redux";
import React, { useEffect } from 'react';
import { getNotices, fetchAddFavorite, fetchDeleteFavorite  } from "../../redux/data/operations";

import { ReactComponent as HeartIcon } from '../../components/assets/images/icon/heart.svg';
import { ReactComponent as Trash } from '../../components/assets/images/icon/trash-2.svg';
import { ReactComponent as Location } from '../../components/assets/images/icon/location-1.svg';
import { ReactComponent as Clock } from '../../components/assets/images/icon/clock.svg';
import { ReactComponent as Female } from '../../components/assets/images/icon/female.svg';
import { ReactComponent as PawIcon } from '../../components/assets/images/icon/pawprint 1.svg';

import styled from './NoticeCategoryItem.module.scss';
import AddPetButton from "components/Notices/AddPetButton/AddPetButton";

const NoticeCategoryItem = ({id, category, image, location, date, sex}) => {
	const dispatch = useDispatch();

    const noticeFavorite = {id, category, image, location, date, sex}

    useEffect(()=> {
        dispatch(getNotices());
    }, [dispatch])

    const addAndDeleteFavorite = () => {
        if(!noticeFavorite) {
            dispatch(fetchAddFavorite(category, image, location, date, sex));
        }

        dispatch(fetchDeleteFavorite(id));
    }

    // const openModal = () => {
    //     dispatch(Modal);
    // }
	
	return (
	<li className={styled.item}>
		<div className={styled.category}>
            <span className={styled.categoryText}>
                {category}
            </span>
            </div>
		<button 
            className={styled.buttonOnClick}
            type="button"
            onClick={() => addAndDeleteFavorite()}
		>
            <HeartIcon />
        </button>
        <button 
            className={styled.buttonDeleteOnClick}
            type="button"
            // onClick={() => addAndDeleteFavorite()}
		>
            <Trash />
        </button>
        <div className={styled.imageWrapper}>
            <img className={styled.image} src={image} alt="Your pet" width="280" />
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
		
		<h2 className={styled.title}>Сute dog looking for a home</h2>
		<button             
            className={styled.buttonOnClickModal}
            type="button"
            // onClickModal={() => openModal()}
		>
            <span className={styled.buttonText}>
                LearnMore
            </span>
            <PawIcon/>
        </button>
        <div className={styled.addPetBtnWrapper}>
        <AddPetButton className={styled.addPetBtnIcon}/>
        </div>
        
		</li>
    );
};

export default NoticeCategoryItem;