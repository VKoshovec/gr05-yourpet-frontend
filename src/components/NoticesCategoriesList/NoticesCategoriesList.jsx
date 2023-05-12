import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from 'react';
import { fetchAllContacts, fetchDeleteContact } from "../../redux/contacts/contacts-operations";
import { getFilteredContacts } from "../../redux/selectors";

import NoticeCategoryItem from '../NoticeCategoryItem';
import css from './NoticesCategorieslist.module.css';

const NoticesCategoryList = ({noticies}) => {
    
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchAllContacts());
    }, [dispatch])

    const handleDeleteContact = (id) => {
        dispatch(fetchDeleteContact(id));
    }

    const contactList = useSelector(getFilteredContacts);

    return (
        <ul className={css.list}>
            {noticies.map(({ id, category, location, date, sex }) => (
                <NoticeCategoryItem
                    key={id} 
                    category={category}
                    location={location} 
                    date={date}
                    sex={sex} 
                />
            ))}
        </ul>
    );
};

NoticesCategoryList.defaultProps = {
    items: []
}

export default NoticesCategoryList;
