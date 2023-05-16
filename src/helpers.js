export const validationFormLogin = ({ email, password }) => {
  const errors = {};
  if (!email) {
    errors.email = 'Email is required.';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email is invalid.';
  }
  if (!password) {
    errors.password = 'Password is required.';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters long.';
  }
  return errors;
};

export const validationAuthForm = ({ email, password, confirm_password }) => {
  const errors = {};
  if (!email) {
    errors.email = 'Email is required.';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email is invalid.';
  }

  if (!password) {
    errors.password = 'Password is required.';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters long.';
  }

  if (!confirm_password) {
    errors.confirm_password = 'You must confirm your password.';
  } else if (confirm_password !== password) {
    errors.confirm_password = 'Passwords are different.';
  }
  return errors;
};

export const validateUserForm = values => {
  const errors = {};

  const regexEmail =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const regexPhone =
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!regexEmail.test(values.email)) {
    errors.email = 'This is not valid email';
  }
  if (!values.phone) {
    errors.phone = 'Phone is required';
  } else if (!regexPhone.test(values.phone)) {
    errors.phone = 'This is not valid phone';
  }

  return errors;
};
