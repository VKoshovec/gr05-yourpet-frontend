import React from 'react';
import { useField } from 'formik';

import styles from './UserDataItem.module.css';

const UserDataItem = ({ label, onChange, onClick, ...props }) => {
  const [field, meta] = useField(props);

  // console.log(field.name, field.value);

  return (
    <>
      <div className={styles.user_form}>
        <label className={styles.user_label}>{label}</label>
        <div className={styles.user_input_wrapper}>
          <input
            {...field}
            {...props}
            className={styles.user_input}
            // onChange={onChange}
          />
          <svg
            // onClick={event => onClick(event)}
            className={styles.user_svg}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="13"
            viewBox="0 0 18 13"
            fill="none"
          >
            <title>confirm</title>
            <path
              d="M17 1L6 12L1 7"
              stroke="#54ADFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={styles.error_wrapper}>
        {meta.touched && meta.error ? (
          <div className={styles.error}>{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

export default UserDataItem;
