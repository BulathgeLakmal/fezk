import QRCode from 'react-qr-code'
import youKnow from "../../Images/BG-Images/big_data.jpg"
import React from "react"
import { useAsyncError, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import didSlice from '../../reducers/didRedcuer';
import loader from "../../Images/Animation-gifs/loading-6324_256.gif"
import heroVid from '../../Images/Videos/video.mp4';
import { useEffect, useState } from "react";
import loaderGif from '../../Images/Animation-gifs/loading-6324_256.gif'
import badRequest from "../../Images/BG-Images/bad_request2.png"
import WalletAddressSlice from '../../reducers/WalletAddressSlice';
const {ethers} = require("ethers");

function Login() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [Udid , setUdid] = useState(null)

  useEffect(() =>{
  },[])

  // const dispatch = useDispatch();
    
  // const connectWallet = async () =>{
  //   if(window.ethereum){
  //     try {
  //       const accounts = await window.ethereum.request({method : "eth_requestAccounts"})
  //       dispatch(WalletAddressSlice.actions.saveWalletAddress(accounts[0]))
  //       Navigate('/dashboard')
      
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }else {
  //     alert("Please install Metamask to Connect Wallet !")
  //   }
  // }

  // for the verification funcs
  const [sessionID, setSessionID] = useState()
  const [qrCodeData, setQrCodeData] = useState();
  const [isHandlingVerification, setIsHandlingVerification] = useState(false);
  const [verificationCheckComplete, setVerificationCheckComplete] = useState(false);
  const [verificationMessage, setVerfificationMessage] = useState("");
  const [onVerificationResult , setOnverificationResult] = useState(false);
  const [signUpQRData , setSignUpQRData] = useState()
  const [isLoadingCreateID , setIsLoadingCreateID] = useState(false)
  const [serverErrorFetch , setServerErrorFetch] = useState(false)

  const [sectionHide , setSectionHide] = useState(true)

  // show the Sign in content
  const [showSignIn , setShowSignIn] = useState(false)

  const auth = async () =>{

    try {
      const authRequest = await fetch(process.env.REACT_APP_LOGIN_QR_URL)
      setQrCodeData(await authRequest.json())

      const sessionID = authRequest.headers.get('x-id');
      setSessionID(sessionID)

      dispatch(WalletAddressSlice.actions.saveWalletAddress(sessionID))

      const interval = setInterval(async () => {
        try {
          const sessionResponse = await fetch(process.env.REACT_APP_SESSION_RESPONSE_URL + sessionID);
          if (sessionResponse.status === 200) {
            const did = await sessionResponse.json()
            setVerfificationMessage("Verify Proofed!")
            setIsHandlingVerification(false)
            setOnverificationResult(true)
            setVerificationCheckComplete(true);
            dispatch(didSlice.actions.didStore(did.id))

            setTimeout(() => {
              Navigate("/dashboard");
            }, 1000);
            setTimeout(() => {
              setVerificationCheckComplete(false);
            }, 1000);
            clearInterval(interval);
          }

          if (sessionResponse.rejected) {
            setVerfificationMessage("Authentication Fail")
            setIsHandlingVerification(false)
          }
          if (sessionResponse.status === 102) {
            setIsHandlingVerification(true)

          }
        } catch (e) {
          console.log('err->', e);
        }
      }, 3000);
    } catch (error) {
      setServerErrorFetch(true);
    } 
    }
      

useEffect(() => {
  auth();
},
[]);

  // QR open and Close toggle
  const [QRtoggle , setQRtoggle] = useState(false)
  // const [QRtoggle2 , setQRtoggle2] = useState(false)
  const [showIssueID , setShowIssueID] = useState(false)
  const [error,setError] = useState("")


  const [QRLink, setQRLink] = useState('')
  const [did , setDid] = useState(null)
  const [firstName , setFistName] = useState('')
  const [LastName  , setLastName] = useState('')
  const [email  , setEmail] = useState('')

  const dispachEvent = () => {
    const _authEvent = new CustomEvent('authEvent', { detail: "iden3comm://?request_uri=https://issuer-admin.polygonid.me/v1/qr-store?id=7ced269c-b345-4c82-bf4b-f89ffe62cd37" });
    document.dispatchEvent(_authEvent);
  }

  // handle did submit function  ---->
  const handleDidSubmit = async (e) =>{
    e.preventDefault();

    if(!did){
      setError("Did is Required!")
      return;
    }

    setError('')
    setIsLoadingCreateID(true)
    try {
      const QRdata = await fetch(process.env.REACT_APP_SIGNUP_QR_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "owner_did": did,
            "owner_email" : "test@test.com", 
            "first_name" : "test",
            "last_name"  : "testLast",
          })
      })
      
      if(QRdata.status === 200){
        setSectionHide(false)
        setSignUpQRData(await QRdata.json())
      }
      // setIsLoadingCreateID(false)
    } catch (error) {
      console.log(error)
    }
    
    setTimeout(() => {
      console.log("this is a delayy")
    }, 1000);

    // fetch did here
 

    // setQRLink("iden3comm://?request_uri=https://issuer-api2.bethel.network/v1/qr-store?id=ce6d0f12-c988-4def-9af5-228f1391c089")
    // show issue ID

    setShowIssueID(true) 
    setDid('')
  }

  // Sign up qr toggle 
  const QRRtoggle2 = () =>{
    setSectionHide(true)
    setShowSignIn(false)
    setQRLink("")
    setError('')
  }

  const SignInQR = () =>{
    if(signUpQRData){
      setSignUpQRData(null)
      setShowSignIn(true)
      return
    }
    setShowSignIn(true)

  }

  const logInQR = () =>{
    setQRtoggle(true)
    setSectionHide(false)
  }

  const closeLoginQR = () =>{
    setSectionHide(true)
    setQRtoggle(false)
  }

  return (

    <section className='w-full h-[90vh] top-[50px]'>
    <video className='absolute object-cover w-full h-full -z-10 ' src={heroVid} autoPlay loop muted/>
    
    <div className='w-full h-[100%] flex flex-col justify-center items-center text-white px-4 text-center'>
  
        {sectionHide && <div>
          <h1 className="text-[60px] font-bold ">Bethel zkStorage</h1>
        <h3 className='text-[18px] font-bold text-cetner pb-6'>Hack Proof Blockchain Based Secure Decentralised file storage with (ZKP) Zero-Knowledge Protocol</h3>
        </div>
        }
      {/* show sign in content */}
      {showSignIn  &&
      <div className='flex gap-2'>
            {sectionHide && <div className='flex gap-2'>

            {/* input field */}
            <div className='relative w-full'>
              <input type="text" className='w-[500px] border-white border-[1px] rounded-lg bg-transparent py-2 px-4 text-white' placeholder='Enter your Bethel ID'
              onChange={(e) => setDid(e.target.value)} />
            {error && <div className='my-2 pl-2 text-red-600 text-center font-bold text-[14px] pb-2 flex w-full justify-center'>{error}</div>}

            </div>

            <div>
              <button className='py-2 text-black bg-white px-4 rounded-lg font-bold text-[18px]' onClick={handleDidSubmit}>Submit</button>
            </div>

        </div>}
      </div>
      }
        {/* end of sign in content */}

      {/* server error msg */}
      { serverErrorFetch && <div className='flex flex-col items-center w-full '>
          <h1 className='text-white text-[25px] font-bold py-2'>Service is not Available</h1>
          {/* <img className="w-[250px]" src={badRequest} alt="" /> */}
      </div>
      }

    </div>
    
    <div className="-mt-64 font-bold text-center relative">
      <div>
      </div>

      {/* verification QR for */}
      { !onVerificationResult ? (
        <div className=''>
           {qrCodeData &&
                // !isHandlingVerification &&
                // !verificationCheckComplete && \
                (
                   QRtoggle ?  (
                    <div className='absolute -top-[240px] right-[40%]'>
                      <div className='relative w-[350px] rounded-xl bg-white p-4 flex flex-col items-center justify-center'>
                      <h3 className='text-black mb-2'>Please scan QR </h3>
                      <QRCode 
                        value={JSON.stringify(qrCodeData)}
                      className='flex w-64 h-64 p-1 bg-white top-0' />
                      <h3 className='text-black mb-2'>BETHEL NETWORK </h3>

                        {/* little x */}
                        <div className='absolute right-4 top-2 '>
                      <button onClick={closeLoginQR}>
                            <h3 className='text-black text-xl'>x</h3>
                          </button>
                        </div>
                        {/* close little x */}

                        
                      </div>
                    </div> ) : (
                      <div>
                        { sectionHide && <p className='py-6 text-xl text-white'>Scan QR using Bethel App to Verify your ID</p> }

                         <button onClick={logInQR}
                        className="w-[200px] mt-2 p-2 px-4 text-black bg-white rounded-md text-[20px] hover:text-white hover:bg-bethel-green/70 transition-all 1s ease-in-out"
                        >Click to Login 
                      </button>
                      
                      </div>
                     
                    )
                 
                )}

                {/* handle sign up button */}
            {qrCodeData &&
                // !isHandlingVerification &&
                // !verificationCheckComplete && \
                (
                   showSignIn ?  (
                    <div className='fixed top-[200px] right-[40%]  '>
                  <div className='relative'>
                    {signUpQRData ? (<div className='relative w-[350px] rounded-xl bg-white p-4 flex flex-col items-center justify-center'>
                      <h3 className='text-black mb-2'>Please Scan for Sign UP </h3>

                        <QRCode 
                        value={JSON.stringify(signUpQRData)}
                      className='flex w-64 h-64 p-1 bg-white top-0' />

                      <div className='absolute right-4 top-2 '>
                        <button onClick={QRRtoggle2}>
                          <h3 className='text-black text-xl'>x</h3>
                        </button>
                      </div> 
                      <h3 className='text-black mb-2 '>BETHEL ZK-STORAGE </h3> </div>) : (
                        <div>
                        </div>
                      )}

                      </div>
                       
                    </div> ) : (
                      <div>
                    <button onClick={SignInQR}
                        className="mt-2 p-2 px-4 text-black w-[200px] bg-white rounded-md text-[20px] hover:text-white hover:bg-bethel-green/70 transition-all 1s ease-in-out"
                        >Click to Sign up
                      </button>
                    <div>
                      <h3 className='text-white text-[10px] mt-2'>Version 1.2</h3>
                    </div>
                      </div>
                     
                    )
                  
                    
                  
                )}
                {/* end of the sign up button */}

                {isHandlingVerification && (
                <div className='w-full flex flex-col justify-center items-center'>
                  <p className="text-white text-[28px]">Authenticating...</p>
                  <img src={loaderGif} alt='' className='w-[150px]'/>
                </div>
              )}

            
        </div>
     
      // {/* end of the verification */}
      ) : (
      // {/* verification approved msg */}
      <div className=''>
      {/* // <p className=' text-xl text-white'>Connect Your wallet to Start the Adventure !</p>
      //       <button onClick={connectWallet} className=" p-2 px-4 mt-4 text-black bg-white rounded-md text-[20px] hover:text-white hover:bg-bethel-green/70 transition-all 1s ease-in-out">Connect Wallet</button> */}
      { verificationCheckComplete && 
      <div className='mt-24'>
        <h3 className="text-white text-xl">{verificationMessage}</h3> 
      </div>}
      </div>
      // {/* end of the verification approved*/}
      )
      }
      
    </div>
    
  </section>


  )
}

export default Login 
