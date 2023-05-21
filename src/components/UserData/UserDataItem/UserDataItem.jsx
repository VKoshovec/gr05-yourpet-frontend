import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { updateUser } from 'redux/auth/operations';
import { useAuth } from 'services/hooks';

import { ReactComponent as Confirm } from '../../assets/images/icon/check.svg';
import { ReactComponent as Edit } from '../../assets/images/icon/edit-2.svg';

import styles from './UserDataItem.module.scss';

const initialStateBlur = {
  name: false,
  email: false,
  birthday: false,
  phone: false,
  city: false,
};

const UserDataItem = () => {
  const [blur, setBlur] = useState(initialStateBlur);

  const dispatch = useDispatch();
  const user = useAuth().user;

  const initialValues = {
    name: user.name || '',
    email: user.email || '',
    birthday: user.birthday || '',
    phone: user.phone || '',
    city: user.city || '',
  };

  const updateUserInfo = values => {
    let filteredUser = Object.fromEntries(
      Object.entries(values).filter(([_, item]) => item !== '')
    );

    dispatch(updateUser(filteredUser));
  };

  const onFocus = event => {
    const { name } = event.target;
    setBlur({ ...blur, [name]: true });
  };

  const onBlur = event => {
    const { name } = event.target;
    setBlur({ ...blur, [name]: false });
  };

  const error = error => {
    toast.warn(error, {
      autoClose: 5000,
      position: 'top-center',
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      updateUserInfo(values);
    },
    validationSchema: yup.object().shape({
      name: yup.string(),
      email: yup.string().email().required('Required'),
      birthday: yup.string(),
      phone: yup.string(),
      city: yup.string(),
    }),
  });

  return (
    <div className={styles.user_data_item}>
      <form onSubmit={formik.handleSubmit} className={styles.user_form}>
        <div className={styles.user_form_wrapper}>
          <div className={styles.user_input_wrapper}>
            <label className={styles.user_label}>Name:</label>

            <input
              name="name"
              className={styles.user_input}
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={onBlur}
              onFocus={onFocus}
            />
          </div>
          <button
            name="name"
            type="submit"
            className={styles.user_btn}
            onSubmit={formik.handleSubmit}
          >
            {blur.name === true ? (
              <Confirm className={styles.user_svg} />
            ) : (
              <Edit className={styles.user_svg} />
            )}
          </button>
          {formik.errors.name &&
            formik.touched.name &&
            error(formik.errors.name)}
        </div>

        <div className={styles.user_form_wrapper}>
          <div className={styles.user_input_wrapper}>
            <label className={styles.user_label}>Email:</label>

            <input
              name="email"
              className={styles.user_input}
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={onBlur}
              onFocus={onFocus}
            />
            <button
              type="submit"
              className={styles.user_btn}
              onSubmit={formik.handleSubmit}
            >
              {blur.email === true ? (
                <Confirm className={styles.user_svg} />
              ) : (
                <Edit className={styles.user_svg} />
              )}
            </button>
            {formik.errors.email &&
              formik.touched.email &&
              error(formik.errors.email)}
          </div>
        </div>

        <div className={styles.user_form_wrapper}>
          <div className={styles.user_input_wrapper}>
            <label className={styles.user_label}>Birthday:</label>

            <input
              name="birthday"
              className={styles.user_input}
              type="text"
              value={formik.values.birthday}
              onChange={formik.handleChange}
              onBlur={onBlur}
              onFocus={onFocus}
            />
            <button
              type="submit"
              className={styles.user_btn}
              onSubmit={formik.handleSubmit}
            >
              {blur.birthday === true ? (
                <Confirm className={styles.user_svg} />
              ) : (
                <Edit className={styles.user_svg} />
              )}
            </button>
            {formik.errors.birthday && formik.touched.birthday && (
              <div className={styles.user_error}>{formik.errors.birthday}</div>
            )}
          </div>
        </div>

        <div className={styles.user_form_wrapper}>
          <div className={styles.user_input_wrapper}>
            <label className={styles.user_label}>Phone:</label>

            <input
              name="phone"
              className={styles.user_input}
              type="text"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={onBlur}
              onFocus={onFocus}
            />
            <button
              type="submit"
              className={styles.user_btn}
              onSubmit={formik.handleSubmit}
            >
              {blur.phone === true ? (
                <Confirm className={styles.user_svg} />
              ) : (
                <Edit className={styles.user_svg} />
              )}
            </button>
            {formik.errors.phone &&
              formik.touched.phone &&
              error(formik.errors.phone)}
          </div>
        </div>

        <div className={styles.user_form_wrapper}>
          <div className={styles.user_input_wrapper}>
            <label className={styles.user_label}>City:</label>

            <input
              name="city"
              className={styles.user_input}
              type="text"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={onBlur}
              onFocus={onFocus}
            />
            <button
              type="submit"
              className={styles.user_btn}
              onSubmit={formik.handleSubmit}
            >
              {blur.city === true ? (
                <Confirm className={styles.user_svg} />
              ) : (
                <Edit className={styles.user_svg} />
              )}
            </button>
            {formik.errors.city &&
              formik.touched.city &&
              error(formik.errors.city)}
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserDataItem;
