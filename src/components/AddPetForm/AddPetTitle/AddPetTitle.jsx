import css from '../AddPetTitle/AddPetTitle.module.scss';
import { useState,  useEffect } from 'react';

const AddPetTitle = ({ formtype, initialFormType }) => {

   return ( 
        formtype === initialFormType[0] ? 
        <h1 className={ css.title }>Add your pet</h1> :
        formtype === initialFormType[1] ? 
        <h1 className={ css.title }>Add pet for sale</h1> : 
        formtype === initialFormType[2] ? 
        <h1 className={ css.title }>Add lost pet</h1> : 
        formtype === initialFormType[3] ?
        <h1 className={ css.title }>Add pet in good hands</h1> : 
        <h1 className={ css.title }>Add pet</h1>
   )
};

export default AddPetTitle;