import { Form } from 'antd';

import AddPetCarusel from '../AddPetCarusel/AddPetCarusel';
import AddPetFormButtonset from '../AddPetFormButtonset/AddPetFormButtonset';
import AddPetNav from '../AddPetNav/AddPetNav';
import AddPetForm from '../AddPetForm/AddPetForm';
import { useState } from 'react';
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

        if(step ===2 && Validation.validateStepTwo(fields)
            && Validation.isValidStepTwo(fields)) {
            setStep(3);
        }      
    };

    const PrevStep = () => {
        if(step === 2) {
            setFormType("")
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
        if (step === 3 && Validation.isValidStepTwo) {
            console.log(fields)
        }
    }


    return (
        <Form 
        className={ [css.frame, 
            step === 3 && formType === initialFormType [1] ? css.frameBig : step === 3 && formType === initialFormType [2] ? css.frameBig : "" ]
            .join(" ") } 
        initialValues={{remember: true }} 
        autoComplete="off" 
        onFinish={ handleSubmit }>

            {formType === initialFormType[0]? 
            <h1 className={ css.title }>Add your pet</h1> :
            formType === initialFormType[1]? 
            <h1 className={ css.title }>Add pet for sale</h1> : 
            formType === initialFormType[2]? 
            <h1 className={ css.title }>Add lost pet</h1> : 
            formType === initialFormType[3]?
            <h1 className={ css.title }>Add pet in good hands</h1> : 
            <h1 className={ css.title }>Add pet</h1>}

            <AddPetCarusel stepnumber={ step }/>

            {step ===1 ? <AddPetFormButtonset ButtonSetResponse={ ButtonSetResponse } /> : ""}
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