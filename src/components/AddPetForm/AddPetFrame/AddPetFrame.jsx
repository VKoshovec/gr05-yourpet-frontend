import { Form } from 'antd';

import { isValidFields } from '../AddPetValidation/AddPetValidation';

import AddPetTitle from '../AddPetTitle/AddPetTitle';
import AddPetCarusel from '../AddPetCarusel/AddPetCarusel';
import AddPetFormButtonset from '../AddPetFormButtonset/AddPetFormButtonset';
import AddPetNav from '../AddPetNav/AddPetNav';
import AddPetForm from '../AddPetForm/AddPetForm';
import { useState, useEffect } from 'react';
import css from '../AddPetFrame/AddPetFrame.module.scss'
import { Validation } from '../AddPetValidation/AddPetValidation';

export const initialFormType = ["yourPet", "sel", "lostFound", "inGoodHands"];

const AddPetFrame = () => {

    const [fields, setFields] = useState();
    const [step, setStep] = useState(1);
    const [formType, setFormType] = useState();

    const ButtonSetResponse = (number) => {
        setFormType(initialFormType[number]);
    };

    const NextStep = () => {
        if(formType && step === 1){
            setStep(2);
        };

        if(step ===2 && isValidFields(fields, step , formType)) {
            setStep(3);
        }      
    };

    const PrevStep = () => {
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

    const handleSubmit = () => {
        if (step === 3 && isValidFields(fields, step , formType)) {
            console.log(fields)
        }
    };

    return (
        <Form 
        className={ [css.frame, 
            step === 3 && formType === initialFormType [1] ? css.frameBig : 
            step === 3 && formType === initialFormType [2] ? css.frameBig : "" 
        ].join(" ") } 
        initialValues={{ remember: true }} 
        wrapperCol={{
            span: 16,
        }}
        autoComplete="off" 
        onFinish={ handleSubmit }>

            <AddPetTitle formtype ={ formType } initialFormType={ initialFormType }/>

            <AddPetCarusel stepnumber={ step }/>

            <AddPetFormButtonset ButtonSetResponse={ ButtonSetResponse } step={ step } />

            {step !== 1 ? <AddPetForm 
            stepnumber={ step } 
            formtype={ formType } 
            getformFields={ GetFields }
            initialFields={ fields }
            /> : ""}
            
            <AddPetNav NextStep = { NextStep } PrevStep = { PrevStep } curStep ={ step }/>

        </Form>
    );
};

export default AddPetFrame;