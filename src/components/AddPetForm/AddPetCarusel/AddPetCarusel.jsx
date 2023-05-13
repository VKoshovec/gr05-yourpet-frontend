import { Carusel, Step, StepLine } from "./addPetCarusel.styled";
import PropTypes from "prop-types";

const AddPetCarusel = ({stepnumber}) => {
    return (
    <Carusel>

      <Step className={ stepnumber === 1 ? "active" : "done" } >Choose  option
        <StepLine className={ stepnumber === 1 ? "active" : "done" }/>
      </Step>

      <Step className={ stepnumber === 2 ? "active" : stepnumber === 3 ? "done" : "" }>Personal details
        <StepLine className={ stepnumber === 2 ? "active" : stepnumber === 3 ? "done" : "" }/>
      </Step>

      <Step className={ stepnumber === 3 ? "active" : "" }>More info
        <StepLine className={ stepnumber === 3 ? "active" : "" }/>
      </Step>

    </Carusel>
    );
}

AddPetCarusel.propTypes = {
    stepnumber: PropTypes.oneOf([1, 2 , 3])
};

export default AddPetCarusel;