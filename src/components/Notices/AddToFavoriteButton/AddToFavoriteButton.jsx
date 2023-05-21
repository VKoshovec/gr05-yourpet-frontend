import styled from './AddToFavoriteButton.module.scss';
import React, { useEffect, useState } from 'react';
import { ReactComponent as HeartIcon } from '../../assets/images/icon/heart.svg';
import cn from 'classnames';


const AddToFavoriteButton = ({  deleteFavorite, addFavorite, userID, data }) => {

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
    if(isFavorite) {
      deleteFavorite(data._id, userID)
      return
    }
    addFavorite(data._id, userID)

  }



  return (
    <button
      className={cn(styled.buttonOnClick, {[styled.isFavorite]:isFavorite})}
      type='button'
      onClick={handleClickFavorite}
    >
      <HeartIcon />
    </button>
  )
}

export default AddToFavoriteButton
