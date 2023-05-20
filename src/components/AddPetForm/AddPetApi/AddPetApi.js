import axios from "axios";
import { initialFormType } from "../AddPetFrame/AddPetFrame";
import { Modal } from "components/Modal/Modal";

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
    // alert("You must add phone to your profile");
    return <Modal>error</Modal>;
};     

const config = {
     headers: { Authorization: `Bearer ${token}` },
     'Content-Type': 'application/json'
};

const dateForSubmit = body.birthday.substr(8,2)+"."+body.birthday.substr(5,2)+"."+body.birthday.substr(0,4);

const reqAll = {
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

const reqOwn = {
    name: body.name,
    birthday: dateForSubmit,
    breed: body.breed,
    comments: body.comments,
    photoURL: image,
};

const ulr = `${defautltUrs}${!ownPet?'notices':'pets'}`;
const req = !ownPet?reqAll:reqOwn;


try {
    const responce =  await axios.post( ulr, req, config);
    return responce;
   } catch (error) {
    //   alert(error)
      return <Modal>error</Modal>
   }
}