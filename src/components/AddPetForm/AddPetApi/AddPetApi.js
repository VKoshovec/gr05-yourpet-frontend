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

if (!user.phone) {
    alert("You must add phone to your profile");
    return;
}     

const config = {
     headers: { Authorization: `Bearer ${token}` },
     'Content-Type': 'application/json'
};

const dateForSubmit = body.birthday.substr(8,2)+"."+body.birthday.substr(5,2)+"."+body.birthday.substr(0,4);

const req = {
    title: body.title,
    name: body.name,
    birthday: dateForSubmit,
    breed: body.breed,
    location: body.location,
    sex: body.sex,
    category: type,
    price: body.price,
    comments: body.comments,
    image: image,
    owner: user._id,
    email: user.email,
    phone: user.phone,
    // phone: "02284795",
};

try {
    const responce =  await axios.post(`${defautltUrs}notices`, req, config);
    return responce;
   } catch (error) {
      alert(error)
   }
}