import * as Yup from 'yup'

export const EditProfileValidation = Yup.object({
  firstName : Yup.string().min(3).required("Enter First Name"),
  lastName : Yup.string().min(3).required("Enter Last Name"),
})