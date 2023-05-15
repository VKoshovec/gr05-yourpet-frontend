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
