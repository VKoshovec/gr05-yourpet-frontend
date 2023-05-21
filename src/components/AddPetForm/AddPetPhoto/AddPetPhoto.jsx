import css from '../AddPetForm/addPetForm.module.scss';
import {ReactComponent as Plus} from '../../assets/images/icon/plus.svg';
import { Button, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { initialFormType } from '../AddPetFrame/AddPetFrame';

import React, {  useState } from 'react';

const AddPetPhoto = ({ formtype, getPhoto, initielFields, errorField, errorMessage }) => {

    let formData = new FormData();

    const [fileList, setFileList] = useState(
      initielFields["saveList"] ? initielFields["saveList"] : []
    );

    const onChange = ({ file, fileList: newFileList, event }) => {

        formData.append("pet", newFileList[0].originFileObj);
        setFileList(newFileList);
        getPhoto(formData);
       
    };

    return (
      <div>
      <div className={ errorField ==='image' ? css.errorSex : "" }>
        <div 
        className={ 
        formtype === initialFormType[1] ? css.addPetImgLabel :
        formtype === initialFormType[2] ? css.addPetImgLabel : 
        formtype === initialFormType[3] ? css.addPetImgLabel :
        css.addPetImgLabelBig }>
        <span>Add photo</span>

        <ImgCrop rotationSlider >
            <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={ onChange }
            maxCount={ 1 }
            className={ css.addPetImgUpload }
            >
                       { fileList.length === 0 && 
                       <Button className={ css.addPetImgButton } >
                           <Plus/>
                       </Button>}
            </Upload>
        </ImgCrop>
       </div>
      </div>
      {errorField === 'image' && <p style={{ color:'red', marginLeft: '15px', marginTop: '0px', marginBottom: '5px', fontSize: '12px' }}>
                { errorMessage }
      </p>}
      </div>
    )
};

export default AddPetPhoto;