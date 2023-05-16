import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import { validateUserForm } from 'helpers';

import { ReactComponent as Confirm } from '../../assets/images/icon/check.svg';
import { ReactComponent as Edit } from '../../assets/images/icon/edit-2.svg';

import styles from './UserDataItem.module.css';

const initialState = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
};

const initialStateBlur = {
  name: false,
  email: false,
  birthday: false,
  phone: false,
  city: false,
};

const UserDataItem = () => {
  const [state, setState] = useState(initialState);
  const [blur, setBlur] = useState(initialStateBlur);
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  // const dispatch = useDispatch();
  // const user = useSelector(user????);

  const onChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    setState({ ...state, [name]: value });
  };

  const onClick = () => {
    // dispatch(updateUser(initialState));
    setFormErrors(validateUserForm(state));
    // setIsSubmit(true);
  };

  const onFocus = event => {
    const { name } = event.target;

    setBlur({ ...blur, [name]: true });
  };

  const onBlur = event => {
    const { name } = event.target;

    setBlur({ ...blur, [name]: false });
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(state);
  //   }
  // }, [formErrors]);

  const { name, birthday, email, phone, city } = state; // or user

  return (
    <div className={styles.user_container}>
      <div className={styles.user_form}>
        <label className={styles.user_label}>Name</label>
        <div className={styles.user_input_wrapper}>
          <input
            name="name"
            className={styles.user_input}
            type="text"
            value={name}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          <button type="button" className={styles.user_btn} onClick={onClick}>
            {blur.name === true ? (
              <Confirm className={styles.user_svg} />
            ) : (
              <Edit className={styles.user_svg} />
            )}
          </button>
        </div>
      </div>
      <div className={styles.user_form}>
        <label className={styles.user_label}>Email</label>
        <div className={styles.user_input_wrapper}>
          <input
            name="email"
            className={styles.user_input}
            type="email"
            value={email}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />

          <button type="button" className={styles.user_btn} onClick={onClick}>
            {blur.email === true ? (
              <Confirm className={styles.user_svg} />
            ) : (
              <Edit className={styles.user_svg} />
            )}
          </button>
          <p className={styles.error}>{formErrors.email}</p>
        </div>
      </div>
      <div className={styles.user_form}>
        <label className={styles.user_label}>Birthday</label>
        <div className={styles.user_input_wrapper}>
          <input
            name="birthday"
            className={styles.user_input}
            type="text"
            value={birthday}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />

          <button type="button" className={styles.user_btn} onClick={onClick}>
            {blur.birthday === true ? (
              <Confirm className={styles.user_svg} />
            ) : (
              <Edit className={styles.user_svg} />
            )}
          </button>
        </div>
      </div>
      <div className={styles.user_form}>
        <label className={styles.user_label}>Phone</label>
        <div className={styles.user_input_wrapper}>
          <input
            name="phone"
            className={styles.user_input}
            type="text"
            value={phone}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />

          <button type="button" className={styles.user_btn} onClick={onClick}>
            {blur.phone === true ? (
              <Confirm className={styles.user_svg} />
            ) : (
              <Edit className={styles.user_svg} />
            )}
          </button>
          <p className={styles.error}>{formErrors.phone}</p>
        </div>
      </div>
      <div className={styles.user_form}>
        <label className={styles.user_label}>City</label>
        <div className={styles.user_input_wrapper}>
          <input
            name="city"
            className={styles.user_input}
            type="text"
            value={city}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />

          <button type="button" className={styles.user_btn} onClick={onClick}>
            {blur.city === true ? (
              <Confirm className={styles.user_svg} />
            ) : (
              <Edit className={styles.user_svg} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDataItem;
