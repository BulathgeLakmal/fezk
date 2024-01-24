import * as Yup from 'yup'

export const Validation = Yup.object({
  userName : Yup.string().min(3).required("Enter User Name"),
  firstName : Yup.string().min(3).required("Enter First Name"),
  lastName : Yup.string().min(3).required("Enter Last Name"),
  email : Yup.string().email("Please enter valid email Address").required("Email is Required"),
  address : Yup.string().min(5).required("Please enter address"),
  contactNumber : Yup.string().required("Please enter contact number"),
})