import { Frame, Title } from './addPetFrame.styled';
import AddPetCarusel from '../AddPetCarusel/AddPetCarusel';
import AddPetFormButtonset from '../AddPetFormButtonset/AddPetFormButtonset';
import AddPetForm from '../AddPetForm';

import { useState } from 'react';

const AddPetFrame = () => {

    const [step, setStep] = useState (1);

    const ButtonSetResponse = () => {
        setStep(2);
    }

    return (
        <Frame>
            <Title>Add pet</Title>
            <AddPetCarusel stepnumber={ step }/>
            {step ===1 ? <AddPetFormButtonset ButtonSetResponse={ ()=> { ButtonSetResponse() } }/> : ""}
        </Frame>
    );
};

export default AddPetFrame;