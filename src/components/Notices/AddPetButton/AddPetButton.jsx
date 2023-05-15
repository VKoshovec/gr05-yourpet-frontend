import styled from './AddPetButton.module.scss';
import {  message } from 'antd';
import { NavLink } from 'react-router-dom';
import { ReactComponent as AddIcon } from '../../assets/images/icon/plus.svg';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';



const AddPetButton = () => {

  const [messageApi, contextHolder] = message.useMessage();

  const isLoggingIn = useSelector(selectIsLoggedIn);
  // const { category } = useParams();
  //
  // let linkRoute = isLoggingIn ?  : `notices/${category}`

  const handleLinkClick = (event) => {
    if (!isLoggingIn) {
      event.preventDefault();
      messageApi.info({
        content: 'This operation requires authorization',
        className:styled.message
      });

    }
  }
  return (<>
    {contextHolder}
      <NavLink to={`/add-pet`} className={styled.addButton} onClick={handleLinkClick}>
        <AddIcon/><span className={styled.text}>Add pet</span>
      </NavLink>
  </>
  )
}

export default AddPetButton

