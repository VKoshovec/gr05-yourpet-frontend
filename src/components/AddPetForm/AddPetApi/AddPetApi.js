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

export const AddPetNotice = async (user, token, body, image, type) => {

let ownPet;    

if (type === initialFormType[0]) {
   ownPet = true;
};   

if (!ownPet && !user.phone) {
    alert("You must add phone to your profile");
};     

const dateForSubmit = body.birthday.substr(8,2)+"."+body.birthday.substr(5,2)+"."+body.birthday.substr(0,4);

const config = {
    headers: { Authorization: `Bearer ${token}` },
    // 'Content-Type': 'application/json'
    'Content-Type': 'multipart/form-data'
};


const ulr = `${defautltUrs}${!ownPet?'notices':'pets/update'}`;

const formdata = body.saveList;

if (ownPet) {
   formdata.append("name", body.name);
   formdata.append("birthday", dateForSubmit);
   formdata.append("breed", body.breed);
}

if (!ownPet) {
    formdata.append("title", body.title);
    formdata.append("name", body.name);
    formdata.append("birthday", dateForSubmit);
    formdata.append("breed", body.breed);
    formdata.append("location", body.location);
    formdata.append("sex", body.sex);
    formdata.append("category", type);
    formdata.append("prise", body.price);
    formdata.append("comments", body.pcomments);
    formdata.append("owner", user._id);
    formdata.append("email", user._email);
    formdata.append("phone", user._phone);
  }

try {
    const responce =  await axios.patch( ulr, formdata, config);
    return responce;
   } catch (error) {
    alert(error);
   }
}