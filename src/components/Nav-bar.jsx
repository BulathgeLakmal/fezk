import MainMerkle from '../merkle'
import React, {useEffect, useState } from 'react'
import iconUser from "../Images/icons/icon-male-user.png"
import { useDispatch, useSelector } from 'react-redux'
import iconMenu from "../Images/icons/icons-menu.png"
import toggleSidebarSlice from '../reducers/toggleSidebar'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import { Validation } from '../components/Login_Register/Validation';
import loaderGif from '../Images/Animation-gifs/loading-6324_256.gif'
import closeIcon from "../Images/icons/icons8-close-30.png"
const {ethers} = require('ethers')


let initialValues = {
  firstName : '',
  lastName : '',
  email : '',
  userName : '',
  address : '',
  contactNumber : ''
}

function Navbar({
  
}) {
  const [toggleSuccess,setToggleSuccess] = useState(false);
  const dispatch = useDispatch();  
  const Navigate = useNavigate();
  const [isLoading , setIsLoading] = useState(false)
  const contractAddress = '0xB2724675c46Ea9365FA86d43E70D3932196380A9'
  let provider = new ethers.BrowserProvider(window.ethereum);
  
  const UdId = useSelector((state) => state.DidReducer)

  const abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isProofCreated",
          "type": "bool"
        }
      ],
      "name": "ProofCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isRootUpdated",
          "type": "bool"
        }
      ],
      "name": "RootUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isUserRegistered",
          "type": "bool"
        }
      ],
      "name": "UserRegistered",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isUserRegistered",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "merkleRoot",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "registeredUsers",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32[]",
          "name": "_proof",
          "type": "bytes32[]"
        }
      ],
      "name": "updateProof",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_merkleRoot",
          "type": "bytes32"
        }
      ],
      "name": "updateRoot",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "user",
      "outputs": [
        {
          "internalType": "string",
          "name": "fname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "lname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "email",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "username",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "mobilenumber",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "country",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_merkleRoot",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_fname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_lname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_email",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_username",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_mobilenumber",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_country",
          "type": "string"
        }
      ],
      "name": "verifyRoot",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32[]",
          "name": "_proof",
          "type": "bytes32[]"
        }
      ],
      "name": "verifyUser",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  
  // get the wallet address 
  const walletAddress = useSelector((state) => state.WalletAddressReducer)

  const [toggleVal,setToggleVal] = useState(false)
  const {values , handleChange, handleSubmit, errors } = useFormik({
    initialValues : initialValues,
    validationSchema: Validation,

    // get the values from the form
    onSubmit : async  (values) =>{
      setIsLoading(true);
      const data = {
        walletAddress : walletAddress,
        fname : values.firstName,
        lname : values.lastName,
        email : values.email,
        userName : values.userName,
        address : values.address,
        mobile : values.contactNumber
      }
      const details = JSON.stringify(data);
      console.log(details)
      // let popup = document.getElementById("popup"); 
      
      await fetch("http://localhost:3000/userInput", {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          walletAddress : walletAddress,
          fname : values.firstName,
          lname : values.lastName,
          email : values.email,
          userName : values.userName,
          address : values.address,
          mobile : values.contactNumber
        })
      })

      await MainMerkle();
      
      
      const res1 = await fetch("http://localhost:3000/root")
      const root = await res1.json();
      console.log("this is the rtoot " , root[0].root)
      
     
      
      // contract function user ID creation
      try {
        const signer = await provider.getSigner();
        const userIdContract = new ethers.Contract(contractAddress , abi , signer)
        const contract = await userIdContract.verifyRoot(root[0].root,values.firstName,values.lastName,values.email,values.userName,values.contactNumber,values.address)
        console.log(contract)

      } catch (error) {
        console.log(error)  
      }
 
      // values.firstName = '';
      // values.lastName = '';
      // values.email = '';
      // values.password = '';
      // values.userName = '';
      // values.address = '';
      // values.contactNumber = '';

      // setToggleVal(false)

      setToggleSuccess(true)
      setToggleVal(false)
      setTimeout(() => {
       setToggleSuccess(false);
      }, 2000);
    }
  })


  
  useEffect(() => {
      // window.ethereum.on('accountsChanged' , accountChanged)
  });

  const trimDid = UdId.substring(0, 4) + "..." + UdId.substring(60);

  const toggle = () =>{
    dispatch(toggleSidebarSlice.actions.toggleSidebar())
  }

  const toggleReg = () =>{
    setToggleVal(!toggleVal)
  }

  return (
    <section className=''>
     <div className='fixed top-3 lg:pl-[270px] md:px-2 sm:px-2 min-[320px]:px-2 w-full px-2 z-100'>
      {/* start-main nav bar */}
        <div className='relative flex backdrop-blur-xl bg-white/10
         w-full h-[70px] rounded-md text-white items-center px-4 justify-between'>

          {/* left side */}
          <div className='text-[1.3rem]'>
            {/* <h3>TESTNET  </h3> */}
          </div>

          {/* right side */}
          <div className='flex gap-2 text-[1rem] items-center'>
            {/* img */}
            <div>
              <img src={iconUser} alt="" className='w-[25px]'/>
            </div>

            {/* name and the other */}
            <div className='flex gap-2 uppercase lg:mr-0 md:mr-6 sm:mr-6 min-[320px]:mr-6'>
              <button className='px-2 py-2 rounded-md bg-bethel-green/60'>
                Connected : {trimDid && trimDid}
              </button>
            </div>

            {/* create Id  */}
            <div className='flex gap-2 uppercase lg:mr-0 md:mr-6 sm:mr-6 min-[320px]:mr-6 relative'>
              <button className='px-8 py-2 text-white rounded-md bg-red-600/70' onClick={toggleReg} >
                KYC
              </button>
              
              {/* Register form */}
              { toggleVal && 
              <div className='absolute right-[200px] top-[665px]'> 

              
              
                <div className='flex items-center justify-center bg-transparent z-200'>
                    <div class="w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-b-gray-950 border-r-[10px] border-r-transparent absolute bottom-[594px] left-[165px] z-40">
                </div>
                {/*Form Card  */}
                <div className='w-[300px] bottom-6 -left-[85px] absolute backdrop-blur-md bg-gray-950  shadow-[1px_1px_10px_1px_] shadow-white/20
                  rounded-md items-center justify-center ;
                  '>

                {/* close button for the register comp */}
                <div className='absolute top-5 right-3 font-medium text-lg z-[1000]'>
                  <button onClick={toggleReg}>
                    <img src={closeIcon} alt="" className='w-[18px]' />
                  </button>
                </div>
                {/* end of the close button  */}
                
                {/* Heading section */}
                <div className='relative'>
                  <h1 className='text-center text-[18px] text-white pt-4 uppercase'>Register</h1>
                  <div className='absolute left-12'>

                </div>
                </div>
                
                {/* Form section */}
                <form onSubmit={handleSubmit} className='px-5' >
          
                  <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-[0.2px] rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                    <input class="w-full pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
          type="text" name='userName' value={values.userName} placeholder='User Name'onChange={handleChange}
                    />
                    {errors.userName && <h4 className='text-red-600 absolute bottom-[-25px] text-[10px]'>{errors.userName}</h4>}
                  </div>
      
                  <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-[0.2px] rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 20 20"
        fill="currentColor">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd" />
                    </svg>
                    <input class="w-full pl-2 outline-none border-none bg-transparent text-white text-[12px]"
                    type="text" name='firstName' value={values.firstName} placeholder='First Name'onChange={handleChange}  />
                    {errors.firstName && <h4 className='text-red-600 absolute bottom-[-25px] text-[10px]'>{errors.firstName}</h4>}
                  </div>
      
                  <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-[0.2px] rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 20 20"
        fill="currentColor">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd" />

                    </svg>
                    <input class="w-full pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
                    type="text" name='lastName' value={values.lastName} placeholder='Last name'onChange={handleChange}/>
                    {errors.lastName && <h4 className='text-red-600 absolute bottom-[-25px] text-[10px]'>{errors.lastName}</h4>}

                  </div>
      
                  <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-[0.2px] rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input class="w-full pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
                    type="email" name='email' value={values.email} placeholder='Enter email' onChange={handleChange}/>
                    {errors.email && <h4 className='text-red-600 absolute bottom-[-25px] text-[10px]'>{errors.email}</h4>}
                  </div>
      
                  <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-[0.2px] rounded-md'>
                  <svg fill="#ffffff" className='w-5 h-5' viewBox="0 -8 72 72" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>world</title><path d="M59.25,12.42l-.83.27L54,13.08l-1.27,2-.91-.29L48.23,11.6l-.52-1.66L47,8.16l-2.23-2-2.63-.51-.06,1.2,2.58,2.52,1.26,1.48-1.42.75-1.15-.34-1.73-.73,0-1.39L39.42,8.2l-.75,3.29L36.38,12l.23,1.84,3,.57.52-2.93,2.46.37,1.14.67h1.84L46.8,15l3.34,3.38-.25,1.32-2.69-.34-4.64,2.34-3.34,4-.43,1.78H37.58l-2.23-1-2.17,1,.54,2.29.94-1.09,1.67,0-.12,2,1.38.4L39,32.67,41.2,32l2.57.4,3,.8,1.48.18,2.52,2.86,4.87,2.86-3.15,6-3.32,1.54-1.26,3.44-4.81,3.21-.51,1.85A28,28,0,0,0,59.25,12.42Z"></path><path d="M39.22,42.63l-2-3.78L39.05,35l-1.87-.56-2.1-2.11-4.66-1L28.88,28v1.92H28.2l-4-5.44V20l-2.94-4.78-4.67.83H13.43l-1.59-1,2-1.6-2,.46A28,28,0,0,0,36,56a29,29,0,0,0,3.51-.25l-.29-3.39s1.29-5,1.29-5.2S39.22,42.63,39.22,42.63Z"></path><path d="M18.41,9l5-.7,2.29-1.25,2.58.74,4.12-.23,1.42-2.22,2.05.34,5-.47,1.38-1.52,2-1.29,2.74.41,1-.15a27.91,27.91,0,0,0-33.51,7.49h0ZM37.18,2.78,40,1.21l1.84,1.06-2.66,2-2.54.26-1.14-.74ZM28.71,3,30,3.54,31.63,3l.9,1.56-3.82,1L26.88,4.5S28.67,3.35,28.71,3Z"></path></g></svg>
                  <input class="w-full pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
                      type="address" name='address' value={values.address} placeholder='Country' onChange={handleChange}/>
                      {errors.address && <h4 className='text-red-600 absolute bottom-[-25px] text-[10px]'>{errors.address}</h4>}
                  </div>
      
                  <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-[0.2px] rounded-md'>
                  <svg viewBox="0 0 24 24" fill="none" className='w-5 h-5' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <input class="w-full pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
                    type="number" name='contactNumber' value={values.contactNumber} placeholder='Contact Number'onChange={handleChange}/>
                    {errors.contactNumber && <h4 className='text-red-600 absolute bottom-[-25px] text-[10px]'>{errors.contactNumber}</h4>}
                  </div>
      
                  <div className='w-full py-2'>
                  <button type="submit" class="block w-full hover:bg-[#aaff00]/80  py-2 rounded-xl hover:text-white font-semibold mb-2 uppercase mt-8 bg-white text-black transition-all ease-in-out" >
                  { !isLoading && <h3>Register</h3>} { isLoading && <div className='flex justify-center w-full'><img src={loaderGif} alt='' className='flex w-[100px] py-1 justify-center' /></div>}
      
                  </button>
                  </div>

      
     
                </form>
            
                </div> 

                </div>
                
              </div>}


             { toggleSuccess && 
              <div className='w-[200px] bg-black/20 border-bethel-green border-[1px]  h-[40px] rounded-sm absolute -bottom-[70px]  -right-4 py-2 flex-col flex popup items-center justify-center text-white' id="popup">
              <div className='flex flex-row items-center justify-center gap-x-2'>
                <button className="rounded-full shadow-md" >
                <svg viewBox="0 0 24 24" fill="none" className='w-6' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#aaff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#aaff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
                <h1 className='text-md font-md text-bethel-green '>Success!</h1>
              </div>                
              </div>
             } 

            </div>

          </div>
        



          {/* toggle sidebar  */}
          <button onClick={toggle} className='absolute right-3 lg:hidden md:flex sm:flex min-[32px]:flex'>
            <img src={iconMenu} alt="" className='w-[25px]'/>
          </button>
          

          

        </div>
      {/* end-nav bar */}   
    </div> 
    


    
    </section>
  )
}

export default Navbar
