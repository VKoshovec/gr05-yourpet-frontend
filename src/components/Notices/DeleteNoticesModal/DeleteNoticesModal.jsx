import React from 'react';
import { ReactComponent as HeartIcon } from '../../assets/images/icon/heart.svg';

import styled from './DeleteNoticesModal.module.scss';
import CustomButton from '../../CustomButton/CustomButton';
import { logDOM } from '@testing-library/react';

const DeleteNoticesModal = ({data, onCancel}) => {

  // console.log(data);
  // const { id, category, image,  title, name, birthday, breed, location, sex, email, phone,
  //   comments, addAndDeleteFavorite } = data;

    return(<><h4>Delete Notices Modal</h4>
        <CustomButton onClick={onCancel} type={'outlined'}>Cancel</CustomButton>
        <CustomButton onClick={()=>console.log('-----lick Ok-------')} type={'flooded'}>Yes</CustomButton>

      </>



    )

}


export default DeleteNoticesModal;
