import * as Yup from 'yup';import { validateSchema } from '../../common/validation/validateShema';export const singUpValidation = Yup.object().shape({  email: validateSchema.email,  password: validateSchema.password,  fullName: validateSchema.fullName});