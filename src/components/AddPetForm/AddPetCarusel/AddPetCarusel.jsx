import { Carusel, Step, StepLine } from "./addPetCarusel.styled";
import PropTypes from "prop-types";
import css from '../AddPetCarusel/AddPetCarusel.module.scss'

const AddPetCarusel = ({stepnumber}) => {

    return (
    <div className={ css.carusel }>
      <div className={[css.step, stepnumber === 1 ? css.stepActive : css.stepDone ].join(" ")}>
        Choose  option
        <div className={[css.stepLine, stepnumber === 1 ? css.stepLineActive : css.stepLineDone].join(" ")}/>
      </div>

      <div className={[css.step, stepnumber === 2 ? css.stepActive : stepnumber === 3 ? css.stepDone : ""].join(" ")}>
        Personal details
        <div className={[css.stepLine, stepnumber === 2 ? css.stepLineActive : stepnumber === 3 ? css.stepLineDone : "" ].join(" ")}/>
      </div>

      <div className={[css.step, stepnumber === 3 ? css.stepActive : "" ].join(" ")}>
        More info
        <div className={[css.stepLine, stepnumber === 3 ? css.stepLineActive : "" ].join(" ")}/>
      </div>
    </div>
    );
}

AddPetCarusel.propTypes = {
    stepnumber: PropTypes.oneOf([1, 2 , 3])
};

export default AddPetCarusel;