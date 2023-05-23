import styled from './AddToFavoriteButton.module.scss';
import React, { useEffect, useState } from 'react';
import { ReactComponent as HeartIcon } from '../../assets/images/icon/heart.svg';
import cn from 'classnames';


const AddToFavoriteButton = ({  deleteFavorite, addFavorite, userID, data, textVisible, onClickBtn, classStyled }) => {

  const [isFavorite, setIsFavorite]= useState(false)

  useEffect(() => {
    if (data && data.favorite.length!==0) {
      if (data.favorite.includes(userID)) {
        setIsFavorite(true)
        return
      }
    }
    setIsFavorite(false)
  }, [data])

  const handleClickFavorite = () => {
    if (onClickBtn) {
      onClickBtn()
    }
    if(isFavorite) {
      deleteFavorite(data._id, userID)
      return
    }
    addFavorite(data._id, userID)
  }

  return (
    <button
      className={cn('addFavorite',styled.buttonOnClick, classStyled, {[styled.isFavorite]:isFavorite})}
      type='button'
      onClick={handleClickFavorite}
    >
      {textVisible ? (isFavorite ? <span className={styled.btnAddText}>Remove</span> : <span className={styled.btnAddText}>Add to </span>) : null}
      <HeartIcon />
    </button>
  )
}

export default AddToFavoriteButton
