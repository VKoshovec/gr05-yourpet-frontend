import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Modal } from 'components/Modal/Modal';
import UserData from 'components/UserData/UserData';

// import Container from 'components/Container/Container';
// import Section from 'components/Section/Container';
import styles from './UserPage.module.css';

const UserPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  const onNavigateBtnClick = () => {
    navigate('/main');
  };

  return (
    // <Section>
    // {/* <Container> */}
    <div>
      <button onClick={toggleModal}>Modal</button>
      {modalShow && (
        <Modal closeModal={toggleModal}>
          <h2>Congrats!</h2>
          <p>Youre registration is success</p>
          <button onClick={onNavigateBtnClick}>Go to main (profile?)</button>
        </Modal>
      )}
      <UserData />
    </div>
    // </Container>
    // </Section>
  );
};
export default UserPage;
