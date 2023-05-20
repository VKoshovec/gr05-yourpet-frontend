import { useState } from "react";
import { Button } from "antd";
import css from '../AddPetFormButtonset/AddPetFormButtonset.module.scss';
import classNames from "classnames";


const AddPetFormButtonset = ({ ButtonSetResponse, step }) => {

    const [variant, setVariant] = useState (); 

    const isRendered = (step) => {
        return step === 1;
    }; 

    const [up, setUp] = useState(css.buttonsethovered);
    
    //anime
    setTimeout(( )=>{ 
        setUp(css.buttonset)
    }, '250');


    const getVarint = (num) => {
        ButtonSetResponse(num);
        setVariant(num);
    };


    return isRendered (step) && (

        <ul className={ up } >
            <li className={ css.buttonsetItem }>
                <Button 
                className={[css.buttonItem, variant === 0 ? css.buttonItemActive : ""].join(" ")} 
                onClick={ () => getVarint(0) }>your pet</Button >
            </li>
            <li className={ css.buttonsetItem }>
                <Button className={[css.buttonItem, variant === 1 ? css.buttonItemActive : ""].join(" ")} 
                onClick={ () => getVarint(1) }>sell</Button >
            </li>
            <li className={ css.buttonsetItem }>
                <Button className={[css.buttonItem, variant === 2 ? css.buttonItemActive : ""].join(" ")} 
                onClick={ () => getVarint(2) }>lost/found</Button >
            </li>
            <li className={ css.buttonsetItem }>
                <Button className={[css.buttonItem, variant === 3 ? css.buttonItemActive : ""].join(" ")} 
                onClick={ () => getVarint(3) }>in good hands</Button >
            </li>
        </ul>
    );
};

export default AddPetFormButtonset;