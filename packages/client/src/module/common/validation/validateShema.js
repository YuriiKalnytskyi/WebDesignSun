import * as Yup from 'yup';export const validateSchema = {  image: Yup.string().required('common.isRequired'),  direction: Yup.string().required('common.isRequired'),  title: Yup.string().required('common.isRequired'),  description: Yup.string().required('common.isRequired'),  author: Yup.string().required('common.isRequired')};