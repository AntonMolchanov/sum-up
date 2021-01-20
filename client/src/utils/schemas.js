import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup
    .string("Value must be a string")
    .email("It should be a valid email"),
  password: yup
    .string("Value must be a string")
    .min(6, 'Minimal length is 3 characters')
});

const registerSchema = yup.object().shape({
  name: yup
    .string("Value must be a string")
    .min(3, 'Minimal length is 3 characters'),
  email: yup
    .string("Value must be a string")
    .email("It should be a valid email"),
  password: yup
    .string("Value must be a string")
    .min(6, 'Minimal length is 3 characters')
})

export default {
  login: loginSchema,
  register: registerSchema
}