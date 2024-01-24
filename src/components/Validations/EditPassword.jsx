import * as Yup from 'yup'

export const EditPasswordValidation = Yup.object({
  email : Yup.string().email("Please enter valid email Address").required("Email is Required"),
  oldPassword : Yup.string().min(5).required("Please enter password"),
  password : Yup.string().min(5).required("Please enter password"),
  cPassword : Yup.string().oneOf([Yup.ref("password")], "password not Match").required("Please enter confirm password"),
})