import * as yup from 'yup';

export const userValidationSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email().required(),
  birthday: yup.string(),
  phone: yup.string().required('Required'),
  city: yup.string(),
});
