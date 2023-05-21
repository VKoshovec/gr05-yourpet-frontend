import { object, string, number, date, ValidationError } from "yup";
import { initialFormType } from "../AddPetFrame/AddPetFrame";

export const isValidFields = (data, step, type, funcSet) => {

    let nameErrorField = "";
    let errorMessage = "";

    const presetSchemaOne = { 
        breed: string().required().min(2),
        birthday: date().required(),
        name: string().required().min(2),
    };

    const aditiveOne =  { title: string().required().min(2) };


    const presetSchemaTwo = {
        comments: string().required().min(8),
        image: string().required(),
    };

    const aditiveForSale =  { 
        sex: string().required(),
        location: string().required().min(2),
        price: number().required().min(1),
        // value => (value + "").match(/^\d+(?:\.\d{0,2})$/),
    };

    const aditiveForLostInGood = {
        sex: string().required(),
        location: string().required().min(2),
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
        nameErrorField = error.errors[0].split(" ")[0];
        errorMessage = error.errors[0];
    }

    return [validSchema.isValidSync(data), nameErrorField, errorMessage ];
}