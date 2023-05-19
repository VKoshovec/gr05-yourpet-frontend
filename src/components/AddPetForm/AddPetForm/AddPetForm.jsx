import { Input, Radio, Button, Form } from 'antd';
import { theme } from 'antd';
import { initialFormType } from '../AddPetFrame/AddPetFrame';
import React, { useEffect } from 'react';
import {ReactComponent as Male} from '../../assets/images/icon/male.svg';
import {ReactComponent as Female} from '../../assets/images/icon/female-red.svg';
import {ReactComponent as PlusBig} from '../../assets/images/icon/plus-big.svg';
import {ReactComponent as Plus} from '../../assets/images/icon/plus.svg';
import AddPetPhoto from '../AddPetPhoto/AddPetPhoto';

import css from '../AddPetForm/addPetForm.module.scss'
import { useState } from 'react';

const AddPetForm = ({stepnumber, formtype, getformFields, initialFields}) => {
   
    const [title, setTitle] = useState();
    const [name, setName] = useState();
    const [dBirth, setDBirth] = useState();
    const [breed, setBreed] = useState();
    const [comments, setComments] = useState();
    const [sex, setSex] = useState();
    const [photo, setPhoto] = useState();
    const [price, setPrice] = useState();
    const [location, setLocation] = useState();
    const [saveList, setSavelist] = useState();

    useEffect (()=>{
     if (initialFields) {
      setTitle(initialFields["title"]);
      setName(initialFields["name"]);
      setDBirth(initialFields["dBirth"]);
      setBreed(initialFields["breed"]);
      setComments(initialFields["comments"]);
      setSex(initialFields["sex"]);
      setPhoto(initialFields["photo"]);
      setPrice(initialFields["price"]);
      setLocation(initialFields["location"]);
    }
    },[])

     const getGield = (e) => {
       const inputValue = e.target.value;
       switch (e.target.name) {
        case "title":
          setTitle(inputValue)
          getformFields({ title: inputValue, name, dBirth, breed, comments, price, location, sex, photo, saveList });
          break;
        case "name":
          setName(inputValue)
          getformFields({ title, name: inputValue, dBirth, breed, comments, price, location, sex, photo, saveList});
          break;
        case "dBirth":
          setDBirth(inputValue)
          getformFields({ title, name, dBirth: inputValue, breed, comments, price, location, sex, photo, saveList});
          break;
        case "breed":
          setBreed(inputValue)
          getformFields({ title, name, dBirth, breed: inputValue, price, location, comments, sex, photo, saveList});
          break;  
        case "comments":
          setComments(inputValue)
          getformFields({ title, name, dBirth, breed, price, location, comments: inputValue, sex, photo, saveList});
          break;  
        case "price":
          setPrice(inputValue)
          getformFields({ title, name, dBirth, breed, comments, price:inputValue, location, sex, photo, saveList});
          break;   
        case "location":
          setLocation(inputValue)
          getformFields({ title, name, dBirth, breed, comments, price, location:inputValue, sex, photo, saveList});
          break;   
        case "sex":
          setSex(inputValue)
          getformFields({ title, name, dBirth, breed, comments, price, location, sex: inputValue, photo, saveList});
          break;    
        default:
          break;
       }
    };

    const getPhoto = (photo) => {
      setPhoto(photo[0].name);
      setSavelist(photo);
      getformFields({ title, name, dBirth, breed, comments, price, location, sex, photo: photo[0].name, saveList: photo});
    };

    
    return stepnumber === 2 ? (
        <div className={ css.addPetContainer }>

            {formtype !== initialFormType[0] &&
             <label className={ css.addPetInput__Label }>Title of add
              <Input 
              required
              type='text'
              name="title" 
              value={ title }
              placeholder='Title of add' 
              className={ css.addPetInput }
              onInput={ getGield }/>
            </label>}


            <label className={ css.addPetInput__Label }>Name pet
            <Form.Item 
            noStyle 
            initialValue={ initialFields && initialFields["name"] } 
            rules={[
             {
               required: true,
               message: 'Please input your username motherfacker',
             },
             ]}>

              <Input 
              required
              type='text'
              name='name' 
              value={ name }
              placeholder='Type name pet' 
              className={ css.addPetInput }
              onInput={ getGield }/>
            </Form.Item>  
            </label>

            <label className={ css.addPetInput__Label }>Date of birth
              <Input 
              required
              type='date'
              name='dBirth' 
              value={ dBirth }
              placeholder='Type date of birth' 
              className={ css.addPetInput }
              onInput={ getGield }/>
            </label>

            <label className={ css.addPetInput__Label }>Breed
              <Input 
              required
              type='text'
              name='breed' 
              value={ breed }
              placeholder='Type breed' 
              className={ css.addPetInput }
              onInput={ getGield }/>
            </label>
        </div>
    ) : stepnumber === 3 &&
    (
    <div className={ css.addPetContainer }>
      <div className={ formtype === initialFormType[1] ? css.mainContainer : formtype === initialFormType[2] ? css.mainContainer : ""}>
        <div className={ css.rightContainer }>

        {formtype !== initialFormType[0] && 
         <label className={ css.addPetInput__Label }>Sex
          <Radio.Group 
            required
            name='sex'
            value={ sex }
            onChange={ getGield }
            className={ css.addPetSexBox }>
              
              <Radio.Button
               value={ "female" }
               style={{ borderWidth: 0}}
               className={ css.addPetSex }>
                <Female className={ css.ddPetSexIcon } />
                 <span className={ css.sexCaption }>Female</span>
               </Radio.Button>

               <Radio.Button
               value={ "male" }
               style={{ borderWidth: 0}}
               className={ css.addPetSex }>
                <Male/>
                 <span className={ css.sexCaption }>Male</span>
               </Radio.Button>

            </Radio.Group> 
          </label>}


          <AddPetPhoto formtype={ formtype } getPhoto = { getPhoto } initielFields={ initialFields }/>


          </div>
          <div className={ css.leftContainer }>

          {formtype !== initialFormType[0] && 
          <label className={ css.addPetInput__Label }>Location
                    <Input
                    required
                    name='location' 
                    type="text"
                    value={ location }
                    placeholder='Type location' 
                    className={ css.addPetInputText }
                    onInput={ getGield }/>
          </label>}

         { formtype === initialFormType[1] && 
         <label className={ css.addPetInput__Label }>Price
                    <Input
                    required
                    name='price' 
                    type="number"
                    value={ price }
                    placeholder='Type price' 
                    className={ css.addPetInputText }
                    onInput={ getGield }/>
          </label>}

         

          <label className={ css.addPetInput__Label }>Comments
              <Input.TextArea 
              required
              name='comments' 
              type="text"
              style={{ resize: "none" }}
              value={ comments }
              placeholder='Type comments' 
              className={ css.addPetInputTextArea }
              onInput={ getGield }/>
          </label>
        </div>   
      </div> 
    </div>
    );
};

export default AddPetForm;