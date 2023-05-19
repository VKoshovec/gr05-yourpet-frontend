import { object, string, number, date, ValidationError } from "yup";
import { initialFormType } from "../AddPetFrame/AddPetFrame";

export const isValidFields = (data, step, type) =>{

    const presetSchemaOne = { 
        breed: string().required().min(5),
        dBirth: date().required(),
        name: string().required().min(3),
    };

    const aditiveOne =  { title: string().required().min(5) };


    const presetSchemaTwo = {
        comments: string().required().min(5),
        photo: string().required(),
    };

    const aditiveForSale =  { 
        sex: string().required(),
        location: string().required(),
        price: number().required(),
        // value => (value + "").match(/^\d+(?:\.\d{0,2})$/),
    };

    const aditiveForLostInGood = {
        sex: string().required(),
        location: string().required(),
    };

    const validSchema = 
    step === 2 ? object (
        type === initialFormType[0] ? {...presetSchemaOne} 
        : 
        {...presetSchemaOne, ...aditiveOne},
    ):
    object (
        type === initialFormType[0] ? { ...presetSchemaTwo } 
        : 
        type === initialFormType[1] ? { ...presetSchemaTwo, ...aditiveForSale} 
        :
        { ...presetSchemaTwo, ...aditiveForLostInGood} 
    );

    try {
        validSchema.validateSync(data);
    } catch (error) {
        alert(error)
    
    }

    console.log(ValidationError.value);

    return validSchema.isValidSync(data);
}