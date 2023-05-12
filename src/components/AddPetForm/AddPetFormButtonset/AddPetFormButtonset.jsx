import { Buttonset, ButtonsetItem, ButtonItem } from "./AddPetFormButtonset.styled";


const AddPetFormButtonset = ({ ButtonSetResponse }) => {
    return (
        <Buttonset>
            <ButtonsetItem>
                <ButtonItem onClick={ ButtonSetResponse }>your pet</ButtonItem>
            </ButtonsetItem>
            <ButtonsetItem>
                <ButtonItem onClick={ ButtonSetResponse }>sell</ButtonItem>
            </ButtonsetItem>
            <ButtonsetItem>
                <ButtonItem onClick={ ButtonSetResponse }>lost/found</ButtonItem>
            </ButtonsetItem>
            <ButtonsetItem>
                <ButtonItem onClick={ ButtonSetResponse }>in good hands</ButtonItem>
            </ButtonsetItem>
        </Buttonset>
    );
};

export default AddPetFormButtonset;