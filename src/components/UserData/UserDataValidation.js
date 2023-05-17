import * as yup from 'yup';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const userPhotoValidationSchema = yup.object().shape({
  image: yup
    .mixed()
    .nullable()
    .test(
      'FILE_SIZE',
      'Uploaded file is too big',
      value => !value || value.size <= 1024 * 1024
    )
    .test(
      'FILE_FORMAT',
      'Uploaded file has unsupported format',
      value => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),
});
