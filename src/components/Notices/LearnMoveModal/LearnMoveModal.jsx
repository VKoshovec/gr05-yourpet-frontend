import React from 'react';
import { ReactComponent as HeartIcon } from '../../assets/images/icon/heart.svg';
import cn from 'classnames';
import styled from './LearnMoveModal.module.scss';

const LearnMoveModal = ({data}) => {

    console.log(data);
    const { id, category, image,  title, name, birthday, breed, location, sex, email, phone,
    comments, addAndDeleteFavorite } = data;

    return(
        <div className={styled.modalWrapper}>
            <div className={styled.imageBox}>
            <div className={styled.category}>
                <span className={styled.categoryText}>
                    {category}
                </span>
            </div>
            <div className={styled.aboutBox}>
            <div className={styled.imageWrapper}>
                <img className={styled.image} src={image} alt="Your pet" width="240" />
            </div>
            </div>
            <div className={styled.aboutWrapper}>
            <div className={styled.titleBox}>
                <h2 className={styled.title}>{title}</h2>
            </div>
            <div className={styled.infoWrapper}>
                <ul className={styled.info}>
                    <li className={styled.infoText}>Name:</li>
                    <li className={styled.infoText}>Birthday:</li>
                    <li className={styled.infoText}>Breed:</li>
                    <li className={styled.infoText}>Place:</li>
                    <li className={styled.infoText}>The sex:</li>
                    <li className={styled.infoText}>Email:</li>
                    <li className={styled.infoText}>Phone:</li>
                    
                </ul>
                <ul className={styled.info}>
                    <li className={styled.infoContent}>{name}</li>
                    <li className={styled.infoContent}>{birthday}</li>
                    <li className={styled.infoContent}>{breed}</li>
                    <li className={styled.infoContent}>{location}</li>
                    <li className={styled.infoContent}>{sex}</li>
                    <li className={cn(styled.infoContent, styled.infoContentLink)}>{email}</li>
                    <li className={cn(styled.infoContent, styled.infoContentLink)}>{phone}</li>
                </ul>
                    {/* <div className={styled.info}>
                    <span className={styled.infoText}>Name:</span>
                    <span className={styled.infoContent}>
                        {name}
                    </span>
                </div>
                <div className={styled.info}>
                    <span className={styled.infoText}>Birthday:</span>
                    <span className={styled.infoContent}>
                        {birthday}
                    </span>
                </div>
                <div className={styled.info}>
                    <span className={styled.infoText}>Breed:</span>
                    <span className={styled.infoContent}>
                        {breed}
                    </span>
                </div>
                <div className={styled.info}>
                    <span className={styled.infoText}>Place:</span>
                    <span className={styled.infoContent}>
                        {location}
                    </span>
                </div>
                <div className={styled.info}>
                    <span className={styled.infoText}>The sex:</span>
                    <span className={styled.infoContent}>
                        {sex}
                    </span>
                </div>
                <div className={styled.info}>
                    <span className={styled.infoText}>Email:</span>
                    <span className={styled.infoContent}>
                    {email}
                    </span>
                </div>
                <div className={styled.info}>
                    <span className={styled.infoText}>Phone:</span>
                    <span className={styled.infoContent}>
                        {phone}
                    </span>
                </div> */}
            </div>
            </div>
            </div>
            
            
            <div className={styled.comments}>
                <span className={styled.commentsText}>Comments: {comments}
                </span>
            </div>
            <div className={styled.btnWrapper}>
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

        </div>
    )

}


export default LearnMoveModal;
