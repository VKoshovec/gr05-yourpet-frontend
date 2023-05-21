import React from 'react';
import CustomButton from '../../CustomButton/CustomButton';
import { ReactComponent as Trash } from '../../assets/images/icon/trash-2.svg';
import styled from './DeleteNoticesModal.module.scss';

const DeleteNoticesModal = ({data, onCancel}) => {

  // const { id, title } = data;

    return(<>
      <div className={styled.modalWrapper}>
        <h2 className={styled.title}>Delete adverstiment?</h2>
        <div>
          <span className={styled.text}>
          Are you sure you want to delete  “<span className={styled.textBold}>{/* {title} */}</span>”? 
          You can`t undo this action.
          </span>
        </div>
        
        <div className={styled.btnWrapper}>
          <CustomButton className={styled.btnCancel} onClick={onCancel} type={'outlined'}>Cancel</CustomButton>
          <CustomButton className={styled.btnConfirm} onClick={()=>console.log('-----lick Ok-------')} type={'flooded'}>Yes<Trash /></CustomButton>
        </div>
        
      </div>

      </>



    )

}


export default DeleteNoticesModal;
