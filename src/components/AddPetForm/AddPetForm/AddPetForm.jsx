import { Input, Radio, Form } from 'antd';
import { initialFormType } from '../AddPetFrame/AddPetFrame';
import React, { useEffect } from 'react';
import {ReactComponent as Male} from '../../assets/images/icon/male.svg';
import {ReactComponent as Female} from '../../assets/images/icon/female-red.svg';
import AddPetPhoto from '../AddPetPhoto/AddPetPhoto';

import css from '../AddPetForm/addPetForm.module.scss'
import { useState } from 'react';

const AddPetForm = ({stepnumber, formtype, getformFields, initialFields, errorField, errorMessage }) => {
   
    const [title, setTitle] = useState();
    const [name, setName] = useState();
    const [birthday, setDBirth] = useState();
    const [breed, setBreed] = useState();
    const [comments, setComments] = useState();
    const [sex, setSex] = useState();
    const [image, setImage] = useState();
    const [price, setPrice] = useState();
    const [location, setLocation] = useState();
    const [saveList, setSavelist] = useState();

    useEffect (()=>{
     if (initialFields) {
      setTitle(initialFields["title"]);
      setName(initialFields["name"]);
      setDBirth(initialFields["birthday"]);
      setBreed(initialFields["breed"]);
      setComments(initialFields["comments"]);
      setSex(initialFields["sex"]);
      setImage(initialFields["image"]);
      setPrice(initialFields["price"]);
      setLocation(initialFields["location"]);
    }
    },[])

     const getGield = (e) => {
       const inputValue = e.target.value;
       switch (e.target.name) {
        case "title":
          setTitle(inputValue)
          getformFields({ title: inputValue, name, birthday, breed, comments, price, location, sex, image, saveList });
          errorField = ''
          break;
        case "name":
          setName(inputValue)
          getformFields({ title, name: inputValue, birthday, breed, comments, price, location, sex, image, saveList});
          errorField = ''
          break;
        case "birthday":
          setDBirth(inputValue)
          getformFields({ title, name, birthday: inputValue, breed, comments, price, location, sex, image, saveList});
          errorField = ''
          break;
        case "breed":
          setBreed(inputValue)
          getformFields({ title, name, birthday, breed: inputValue, price, location, comments, sex, image, saveList});
          errorField = ''
          break;  
        case "comments":
          setComments(inputValue)
          getformFields({ title, name, birthday, breed, price, location, comments: inputValue, sex, image, saveList});
          errorField = ''
          break;  
        case "price":
          setPrice(inputValue)
          getformFields({ title, name, birthday, breed, comments, price:inputValue, location, sex, image, saveList});
          errorField = ''
          break;   
        case "location":
          setLocation(inputValue)
          getformFields({ title, name, birthday, breed, comments, price, location:inputValue, sex, image, saveList});
          errorField = ''
          break;   
        case "sex":
          setSex(inputValue)
          getformFields({ title, name, birthday, breed, comments, price, location, sex: inputValue, image, saveList});
          break;    
        default:
          break;
       }
    };

    const getPhoto = (photo, data) => {
      setImage(photo);
      setSavelist(data);
      getformFields({ title, name, birthday, breed, comments, price, location, sex, image: photo, saveList: data});
    };
    
    return stepnumber === 2 ? (
        <div className={ css.addPetContainer }>

            {formtype !== initialFormType[0] &&
             <label className={ css.addPetInput__Label }>Title of add
              <Input 
              status={ errorField === 'title' && "error" }
              required
              type='text'
              name="title" 
              value={ title }
              placeholder='Title of add' 
              className={ css.addPetInput }
              onInput={ getGield }/>

              {errorField === 'title' && <p style={{ color:'red', marginLeft: '15px', marginTop: '-10px', fontSize: '12px' }}>
                { errorMessage }
              </p>}

            </label>}


            <label className={ css.addPetInput__Label }>Name pet
            <Form.Item 
            noStyle 
            initialValue={ initialFields && initialFields["name"] } 
            >

              <Input 
              status={ errorField === 'name' && "error" }
              required
              type='text'
              name='name' 
              value={ name }
              placeholder='Type name pet' 
              className={ css.addPetInput }
              onInput={ getGield }/>

              {errorField === 'name' && <p style={{ color:'red', marginLeft: '15px', marginTop: '-10px', fontSize: '12px' }}>
                { errorMessage }
              </p>}

            </Form.Item>  
            </label>

            <label className={ css.addPetInput__Label }>Date of birth
              <Input 
              status={ errorField === 'birthday' && "error" }
              required
              type='date'
              name='birthday' 
              value={ birthday }
              placeholder='Type date of birth' 
              className={ css.addPetInput }
              onInput={ getGield }/>

              {errorField === 'birthday' && <p style={{ color:'red', marginLeft: '15px', marginTop: '-10px', fontSize: '12px' }}>
                { errorMessage }
              </p>}

            </label>

            <label className={ css.addPetInput__Label }>Breed
              <Input 
              status={ errorField === 'breed' && "error" }
              required
              type='text'
              name='breed' 
              value={ breed }
              placeholder='Type breed' 
              className={ css.addPetInput }
              onInput={ getGield }/>

              {errorField === 'breed' && <p style={{ color:'red', marginLeft: '15px', marginTop: '-10px', fontSize: '12px' }}>
                { errorMessage }
              </p>}

            </label>
        </div>
    ) : stepnumber === 3 &&
    (
    <div className={ css.addPetContainer }>
      <div className={ 
         formtype === initialFormType[1] ? css.mainContainer :
         formtype === initialFormType[2] ? css.mainContainer : 
         formtype === initialFormType[3] ? css.mainContainer : 
        ""}>
        <div className={ css.rightContainer }>

        {formtype !== initialFormType[0] && 
        <div>
         <div className={ errorField ==='sex' ? css.errorSex : ""}>
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
          </label>
         </div>
         {errorField === 'sex' && <p style={{ color:'red', marginLeft: '15px', marginTop: '0px', marginBottom: '5px', fontSize: '12px' }}>
                { errorMessage }
          </p>}
         </div>
        }


          <AddPetPhoto 
          formtype={ formtype }
          getPhoto = { getPhoto }
          initielFields={ initialFields }
          errorField = { errorField }
          errorMessage={ errorMessage }
          />


          </div>
          <div className={ css.leftContainer }>

          {formtype !== initialFormType[0] && 
          <label className={ css.addPetInput__Label }>Location
                    <Input
                    status={ errorField === 'location' && "error" }
                    required
                    name='location' 
                    type="text"
                    value={ location }
                    placeholder='Type location' 
                    className={ css.addPetInputText }
                    onInput={ getGield }/>

              {errorField === 'location' && <p style={{ color:'red', marginLeft: '15px', marginTop: '-10px', fontSize: '12px' }}>
                { errorMessage }
              </p>}
          </label>}

         {formtype === initialFormType[1] && 
         <label className={ css.addPetInput__Label }>Price
                    <Input
                    status={ errorField === 'price' && "error" }
                    required
                    name='price' 
                    type="number"
                    value={ price }
                    placeholder='Type price' 
                    className={ css.addPetInputText }
                    onInput={ getGield }/>

              {errorField === 'price' && <p style={{ color:'red', marginLeft: '15px', marginTop: '-10px', fontSize: '12px' }}>
                { errorMessage }
              </p>}

          </label>}

         

          <label className={ css.addPetInput__Label }>Comments
              <Input.TextArea 
              status={ errorField === 'comments' && "error" }
              required
              name='comments' 
              type="text"
              style={{ resize: "none" }}
              value={ comments }
              placeholder='Type comments' 
              className={ formtype === initialFormType[2] ? 
                css.addPetInputTextAreaBig :
                 formtype === initialFormType[3] ? 
                 css.addPetInputTextAreaBig : css.addPetInputTextArea}
              onInput={ getGield }/>

              {errorField === 'comments' && <p style={{ color:'red', marginLeft: '15px', marginTop: '-5px', fontSize: '12px' }}>
                { errorMessage }
              </p>}

          </label>
        </div>   
      </div> 
    </div>
    );
};

export default AddPetForm;