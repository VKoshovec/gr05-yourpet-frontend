import AddPetFrame from "components/AddPetForm/AddPetFrame/AddPetFrame";
import styles from "./AddPetPage.module.scss"
import { useLocation } from "react-router-dom";

const AddPetPage = () => {

    const location = useLocation();
    const loc = location.state.slice(1).split('/')[1];

    const nav = loc === "sell"? "sell":
    loc === "lost-found"? "lost/found":
    loc === "for-free"? "In good hands":
    "yourPet";

    return <div className={styles.bg}>
    
    <AddPetFrame incomingType={ nav }/>
    </div>;
};
export default AddPetPage;
