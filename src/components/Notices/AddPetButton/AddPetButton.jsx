import { useState } from 'react';
import styled from './AddPetButton.module.scss';
import { message } from 'antd';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as AddIcon } from '../../assets/images/icon/plus.svg';
import { ReactComponent as Pawprint } from '../../assets/images/icon/pawprint 1w.svg';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import { Modal } from 'components/Modal/Modal';

const AddPetButton = () => {
  const [modalShow, setModalShow] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggingIn = useSelector(selectIsLoggedIn);
  // const { category } = useParams();
  //
  // let linkRoute = isLoggingIn ?  : `notices/${category}`

  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  const handleLinkClick = event => {
    if (!isLoggingIn) {
      toggleModal();
      event.preventDefault();
    }
  };
  return (
    <>
      {contextHolder}
      <NavLink
        to={`/add-pet`}
        className={styled.addButton}
        onClick={handleLinkClick}
        state={location.pathname}
      >
        <AddIcon />
        <span className={styled.text}>Add pet</span>
      </NavLink>
      {modalShow && (
        <Modal closeModal={toggleModal}>
          <div className={styled.modal}>
            <h2 className={styled.user_modal_text}>
              To do this, you need <br />
              to login or register
            </h2>
            <div className={styled.modalBtns}>
              <button
                className={styled.modalBtn_login}
                onClick={() => {
                  navigate('/login');
                }}
              >
                Login <Pawprint />
              </button>
              <button
                className={styled.modalBtn_register}
                onClick={() => {
                  navigate('/register');
                }}
              >
                Registeration
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AddPetButton;
