import React, { useState } from 'react'
import "../Login_Register/Register.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import loaderGif from '../../Images/Animation-gifs/loading-6324_256.gif'
import { useFormik } from 'formik';
import { Validation } from './Validation';



const initialValues = {
  firstName : '',
  lastName : '',
  email : '',
  password : '',
  cPassword : '',
  userName : ''
}

function Register() {
    const Navigate = useNavigate();
    const [isLoading , setIsLoading] = useState(false)

    const {values , handleChange, handleSubmit, errors } = useFormik({
      initialValues : initialValues,
      validationSchema: Validation,

      onSubmit : async (values) =>{
        console.log(values)
        setIsLoading(true)

          const res = await axios.post('https://mw.bethel.network/auth/register', {
                    email: values.email,
                    username: values.userName,
                    password: values.password,
                    firstName : values.firstName,
                    lastName : values.lastName,
                }, 
                {
                    withCredentials: true
                })
      try {
        res.status === 200 ? Navigate('/') : setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    })

  return (
  <section className='relative w-full min-h-screen px-5 bg-black'>
      {/* Top vector pattern */}
      <div className='flex flex-col items-center w-[98%] justify-center h-[400px] rounded-b-xl  absolute bg-black top-0'>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill path1"></path>
    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill path2"></path>
    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill path3"></path>
      </svg>
    </div>
    
    <div className='flex flex-col items-center w-[98%] justify-center h-[200px] rounded-b-xl  absolute bg-black bottom-0 rotate-180'>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill path1"></path>
    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill path2"></path>
    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill path3"></path>
      </svg>
    </div>
      
      {/* Middle content section */}
      <div className='flex items-center justify-center bg-transparent'>
        {/*Form Card  */}
      <div className='w-[400px]  bottom-8 absolute backdrop-blur-md bg-white/10 rounded-md items-center justify-center'>
        {/* Heading section */}
        <div className='relative'>
      <h1 className='text-center text-[18px] text-white pt-4 uppercase'>Register</h1>
      <div className='absolute -top-32 left-12'>
      <h3 className='text-center text-white text-[48px] font-bold'>Welcome!</h3>
      <p className='text-center text-white text-[14px]'>Enter Your email address and password details ! </p>
      </div>
        </div>
        {/* Form section */}
      <form onSubmit={handleSubmit} className='px-10 py-5'>
          
      <div className='relative flex items-center px-3 py-2 border-2 mt-8mb-4 rounded-xl'>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
        <input class="w-full pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
          type="text" name='userName' value={values.userName} placeholder='Enter User Name'
          onChange={handleChange}
        />
        {errors.userName && <h4 className='text-red-600 absolute bottom-[-25px] text-[12px]'>{errors.userName}</h4>}
      </div>
      
      <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 20 20"
        fill="currentColor">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd" />
          </svg>
        <input class="w-full pl-2 outline-none border-none bg-transparent text-white text-[12px]"
          type="text" name='firstName' value={values.firstName} placeholder='Enter First Name'
          onChange={handleChange}  
            
        />
        {errors.firstName && <h4 className='text-red-600 absolute bottom-[-25px] text-[12px]'>{errors.firstName}</h4>}

      </div>
      
      <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 20 20"
        fill="currentColor">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd" />

          </svg>
        <input class="w-full pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
          type="text" name='lastName' value={values.lastName} placeholder='Enter Last name'
          onChange={handleChange}
           
        />
        {errors.lastName && <h4 className='text-red-600 absolute bottom-[-25px] text-[12px]'>{errors.lastName}</h4>}

      </div>
      
      <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
      </svg>
        <input class="w-full pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
          type="email" name='email' value={values.email} placeholder='Enter email'
          onChange={handleChange}
        />
        {errors.email && <h4 className='text-red-600 absolute bottom-[-25px] text-[12px]'>{errors.email}</h4>}

      </div>
      <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd" />
      </svg>
        <input class="w-full pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
          type="password" name='password' value={values.password} placeholder='Enter Password'
          onChange={handleChange}
        />
        {errors.password && <h4 className='text-red-600 absolute bottom-[-25px] text-[12px]'>{errors.password}</h4>}

      </div>
      
      <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd" />
      </svg>
        <input class="w-full pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
          type="password" name='cPassword' value={values.cPassword} placeholder='Confirm password'
          onChange={handleChange}
        />
        {errors.cPassword && <h4 className='text-red-600 absolute bottom-[-25px] text-[12px]'>{errors.cPassword}</h4>}


      </div>
      <button type="submit" class="block w-full bg-[#aaff00]/80  py-2 rounded-xl text-white font-semibold mb-2 uppercase mt-8">
        { !isLoading && <h3>Sign Up</h3>} { isLoading && <div className='flex justify-center w-full'><img src={loaderGif} alt='' className='flex w-[100px] py-1 justify-center' /></div>}
      
      </button>
      <span class="text-sm ml-2  text-white">Already have an account ?</span>
        <Link to="/"><span class="text-[#aaff00] cursor-pointer"> Login</span></Link>
     
        </form>
            
      </div> 
      
      </div>
      
      {/* Footer vector pattern */}
      {/* <div class=" top-[250px] relative ">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill path1"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill path2"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
    </div> */}
  </section>

  )
}

export default Register
