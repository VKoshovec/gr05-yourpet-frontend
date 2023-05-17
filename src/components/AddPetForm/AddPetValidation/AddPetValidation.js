import { object, string, number, date } from "yup";
import { initialFormType } from "../AddPetFrame/AddPetFrame";

export const Validation = {

    // schemaStepTwo: object({
    //     breed: string().required().min(5),
    //     dBirth: date().required(),
    //     name: string().required().min(3),
    //     title: string().required().min(5),
    // }),

    // schemaStepThree: object({
    //     sex: string().required(),
    //     location: string().required(),
    //     price: number().required().test( 
    //         'is-decimal',
    //         'invalid decimal',
    //         value => (value + "").match(/^\d+(?:\.\d{0,2})$/),
    //     ),
    //     comments: string().required(),
    //     image: string().required(),
    // }),

    // validateStepTwo: async function(data) {
    //     try {
    //       await this.schemaStepTwo.validate(data);
    //     } catch (error) {
    //         alert(error);
    //     }
    // },

    // isValidStepTwo: function(data) {
    //    return this.schemaStepTwo.isValidSync(data);
    // },
    
    // validateStepThree: async function(data) {
    //     try {
    //       await this.schemaStepThree.validate(data);
    //     } catch (error) {
    //         alert(error);
    //     }
    // },

    // isValidStepThre: function(data) {
    //    return this.schemaStepThree.isValidSync(data);
    // },
}

export const isValidFields = (data, step, type) =>{

    const presetSchemaOne = { 
        breed: string().required().min(5),
        dBirth: date().required(),
        name: string().required().min(3)
    };

    const aditiveOne =  { title: string().required().min(5) };

    
    const presetSchemaTwo = {
        photo: string().required(),
        comments: string().required(),
    };

    const aditiveForSale =  { 
        sex: string().required(),
        location: string().required(),
        price: number().required().test( 
           'is-decimal',
           'invalid decimal',
            value => (value + "").match(/^\d+(?:\.\d{0,2})$/),
        )
    };

    const aditiveForLostInGood = {
        sex: string().required(),
        location: string().required(),
    };

    const validSchemaOne = 
    step === 2 ? object(
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
        validSchemaOne.validateSync(data)
    } catch (error) {
        alert(error)
    }

    console.log(validSchemaOne)
    return validSchemaOne.isValidSync(data);
}