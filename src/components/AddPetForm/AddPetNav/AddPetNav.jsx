import React from 'react';
import {ReactComponent as ArrowLeft} from '../../assets/images/icon/arrow-left.svg';
import {ReactComponent as Paw} from '../../assets/images/icon/pawprint 1w.svg';
import { Button } from "antd";
import css from '../AddPetNav/AddPetNav.module.scss'


const AddPetNav = ({NextStep, PrevStep, curStep}) => {

    return(
        <div className={ css.petNav }>
            <Button onClick={ PrevStep } type="text" className={ css.BackCencel }>
                <ArrowLeft className={ css.BackCencelSvg }/>
                {curStep === 1 ? 
                <span className={ css.BackCencelSpan }>Сancel</span> : 
                <span className={ css.BackCencelSpan }>Back</span>}
            </Button>
            <Button onClick={ NextStep } className={ css.NextDone } htmlType={ curStep === 2 || curStep === 3 ? "submit" : "button" }>
                {curStep === 3 ? 
                <span className={ css.NextDoneSpan }>Done</span> : 
                <span className={ css.NextDoneSpan }>Next</span>}
                <Paw className={ css.NextDoneSvg }/>
            </Button>
        </div>
    );
};

export default AddPetNav;