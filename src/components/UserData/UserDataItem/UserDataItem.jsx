import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { toast } from 'react-toastify';

// import { validateUserForm } from 'helpers';

import { ReactComponent as Confirm } from '../../assets/images/icon/check.svg';
import { ReactComponent as Edit } from '../../assets/images/icon/edit-2.svg';

import styles from './UserDataItem.module.css';

const initialStateBlur = {
  name: false,
  email: false,
  birthday: false,
  phone: false,
  city: false,
};

const initialValues = {
  name: 'Anna ',
  email: 'anna00@gmail.com',
  birthday: '00.00.0000',
  phone: '+38000000000',
  city: 'Kiev',
};

const UserDataItem = () => {
  const [blur, setBlur] = useState(initialStateBlur);

  const onFocus = event => {
    const { name } = event.target;

    setBlur({ ...blur, [name]: true });
  };

  const onBlur = event => {
    const { name } = event.target;

    console.log(event.target);

    setBlur({ ...blur, [name]: false });
  };

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      console.log('submit', values);
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Required'),
      email: yup.string().email().required('Required'),
      birthday: yup.string(),
      phone: yup.string().required('Required'),
      city: yup.string(),
    }),
  });

  // const handleError = error => {
  //   return toast.error(error);
  // };

  // const { name, birthday, email, phone, city } = state; // or user

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
            type="submit"
            className={styles.user_btn}
            onSubmit={formik.handleSubmit}
          >
            {blur.name === true ? (
              <Confirm className={styles.user_svg} />
            ) : (
              <Edit className={styles.user_svg} />
            )}

            {/* {formik.touched.name ? (
              <Confirm className={styles.user_svg} />
            ) : (
              <Edit className={styles.user_svg} />
            )} */}
          </button>
          {formik.errors.name && formik.touched.name && (
            <div className={styles.user_error}>{formik.errors.name}</div>
          )}
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
            {formik.errors.email && formik.touched.email && (
              <div className={styles.user_error}>{formik.errors.email}</div>
            )}
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
            {formik.errors.phone && formik.touched.phone && (
              <div className={styles.user_error}>{formik.errors.phone}</div>
            )}
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
            {formik.errors.city && formik.touched.city && (
              <div className={styles.user_error}>{formik.errors.city}</div>
            )}
          </div>
        </div>
      </form>
    </div>

    // <div className={styles.user_container}>
    //   {/* <form onSubmit={formik.handleSubmit}> */}
    //   <div className={styles.user_form}>
    //     <label className={styles.user_label}>Name</label>
    //     <div className={styles.user_input_wrapper}>
    //       <input
    //         name="name"
    //         className={styles.user_input}
    //         type="text"
    //         value={formik.values.name}
    //         onChange={formik.handleChange}
    //       />
    //       <button
    //         type="button"
    //         className={styles.user_btn}
    //         // onSubmit={formik.handleSubmit}
    //       >
    //         {formik.touched.name && !formik.errors.name ? (
    //           <Confirm className={styles.user_svg} />
    //         ) : (
    //           <Edit className={styles.user_svg} />
    //         )}
    //       </button>
    //       {formik.errors.name && formik.touched.name && (
    //         <div>{formik.errors.name}</div>
    //       )}
    //     </div>
    //   </div>
    //   <div className={styles.user_form}>
    //     <label className={styles.user_label}>Email</label>
    //     <div className={styles.user_input_wrapper}>
    //       <input
    //         name="email"
    //         className={styles.user_input}
    //         type="email"
    //         value={formik.values.email}
    //         onChange={formik.handleChange}
    //       />

    //       <button type="submit" className={styles.user_btn}>
    //         {/* {blur.email === true ? (
    //           <Confirm className={styles.user_svg} />
    //         ) : (
    //           <Edit className={styles.user_svg} />
    //         )} */}
    //       </button>
    //       {/* <p className={styles.error}>{formErrors.email}</p> */}
    //     </div>
    //   </div>
    //   <div className={styles.user_form}>
    //     <label className={styles.user_label}>Birthday</label>
    //     <div className={styles.user_input_wrapper}>
    //       <input
    //         name="birthday"
    //         className={styles.user_input}
    //         type="text"
    //         value={formik.values.birthday}
    //         onChange={formik.handleChange}
    //       />

    //       <button type="submit" className={styles.user_btn}>
    //         {/* {blur.birthday === true ? (
    //           <Confirm className={styles.user_svg} />
    //         ) : (
    //           <Edit className={styles.user_svg} />
    //         )} */}
    //       </button>
    //     </div>
    //   </div>
    //   <div className={styles.user_form}>
    //     <label className={styles.user_label}>Phone</label>
    //     <div className={styles.user_input_wrapper}>
    //       <input
    //         name="phone"
    //         className={styles.user_input}
    //         type="text"
    //         value={formik.values.phone}
    //         onChange={formik.handleChange}
    //       />

    //       <button type="submit" className={styles.user_btn}>
    //         {/* {blur.phone === true ? (
    //           <Confirm className={styles.user_svg} />
    //         ) : (
    //           <Edit className={styles.user_svg} />
    //         )} */}
    //       </button>
    //       {/* <p className={styles.error}>{formErrors.phone}</p> */}
    //     </div>
    //   </div>
    //   <div className={styles.user_form}>
    //     <label className={styles.user_label}>City</label>
    //     <div className={styles.user_input_wrapper}>
    //       <input
    //         name="city"
    //         className={styles.user_input}
    //         type="text"
    //         value={formik.values.city}
    //         onChange={formik.handleChange}
    //       />

    //       <button type="submit" className={styles.user_btn}>
    //         {/* {blur.city === true ? (
    //           <Confirm className={styles.user_svg} />
    //         ) : (
    //           <Edit className={styles.user_svg} />
    //         )} */}
    //       </button>
    //     </div>
    //   </div>
    //   {/* </form> */}
    // </div>
  );
};

export default UserDataItem;

// const UserDataItem = () => {
//   const [state, setState] = useState(initialState);
//   const [blur, setBlur] = useState(initialStateBlur);
//   const [formErrors, setFormErrors] = useState({});
//   // const [isSubmit, setIsSubmit] = useState(false);

//   // const dispatch = useDispatch();
//   // const user = useSelector(user????);

//   const onChange = event => {
//     event.preventDefault();
//     const { name, value } = event.currentTarget;

//     setState({ ...state, [name]: value });
//   };

//   const onClick = () => {
//     // dispatch(updateUser(initialState));
//     setFormErrors(validateUserForm(state));
//     // setIsSubmit(true);
//   };

//   const onFocus = event => {
//     const { name } = event.target;

//     setBlur({ ...blur, [name]: true });
//   };

//   const onBlur = event => {
//     const { name } = event.target;

//     setBlur({ ...blur, [name]: false });
//   };

//   // useEffect(() => {
//   //   console.log(formErrors);
//   //   if (Object.keys(formErrors).length === 0 && isSubmit) {
//   //     console.log(state);
//   //   }
//   // }, [formErrors]);

//   const { name, birthday, email, phone, city } = state; // or user

//   return (
//     <div className={styles.user_container}>
//       <div className={styles.user_form}>
//         <label className={styles.user_label}>Name</label>
//         <div className={styles.user_input_wrapper}>
//           <input
//             name="name"
//             className={styles.user_input}
//             type="text"
//             value={name}
//             onChange={onChange}
//             onBlur={onBlur}
//             onFocus={onFocus}
//           />
//           <button type="button" className={styles.user_btn} onClick={onClick}>
//             {blur.name === true ? (
//               <Confirm className={styles.user_svg} />
//             ) : (
//               <Edit className={styles.user_svg} />
//             )}
//           </button>
//         </div>
//       </div>
//       <div className={styles.user_form}>
//         <label className={styles.user_label}>Email</label>
//         <div className={styles.user_input_wrapper}>
//           <input
//             name="email"
//             className={styles.user_input}
//             type="email"
//             value={email}
//             onChange={onChange}
//             onBlur={onBlur}
//             onFocus={onFocus}
//           />

//           <button type="button" className={styles.user_btn} onClick={onClick}>
//             {blur.email === true ? (
//               <Confirm className={styles.user_svg} />
//             ) : (
//               <Edit className={styles.user_svg} />
//             )}
//           </button>
//           <p className={styles.error}>{formErrors.email}</p>
//         </div>
//       </div>
//       <div className={styles.user_form}>
//         <label className={styles.user_label}>Birthday</label>
//         <div className={styles.user_input_wrapper}>
//           <input
//             name="birthday"
//             className={styles.user_input}
//             type="text"
//             value={birthday}
//             onChange={onChange}
//             onBlur={onBlur}
//             onFocus={onFocus}
//           />

//           <button type="button" className={styles.user_btn} onClick={onClick}>
//             {blur.birthday === true ? (
//               <Confirm className={styles.user_svg} />
//             ) : (
//               <Edit className={styles.user_svg} />
//             )}
//           </button>
//         </div>
//       </div>
//       <div className={styles.user_form}>
//         <label className={styles.user_label}>Phone</label>
//         <div className={styles.user_input_wrapper}>
//           <input
//             name="phone"
//             className={styles.user_input}
//             type="text"
//             value={phone}
//             onChange={onChange}
//             onBlur={onBlur}
//             onFocus={onFocus}
//           />

//           <button type="button" className={styles.user_btn} onClick={onClick}>
//             {blur.phone === true ? (
//               <Confirm className={styles.user_svg} />
//             ) : (
//               <Edit className={styles.user_svg} />
//             )}
//           </button>
//           <p className={styles.error}>{formErrors.phone}</p>
//         </div>
//       </div>
//       <div className={styles.user_form}>
//         <label className={styles.user_label}>City</label>
//         <div className={styles.user_input_wrapper}>
//           <input
//             name="city"
//             className={styles.user_input}
//             type="text"
//             value={city}
//             onChange={onChange}
//             onBlur={onBlur}
//             onFocus={onFocus}
//           />

//           <button type="button" className={styles.user_btn} onClick={onClick}>
//             {blur.city === true ? (
//               <Confirm className={styles.user_svg} />
//             ) : (
//               <Edit className={styles.user_svg} />
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
