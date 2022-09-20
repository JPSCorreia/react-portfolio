import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactSchema = yup.object().shape({
  user_name: yup.string().required('Name is required.'),
  user_email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required.'),
  user_phone: yup.string().matches(phoneRegExp, 'Phone number is not valid.'),
  user_subject: yup.string(),
  message: yup.string().required('Message is required.'),
});
