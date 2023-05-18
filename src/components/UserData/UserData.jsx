import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';

import { signout } from '../../redux/auth/operations';
import { Modal } from 'components/Modal/Modal';
import { userPhotoValidationSchema } from './UserDataValidation';
import PreviewImage from './PreviewImage/PreviewImage';
import UserDataItem from './UserDataItem/UserDataItem';

import defaultImage from '../assets/images/userPageImage/defaultUser.png';
import { ReactComponent as LogOut } from '../assets/images/icon/logout.svg';
import { ReactComponent as LogOutW } from '../assets/images/icon/logout-white.svg';
import { ReactComponent as EditPfoto } from '../assets/images/icon/edit-photo.svg';
import { ReactComponent as Confirm } from '../assets/images/icon/check.svg';

import { getCurrentUser } from 'redux/user/user-operations';
import { getUser } from 'redux/user/user-selectors';

import styles from './UserData.module.css';

const UserData = () => {
  const [modalShow, setModalShow] = useState(false);
  const [logout, setLogout] = useState(false);

  // const user = useSelector(getUser);
  const fileRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(user);

  const initialValues = {
    image: null,
  };

  // useEffect(() => {
  //   dispatch(getCurrentUser());
  // }, [dispatch]);

  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  const hanleLogOut = () => {
    navigate('/main');
    setLogout(true);
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
      <div className={styles.user_form}>
        <Formik
          initialValues={initialValues}
          validationSchema={userPhotoValidationSchema}
          onSubmit={(values, actions) => console.log('submit', values)}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className={styles.user_input_wrapper}>
                <div className={styles.user_input}>
                  <input
                    ref={fileRef}
                    type="file"
                    name="image"
                    hidden
                    onChange={event => {
                      setFieldValue('image', event.target.files[0]);
                      console.log(fileRef);
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
            </Form>
          )}
        </Formik>
        <div className={styles.input_container}>
          <UserDataItem />

          <button
            type="button"
            className={styles.logoutBtn}
            onClick={toggleModal}
          >
            <LogOut />
            Log Out
          </button>
        </div>
      </div>
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
