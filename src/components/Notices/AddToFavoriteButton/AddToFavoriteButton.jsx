import styled from './AddToFavoriteButton.module.scss';
import React from 'react';
import { ReactComponent as HeartIcon } from '../../assets/images/icon/heart.svg';
import cn from 'classnames';


const AddToFavoriteButton = ({  handleClick, isFavorite }) => {

  return (
    <button
      className={cn(styled.buttonOnClick, styled.isFavorite, {[styled.isFavorite]:isFavorite})}
      type='button'
      onClick={handleClick}
    >
      <HeartIcon />
    </button>
  )
}

export default AddToFavoriteButton
