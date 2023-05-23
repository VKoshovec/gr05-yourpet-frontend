import css from '../AddPetFrame/AddPetFrame.module.scss';
import 'antd/dist/reset.css';

import { Form } from 'antd';
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser, selectToken } from 'redux/auth/selectors';

import { isValidFields } from '../AddPetValidation/AddPetValidation';
import AddPetTitle from '../AddPetTitle/AddPetTitle';
import AddPetCarusel from '../AddPetCarusel/AddPetCarusel';
import AddPetFormButtonset from '../AddPetFormButtonset/AddPetFormButtonset';
import AddPetNav from '../AddPetNav/AddPetNav';
import AddPetForm from '../AddPetForm/AddPetForm';

import { AddPetNotice } from '../AddPetApi/AddPetApi';

const testUrl = "https://funart.pro/uploads/posts/2021-07/1627093090_22-funart-pro-p-duratskaya-sobaka-zhivotnie-krasivo-foto-28.jpg"

export const initialFormType = ["yourPet", "sell", "lost/found", "In good hands"];

const AddPetFrame = ({incomingType}) => {

    const token = useSelector(selectToken);
    const user = useSelector(selectUser);

    const location = useLocation();
    const navigator = useNavigate();

    const [fields, setFields] = useState();
    const [step, setStep] = useState(1);
    const [formType, setFormType] = useState(incomingType);
    const [err, setErr] = useState();
    const [errMess, setErrMess] = useState();
    const [initButSet, setInitButset] = useState( initialFormType.indexOf(incomingType) );

    const navigate = () => {
        if (location) {
            navigator( location.state , { replace: true });
        }
    };

    const ButtonSetResponse = (number) => {
        setFormType(initialFormType[number]);
    };

    const NextStep = () => {
 
        if(formType && step === 1){
            setStep(2);
        };

        if(step === 2 || step === 3){
            const error = isValidFields(fields, step , formType);
            setErr(error[1]);
            setErrMess(error[2]);
        };

        if(step ===2 && isValidFields(fields, step , formType)[0] === true) {
            setStep(3);
        } 
        
        if(step === 3 && isValidFields(fields, step , formType)[0] === true) {
            AddPetNotice( token, fields, formType ).then((res) => { 
                if (res.status === 200 || res.status === 201) {
                    navigate(); 
                 }
            } ).catch((err) => err);           
        }; 
    };

    const PrevStep = () => {
        if(step ===1 ){
            navigate();
        }
        if(step === 2) {
            setStep(1);
        }
        if(step === 3) {
            setStep(2);
        }
    };

    const GetFields = (fieldValues) => {
       setFields(fieldValues);
    };

    return (
        <Form 
        className={ [css.frame, 
            step === 3 && formType === initialFormType [1] ? css.frameBig : 
            step === 3 && formType === initialFormType [2] ? css.frameBig : 
            step === 3 && formType === initialFormType [3] ? css.frameBig : "" 
        ].join(" ") } 
        initialValues={{ remember: true }} 
        wrapperCol={{span: 16,}}
        autoComplete="off"
        >

            <AddPetTitle formtype ={ formType } initialFormType={ initialFormType }/>

            <AddPetCarusel stepnumber={ step }/>

            <AddPetFormButtonset ButtonSetResponse={ ButtonSetResponse } step={ step } initialVariant={ initButSet }/>

            {step !== 1 ? <AddPetForm 
            stepnumber={ step } 
            formtype={ formType } 
            getformFields={ GetFields }
            initialFields={ fields }
            errorField={ err }
            errorMessage={ errMess }
            /> : ""}
            
            <AddPetNav NextStep = { NextStep } PrevStep = { PrevStep } curStep ={ step }/>
        </Form>
    );
};

export default AddPetFrame;