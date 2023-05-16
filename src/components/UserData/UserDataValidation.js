import * as yup from 'yup';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const userValidationSchema = yup.object().shape({
  file: yup
    .mixed()
    .nullable()
    .test(
      'FILE_SIZE',
      'Uploaded file is too big',
      value => !value || value.size <= 640 * 480
    )
    .test(
      'FILE_FORMAT',
      'Uploaded file has unsupported format',
      value => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),
  // name: yup.string(),
  // email: yup.string().email().required('Email is required'),
  // birthday: yup.string(),
  // phone: yup.string().required('Phone is required'),
  // city: yup.string(),
});
