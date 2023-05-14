import { useDispatch } from "react-redux";
import React, { useEffect } from 'react';
import { getNotices, fetchAddFavorite, fetchDeleteFavorite  } from "../../redux/data/operations";

import css from './NoticeCategoryItem.module.scss';

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
	<li className={css.item}>
		<div className={css.item}>{category}</div>
		<button 
            className={css.item}
            type="button"
            onClick={() => addAndDeleteFavorite()}
		>
            icon
        </button>
        <img className={css.item} src={image} alt="Your pet" width="280" />
		<div className={css.item}>icon
		{location}</div>
		<div className={css.item} >icon
		{date}</div>
		<div className={css.item}>icon
		{sex}</div>
		<h2 className={css.item}>Сute dog looking for a home</h2>
		<button             
            className={css.button}
            type="button"
            // onClickModal={() => openModal()}
		>
            LearnMore</button>
		</li>
	);
};

export default NoticeCategoryItem;