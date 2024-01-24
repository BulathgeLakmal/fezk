import axios from 'axios'
import React, {useState } from 'react'
import { useSelector } from 'react-redux'
// import userDataSlice from '../reducers/userDataReducer';

import loaderGif from '../Images/Animation-gifs/loading-6324_256.gif'
import { useFormik } from 'formik';
import {EditPasswordValidation} from "../components/Validations/EditPassword"

const initialValues = {
  email : '',
  oldPassword : '',
  password :'',
  cPassword : ''
}



export default function ChangePasswordProfile() {

  const [isLoading , setIsLoading] = useState(false)
  const [success , setSuccess] = useState(false)


  // get user ID from store
  const userData = useSelector((state)=> state.loginReducer)
  const userId = userData._id

  const Details = useSelector((state) =>state.userDataReducer)

  const {values , handleChange, handleSubmit, errors } = useFormik({
      initialValues : initialValues,
      validationSchema: EditPasswordValidation,

      onSubmit : async (values) =>{

        // update edit details
          setIsLoading(true);
          try {
            const passDetails = {
                email: values.email,
                oldPassword: values.oldPassword,
                newPassword: values.password
            };

            const res2 = await axios.patch('https://mw.bethel.network/auth/updatepassword/' + userId , passDetails ,{withCredentials : true})
            
            setIsLoading(false);
            setSuccess(true)

            setTimeout(() => {
              setSuccess(false)
            }, 2000);

          } catch (error) {
            setIsLoading(false)
          }
          
          }

    })

  //   }
  
  return (
    <section>
       {/* Change Password section */}
      <div className='flex flex-col h-[610px] backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5 rounded-md'>

          <div className='flex justify-center mt-6'>
            <h3 className='text-[24px] text-white uppercase'>Change Password</h3>
          </div>
            <form onSubmit={handleSubmit} className='px-10 py-2'>

              <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                  <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative" placeholder={Details.email}
                    type="email" name='email' value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && <h4 className='text-red-600 absolute bottom-[-25px] text-[12px]'>{errors.email}</h4>}

                </div>

              <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clip-rule="evenodd" />
                </svg>
                <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
                  type="password" name='oldPassword' value={values.oldPassword} placeholder='Enter your Old Password'
                  onChange={handleChange}
                />
                {errors.oldPassword && <h4 className='text-red-600 absolute bottom-[-25px] text-[12px]'>{errors.oldPassword}</h4>}

              </div>

              
             <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clip-rule="evenodd" />
                </svg>
                <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
                  type="password" name='password' value={values.password} placeholder='Enter New Password'
                  onChange={handleChange}
                />
                {errors.password && <h4 className='text-red-600 absolute bottom-[-25px] text-[12px]'>{errors.password}</h4>}

             </div>

            <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clip-rule="evenodd" />
                </svg>
                  <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
                    type="password" name='cPassword' value={values.cPassword} placeholder='Confirm Password'
                    onChange={handleChange}
                  />
                  {errors.cPassword && <h4 className='text-red-600 absolute bottom-[-25px] text-[12px]'>{errors.cPassword}</h4>}


            </div>

              
          
              <button type="submit" class="relative block w-full bg-[#aaff00]/80  py-2 rounded-xl text-white font-semibold mb-2 uppercase mt-8">
                { !isLoading && <h3>Save Changes</h3>} { isLoading && <div className='flex justify-center w-full'><img src={loaderGif} alt='' className='flex w-[100px] py-1 justify-center' /></div>}
              </button>

              { success && <h3 className='p-2 mt-2 text-sm text-center text-green-700 border-2 rounded-lg border-bethel-green'>Sucess</h3> }

              
     
            </form>
        </div>
    </section>
  )
}

