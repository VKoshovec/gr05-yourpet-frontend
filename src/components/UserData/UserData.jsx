import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import { signout } from '../../redux/auth/operations';
import { Modal } from 'components/Modal/Modal';
import { userValidationSchema } from './UserDataValidation';
import PreviewImage from './PreviewImage/PreviewImage';
import UserDataItem from './UserDataItem/UserDataItem';
import defaultImage from '../assets/images/userPageImage/defaultUser.png';
import { ReactComponent as LogOut } from '../assets/images/icon/logout.svg';
import { ReactComponent as LogOutW } from '../assets/images/icon/logout-white.svg';
import { ReactComponent as EditPfoto } from '../assets/images/icon/edit-photo.svg';
import { ReactComponent as Confirm } from '../assets/images/icon/check.svg';

import styles from './UserData.module.css';

const UserData = () => {
  const [modalShow, setModalShow] = useState(false);
  //   const [logout, setLogout] = useState(false);

  const fileRef = useRef(null);
    const dispatch = useDispatch();
  // const navigate = useNavigate();

  const initialValues = {
    image: null,
  };

  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  const hanleLogOut = () => {
    // navigate('/main');
    // setLogout(true);
      dispatch(signout());
  };

  //   const onInputChange = event => {
  //     console.log(event.target.name);
  //   };

  //   const onBtnClick = event => {
  //     console.log(event);
  //   };

  return (
    <div className={styles.user_page}>
      <h2 className={styles.user_form_title}>My information:</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={userValidationSchema}
        onSubmit={(values, actions) => console.log('submit', values)}
      >
        {({ values, setFieldValue, getFieldMeta }) => (
          <Form className={styles.user_form}>
            <div className={styles.user_input_wrapper}>
              <div className={styles.user_input}>
                <input
                  ref={fileRef}
                  type="file"
                  name="image"
                  hidden
                  onChange={event => {
                    setFieldValue('image', event.target.files[0]);
                    console.log(event.target.files);
                  }}
                />

                <ErrorMessage name="image" />

                {values.image ? (
                  <PreviewImage image={values.image} />
                ) : (
                  <img
                    src={defaultImage} // or user.image
                    alt="Default"
                    width="182px"
                    height="182px"
                  />
                )}
              </div>
              {values.image ? (
                <button
                  type="submit"
                  onClick={() => {
                    fileRef.current.click();
                  }}
                  className={styles.button}
                >
                  <Confirm />
                  Confirm
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={() => {
                    fileRef.current.click();
                  }}
                  className={styles.button}
                >
                  <EditPfoto />
                  Edit photo
                </button>
              )}
            </div>

            <div className={styles.input_container}>
              <div className={styles.input_container}>
                <UserDataItem />
              </div>

              <button
                type="button"
                className={styles.logoutBtn}
                onClick={toggleModal}
              >
                <LogOut />
                Log Out
              </button>
            </div>
          </Form>
        )}
      </Formik>
      ;
      {modalShow && (
        <Modal closeModal={toggleModal}>
          <div className={styles.user_modal}>
            <h2 className={styles.user_modal_text}>Already leaving?</h2>
            <div className={styles.user_modalBtn}>
              <button
                className={styles.user_modalBtn_cancel}
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button
                className={styles.user_modalBtn_logout}
                onClick={hanleLogOut}
              >
                Yes
                <LogOutW />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default UserData;
