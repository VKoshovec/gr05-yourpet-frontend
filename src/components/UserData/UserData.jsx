import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';

import { signout } from '../../redux/auth/operations';
import { Modal } from 'components/Modal/Modal';
import { userPhotoValidationSchema } from './UserDataValidation';
import PreviewImage from './PreviewImage/PreviewImage';
import UserDataItem from './UserDataItem/UserDataItem';
import { updateAvatar } from '../../redux/auth/operations';
import { getAvatarUrl } from 'redux/auth/selectors';

import { useAuth } from 'services/hooks';

import { ReactComponent as LogOut } from '../assets/images/icon/logout.svg';
import { ReactComponent as LogOutW } from '../assets/images/icon/logout-white.svg';
import { ReactComponent as EditPfoto } from '../assets/images/icon/edit-photo.svg';
import { ReactComponent as Confirm } from '../assets/images/icon/check.svg';
import { ReactComponent as Pawprint } from '../assets/images/icon/pawprint 1w.svg';

import styles from './UserData.module.scss';

const UserData = () => {
  const [modalShow, setModalShow] = useState(false);
  const [btnChange, setBtnChange] = useState(false);
  const [fromPage, setFromPage] = useState(false);

  const fileRef = useRef(null);
  const user = useAuth().user;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const avatarImg = useSelector(getAvatarUrl);

  console.log(avatarImg);

  useEffect(() => {
    if (location.state === '/register') {
      setFromPage(true);
      setModalShow(true);
      location.state = null;
    }
  }, []);

  const initialValues = {
    image: null,
  };

  const toggleModal = () => {
    setModalShow(!modalShow);
    setFromPage(false);
  };

  const handleChangeAvatar = value => {
    if (value.image.size === 0) {
      return;
    }

    const { image: avatar } = value;
    dispatch(updateAvatar({ avatar }));
  };

  const hanleLogOut = () => {
    navigate('/main');
    dispatch(signout());
  };

  return (
    <div className={styles.user_page}>
      <div className={styles.user_page_item}>
        <h2 className={styles.user_form_title}>My information:</h2>
        <div className={styles.user_form}>
          <Formik
            initialValues={initialValues}
            validationSchema={userPhotoValidationSchema}
            onSubmit={(values, actions) => {
              // console.log('submit', values);

              setBtnChange(false);
              handleChangeAvatar(values);
            }}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className={styles.user_input_wrapper}>
                  <div className={styles.user_input}>
                    {values.image ? (
                      <PreviewImage image={values.image} />
                    ) : (
                      <img
                        src={avatarImg}
                        alt="Default"
                        width="182px"
                        height="182px"
                      />
                    )}
                  </div>

                  <input
                    id="#$%^&file"
                    className={styles.user_inputfile}
                    ref={fileRef}
                    type="file"
                    name="image"
                    hidden
                    onChange={event => {
                      setFieldValue('image', event.target.files[0]);

                      setBtnChange(true);
                    }}
                  />
                  <ErrorMessage name="image" />

                  {btnChange ? (
                    <button
                      htmlFor="#$%^&file"
                      type="submit"
                      className={styles.button}
                    >
                      <Confirm />
                      Confirm
                    </button>
                  ) : (
                    <label htmlFor="#$%^&file" className={styles.user_label}>
                      <EditPfoto />
                      Edit photo
                    </label>
                  )}
                </div>
              </Form>
            )}
          </Formik>
          <div className={styles.input_container}>
            <UserDataItem user={user} />

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
      </div>
      {modalShow && (
        <Modal closeModal={toggleModal}>
          {fromPage ? (
            <div className={styles.user_modal_redirect}>
              <h2 className={styles.user_modal_redirect_text}>Congrats!</h2>
              <p className={styles.user_modal_redirect_p}>
                Youre registration is success
              </p>
              <div className={styles.user_redirect_modalBtn}>
                <button
                  className={styles.user_redirect_modalBtn_goto}
                  onClick={toggleModal}
                >
                  Go to profile <Pawprint />
                </button>
              </div>
            </div>
          ) : (
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
          )}
        </Modal>
      )}
    </div>
  );
};

export default UserData;
