import { useDispatch } from "react-redux";
import React, { useEffect } from 'react';
import { getNoticesCategory } from "../../redux/data/operations";

import NoticeCategoryItem from '../NoticeCategoryItem';
import css from './NoticesCategorieslist.module.scss';

const NoticesCategoryList = ({noticies, onClick, onClickModal}) => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getNoticesCategory());
    }, [dispatch])

    return (
        <ul className={css.list}>
            {noticies.map(({ id, category, image, location, date, sex}) => (
                <NoticeCategoryItem
                    key={id} 
                    category={category}
                    image={image}
                    location={location} 
                    date={date}
                    sex={sex} 
                    onClick={onClick}
                    onClickModal={onClickModal}
                />
            ))}
        </ul>
    );
};

NoticesCategoryList.defaultProps = {
    items: []
}

export default NoticesCategoryList;
