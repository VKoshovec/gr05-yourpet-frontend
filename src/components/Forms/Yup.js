import * as yup from 'yup';

export const schemaOfRegister = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password1: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be at most 16 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,16}$/,
      'Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 digit'
    ),
  password2: yup
    .string()
    .oneOf([yup.ref('password1'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

export const schemaOfLogin = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid Email')
    .required('Email is required')
    .trim(),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be at most 16 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,16}$/,
      'Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 digit'
    ),
});
