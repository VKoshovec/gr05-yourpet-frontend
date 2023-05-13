import { useState } from "react";
import { Buttonset, ButtonsetItem, ButtonItem } from "./AddPetFormButtonset.styled";


const AddPetFormButtonset = ({ ButtonSetResponse }) => {

    const [variant, setVariant] = useState (); 

    const getVarint = (num) => {
        ButtonSetResponse(num);
        setVariant(num);
    }

    return (
        <Buttonset>
            <ButtonsetItem>
                <ButtonItem 
                className={ variant === 0 ? "active" : "" }
                onClick={ () => getVarint(0) }>your pet</ButtonItem>
            </ButtonsetItem>
            <ButtonsetItem>
                <ButtonItem 
                className={ variant === 1 ? "active" : "" }
                onClick={ () => getVarint(1) }>sell</ButtonItem>
            </ButtonsetItem>
            <ButtonsetItem>
                <ButtonItem 
                className={ variant === 2 ? "active" : "" }
                onClick={ () => getVarint(2) }>lost/found</ButtonItem>
            </ButtonsetItem>
            <ButtonsetItem>
                <ButtonItem 
                className={ variant === 3 ? "active" : "" }
                onClick={ () => getVarint(3) }>in good hands</ButtonItem>
            </ButtonsetItem>
        </Buttonset>
    );
};

export default AddPetFormButtonset;