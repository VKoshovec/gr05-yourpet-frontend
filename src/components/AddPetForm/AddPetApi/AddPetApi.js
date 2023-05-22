import axios from "axios";
import { initialFormType } from "../AddPetFrame/AddPetFrame";

const defautltUrs = "https://yourpet-api.onrender.com/api/";
 
export const AddPetPhotoApi = async ({ photo }) => {
    try {
        const responce =  await axios.post("https://yourpet-api.onrender.com/api/");
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
};

export const AddPetNotice = async ( token, body, type) => {

let ownPet;    

if (type === initialFormType[0]) {
   ownPet = true;
};   
   

const dateForSubmit = body.birthday.substr(8,2)+"."+body.birthday.substr(5,2)+"."+body.birthday.substr(0,4);

const config = {
    headers: { Authorization: `Bearer ${token}` },
    'Content-Type': 'multipart/form-data'
};


const ulr = `${defautltUrs}${!ownPet?'notices':'pets'}`;

const formdata = body.saveList;

if (ownPet) {
   formdata.append("name", body.name);
   formdata.append("birthday", dateForSubmit);
   formdata.append("breed", body.breed);
   formdata.append("comments", body.comments);
   
}

if (!ownPet) {
    formdata.append("title", body.title);
    formdata.append("name", body.name);
    formdata.append("birthday", dateForSubmit);
    formdata.append("breed", body.breed);
    formdata.append("location", body.location);
    formdata.append("sex", body.sex);
    formdata.append("category", type);
    formdata.append("price", body.price);
    formdata.append("comments", body.comments);
  }

try {
    const responce =  await axios.post( ulr, formdata, config);
    return responce;
   } catch (error) {
    alert(error);
   }
}