import { useState } from 'react';
import React from 'react';
import {ReactComponent as ArrowLeft} from '../../assets/images/icon/arrow-left.svg';
import {ReactComponent as Paw} from '../../assets/images/icon/pawprint 1w.svg';
import { PetNav, BackCencel, NextDone } from "./AddPetNav.styled";


const AddPetNav = ({NextStep, PrevStep, curStep}) => {

    return(
        <PetNav>
            <BackCencel onClick={ PrevStep } type="text">
                <ArrowLeft/>
                {curStep === 1 ? "Сancel" : "Back"}
            </BackCencel>
            <NextDone onClick={ NextStep }>
                {curStep ===3 ? "Done": "Next"}
                <Paw/>
            </NextDone>
        </PetNav>
    );
};

export default AddPetNav;