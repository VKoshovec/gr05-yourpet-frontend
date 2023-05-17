import css from '../AddPetForm/addPetForm.module.scss';
import {ReactComponent as PlusBig} from '../../assets/images/icon/plus-big.svg';
import {ReactComponent as Plus} from '../../assets/images/icon/plus.svg';
import { Button, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { initialFormType } from '../AddPetFrame/AddPetFrame';

import React, { useState } from 'react';


const AddPetPhoto = ({ formtype, getPhoto }) => {

    const [fileList, setFileList] = useState([]);
    const [imgSrc, setImgSrc] = useState();

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        getPhoto(newFileList[0].name);
    };

    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
          src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
      };

    return (
        <div 
        className={ formtype === initialFormType[1] ? css.addPetImgLabel :
        formtype === initialFormType[2] ? css.addPetImgLabel :
        css.addPetImgLabelBig }>
        <span>Add photo</span>

        <ImgCrop rotationSlider>
            <Upload
            action={ () => {  }}
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
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
    )
};

export default AddPetPhoto;