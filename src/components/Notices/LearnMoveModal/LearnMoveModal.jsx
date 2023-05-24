import React from 'react';
import cn from 'classnames';
import styled from './LearnMoveModal.module.scss';
import AddToFavoriteButton from '../AddToFavoriteButton/AddToFavoriteButton';

const LearnMoveModal = ({ data, closeModal, userID, addFavorite, deleteFavorite, }) => {

  const {
    _id,
    category,
    image,
    title,
    name,
    birthday,
    breed,
    location,
    sex = '',
    email,
    phone,
    comments,
  } = data;



  return (
    <div className={styled.modalWrapper}>
      <div className={styled.aboutWrapper}>
        <div className={styled.imageBox}>
          <div className={styled.category}>
                    <span className={styled.categoryText}>
                        {category}
                    </span>
          </div>
          <div className={styled.imageWrapper}>
            <img className={styled.image} src={image} alt='Your pet' width='240' />
          </div>
        </div>

        <div className={styled.aboutBox}>
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
              <li className={cn(styled.infoContent, styled.infoContentLink)}>
                <a href='mailto:{email}' className={cn('sc-bFqpvU bFAucp', styled.infoContentLink)}>
                  {email}
                </a>
              </li>
              <li className={cn(styled.infoContent, styled.infoContentLink)}>
                <a href='tel:{phone}' className={cn('sc-bFqpvU bFAucp', styled.infoContentLink)} >
                  {phone}
                </a>
              </li>
              {/* <Link to={"/user"} className={styled.btnLink} onClick={handleClickBtn}>
                        <li className={cn(styled.infoContent, styled.infoContentLink)}>{email}</li>
                    </Link>
                    <Link to={"/user"} className={styled.btnLink} onClick={handleClickBtn}>
                        <li className={cn(styled.infoContent, styled.infoContentLink)}>{phone}</li>
                    </Link> */}
            </ul>
          </div>
        </div>
      </div>

      <div className={styled.comments}>
                <span className={styled.commentsText}>Comments: {comments}
                </span>
      </div>
      <div className={styled.btnWrapper}>
      <a href='tel:{phone}' className={cn('sc-bFqpvU bFAucp', styled.btnContactLink)} >
        <button className={cn(styled.btnContact, styled.btnContactLink)}
          // className={styled.btnContact}
          type='button'
        >
          
          <span className={styled.btnContactText}>
                Contact
                </span>
        </button>
        <AddToFavoriteButton deleteFavorite={deleteFavorite}
                             addFavorite={addFavorite}
                             userID={userID}
                             data={data}
                             onClickBtn={closeModal}
                             classStyled={styled.btnAdd}
                             textVisible
        />
      </div>
    </div>
  );

};


export default LearnMoveModal;
