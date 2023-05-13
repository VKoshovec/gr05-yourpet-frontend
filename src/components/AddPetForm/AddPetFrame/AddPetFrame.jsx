import { Frame, Title } from './addPetFrame.styled';
import AddPetCarusel from '../AddPetCarusel/AddPetCarusel';
import AddPetFormButtonset from '../AddPetFormButtonset/AddPetFormButtonset';
import AddPetNav from '../AddPetNav/AddPetNav';
import AddPetForm from '../AddPetForm/AddPetForm';
import { useState } from 'react';
import { switchCase } from '@babel/types';

const initialFormType = ["yourPet", "sel", "lostFound", "inGoodHands"];

const AddPetFrame = () => {

    const [step, setStep] = useState(1);
    const [formType, setFormType] = useState();

    const ButtonSetResponse = (number) => {
        setFormType(initialFormType[number]);
    }

    const NextStep = () => {

        if(formType && step === 1){
            setStep(2);
        }
    } 

    const PrevStep = () => {
        if(step === 2)
        setFormType("")
        setStep(1);
    }

    return (
        <Frame>
            {formType === initialFormType[0]? 
            <Title>Add your pet</Title> :
            formType === initialFormType[1]? 
            <Title>Add pet for sale</Title> : 
            formType === initialFormType[2]? 
            <Title>Add lost pet</Title> : 
            formType === initialFormType[3]?
            <Title>Add pet in good hands</Title> : 
            <Title>Add pet</Title>
            }
            <AddPetCarusel stepnumber={ step }/>
            {step ===1 ? <AddPetFormButtonset ButtonSetResponse={ ButtonSetResponse } /> : ""}
            {step !== 1 ? <AddPetForm /> : ""}
            <AddPetNav NextStep = { NextStep } PrevStep = { PrevStep } curStep ={ step }/>
        </Frame>
    );
};

export default AddPetFrame;