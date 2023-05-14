import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';

import { Formik, Form, ErrorMessage } from 'formik';
import { userValidationSchema } from './UserDataValidation';

import UserDataItem from './UserDataItem/UserDataItem';
import defUserImg from '../assets/images/userPageImage/defaultUser.png';

// import UserDataItem from './UserDataItem/UserDataItem';
// import defaultUserImg from '../../Shared/images/defaultUserImg.png';
// import CameraIcon from 'Components/SvgIcons/CameraIcon';
// import ConfirmIcon from 'Components/SvgIcons/ConfirmIcon';
// import LogoutIcon from 'Components/SvgIcons/LogoutIcon';
// import { PreviewImage } from './UserDataItem';

import styles from './UserData.module.css';
import { useNavigate } from 'react-router-dom';

const UserData = () => {
  const fileRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    email: '',
    birthday: '',
    phone: '',
    city: '',
    file: '',
  };

  const hanleLogOut = () => {
    navigate('/main');
    //   dispatch(logout());
  };

  const onInputChange = event => {
    console.log(event.target.name);
  };

  const onBtnClick = event => {
    console.log(event);
  };

  return (
    <div>
      <h2 className={styles.user_form_title}>My information:</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={userValidationSchema}
        onSubmit={(values, actions) => console.log('submit', values)}
      >
        {({ values, setFieldValue }) => (
          <Form className={styles.user_form}>
            <div className={styles.user_input_wrapper}>
              <div className={styles.user_input}>
                <input
                  ref={fileRef}
                  type="file"
                  hidden
                  onChange={event => {
                    setFieldValue('file', event.target.files[0]);
                  }}
                />
                <ErrorMessage name="file" />

                <img
                  src={defUserImg}
                  alt="Default"
                  width="182px"
                  height="182px"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  fileRef.current.click();
                }}
                className={styles.button}
              >
                Edit photo
              </button>

              <button
                type="button"
                onClick={() => {
                  fileRef.current.click();
                }}
                className={styles.button}
              >
                Confirm
              </button>
            </div>

            <div className={styles.input_container}>
              <div className={styles.input_container}>
                <UserDataItem
                  label="Name"
                  type="text"
                  name="name"
                  value={initialValues.name}
                  onChange={onInputChange}
                  onClick={onBtnClick}
                />
                <UserDataItem
                  label="Email"
                  type="email"
                  name="email"
                  onChange={onInputChange}
                  onClick={onBtnClick}
                />
                <UserDataItem
                  label="Birthday"
                  type="text"
                  name="birthday"
                  onChange={onInputChange}
                  onClick={onBtnClick}
                />
                <UserDataItem
                  label="Phone"
                  type="text"
                  name="phone"
                  onChange={onInputChange}
                  onClick={onBtnClick}
                />
                <UserDataItem
                  label="City"
                  type="text"
                  name="city"
                  onChange={onInputChange}
                  onClick={onBtnClick}
                />
              </div>

              <button className={styles.logoutBtn} onClick={hanleLogOut}>
                Log Out
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserData;
