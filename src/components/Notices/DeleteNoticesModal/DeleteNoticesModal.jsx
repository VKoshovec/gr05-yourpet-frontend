import React from 'react';
import CustomButton from '../../CustomButton/CustomButton';

const DeleteNoticesModal = ({data, onCancel}) => {


    return(<><h4>Delete Notices Modal</h4>
        <CustomButton onClick={onCancel} type={'outlined'}>Cancel</CustomButton>
        <CustomButton onClick={()=>console.log('-----lick Ok-------')} type={'flooded'}>Yes</CustomButton>

      </>



    )

}


export default DeleteNoticesModal;
