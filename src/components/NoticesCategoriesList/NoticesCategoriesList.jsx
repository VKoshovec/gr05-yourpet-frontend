import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from 'react';
import { getNotices } from "../../redux/data/operations";
// import { getFilteredContacts } from "../../redux/selectors";

import NoticeCategoryItem from '../NoticeCategoryItem';
import css from './NoticesCategorieslist.module.css';

const NoticesCategoryList = ({noticies, onClick, onClickModal}) => {
    
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getNotices());
    }, [dispatch])

    // const handleDeleteContact = (id) => {
    //     dispatch(fetchDeleteContact(id));
    // }

    // const contactList = useSelector(getFilteredContacts);

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
