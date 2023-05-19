import React from 'react';
import { ReactComponent as HeartIcon } from '../../components/assets/images/icon/heart.svg';

import styled from './ModalNotice.module.scss';

const ModalNotice = ({id, category, image,  title, name, dateOfBirth, breed, location, sex, email, phone,
        comments, addAndDeleteFavorite}) => {
    return(
        <div className={styled.modalWrapper}>
            <div className={styled.category}>
                <span className={styled.categoryText}>
                    {category}
                </span>
            </div>
            <div className={styled.imageWrapper}>
                <img className={styled.image} src={image} alt="Your pet" width="240" />
            </div>
            <h2 className={styled.title}>{title}</h2>
            <div className={styled.infoWrapper}>
                <div className={styled.info}>
                    <span className={styled.infoText}>Name:</span>
                    {name}
                </div>
                <div className={styled.info}>
                    <span className={styled.infoText}>Birthday:</span>
                    {dateOfBirth}
                </div>
                <div className={styled.info}>
                    <span className={styled.infoText}>Breed:</span>
                    {breed}
                </div>
                <div className={styled.info}>
                    <span className={styled.infoText}>Place:</span>
                    {location}
                </div>
                <div className={styled.info}>
                    <span className={styled.infoText}>The sex:</span>
                    {sex}
                </div>
                <div className={styled.info}>
                    <span className={styled.infoText}>Email:</span>
                    {email}
                </div>
                <div className={styled.info}>
                    <span className={styled.infoText}>Phone:</span>
                    {phone}
                </div>
            </div>
            <div className={styled.comments}>
                <span className={styled.commentsText}>Comments:</span> 
                {comments}
            </div>
            <button
                className={styled.btnContact}
                type="button"
                // onClick={callToContact}
            >
                <span className={styled.btnContactText}>
                Contact
                </span>
            </button>
            <button
                className={styled.btnAdd}
                type="button"
                onClick={addAndDeleteFavorite}
            >
                <span className={styled.btnAddText}>
                Add to
                </span>
                <HeartIcon />
            </button>
            
        </div>
    )

}


export default ModalNotice;