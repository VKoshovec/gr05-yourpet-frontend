import { useDispatch } from "react-redux";
import React, { useEffect } from 'react';
import { getNotices, fetchAddFavorite, fetchDeleteFavorite  } from "../../redux/data/operations";

import css from './NoticeCategoryItem.module.scss';

const NoticeCategoryItem = ({id, category, image, location, date, sex}) => {
    const dispatch = useDispatch();

    const isPresentNoticeFavorite = {id, category, image, location, date, sex}

    useEffect(()=> {
        dispatch(getNotices());
    }, [dispatch])

    const addAndDeleteFavorite = () => {
        if(!isPresentNoticeFavorite) {
            dispatch(fetchAddFavorite(id));
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
                onClick={() => addAndDeleteFavorite()}>
                icon
            </button>
            <img className={css.item} src={image} alt="Your pet" width="280" />
            <div className={css.item}>icon
                {location}</div>
            <div className={css.item} >icon
                {date}</div>
            <div className={css.item}>icon
                {sex}</div>
            <h3 className={css.item}>Сute dog looking for a home</h3>
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