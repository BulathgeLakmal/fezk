import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import QRCode from 'react-qr-code'
import 'animate.css';
import { useDispatch, useSelector } from 'react-redux';
import downloadCountSlice from '../reducers/DownloadsCountReducer';
import {  useNavigate } from 'react-router-dom';
import FileCompBlurSlice from '../reducers/filesCompBlurReducer';

const TableWithMoreButton = forwardRef((props , ref) => {
  React.useImperativeHandle(ref, () => ({
    getDownloadDetails,
  }));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectQR, setSelectQR] = useState(null)
  const [dowloadQr , setDownloadQr] = useState(null)
  const [selectedDownload , setSelectedDownload] = useState(null)
  const [qrClaim , setQrClaim] = useState(null);
  const [downloadLink , setDownloadLink] = useState("")
  const [clickedDownloadIndex, setClickedDownloadIndex] = useState(null); //to catch which button was clicked
  const [downloadDetailData ,  setDonwloadDetailsData] = useState([])
  const [isShareSub, setIsShareSub] = useState(null)
  const [isRevokeSub, setIsRevokeSub] = useState(null)
  const [shareDidValue, setShareDidValue] = useState("")
  const [revokeDidValue, setRevokeDidValue] = useState("")
  const [CID , setCID] = useState("")
  const [btnGreen , setBtnGreen] = useState(false)
  

  // data for the MIDDLE QR
  const [selectIndex , setSelectIndex] = useState("24")
  const [selectedItem, setSelectedItem] = useState(null)
  const [shareDidIndex , setShareDidIndex] = useState(null)

  //vefifiation msg 
  const [shareVerify, setShareVerify] = useState(false)
  const [downloadVerify, setDownloadVerify] = useState(false) 

  // get share did
  const [shareDIDs , setShareDIDs] = useState(null)

  const did = useSelector((state) => state.DidReducer)
  const sessionID = useSelector((state) => state.WalletAddressReducer)
  const blur = useSelector((state) => state.fileBlurReducer)

  const handleMoreButtonClick = (index) => {
    setSelectedRow(index === selectedRow ? null : index);
    setIsShareSub("Disapear")
    setIsRevokeSub("Disapear")
  };
  
  // issue calim fn
  const IssueClaim = async (index) =>{

    dispatch(FileCompBlurSlice.actions.changeBlur("blur-md"))
    setSelectIndex(index)
    const selectedItem = downloadDetailData[index];
    setSelectedItem(selectedItem)
    
    const res = await fetch(process.env.REACT_APP_ISSUE_CLAIM_URL + selectedItem.owner_id + "/" + selectedItem.file_hash)
    const calimQR = await res.json()
    setSelectQR(index === selectedRow ? null : index);
    setQrClaim(calimQR.response.RawMessage)
  }

  // download file fn
  const downloadFile = async (index) => {
    setBtnGreen(false)

    dispatch(FileCompBlurSlice.actions.changeBlur("blur-md"))
    setSelectIndex(index)
    const selectedItem = downloadDetailData[index];
    setSelectedItem(selectedItem)
    console.log(selectedItem.file_hash)

    const response = await fetch(process.env.REACT_APP_GET_FILE,{
      method : "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        "file_hash" : selectedItem.file_hash,
        "didU" : did
      })
    })
    const sessionIDs = response.headers.get('x-iid');

    const downloadQrData = await response.json()
    setDownloadQr(downloadQrData)

    setClickedDownloadIndex(index)
    setSelectedDownload(index === selectedRow ? null : index);
    
    // get Response from the download
    const interval = setInterval(async () => {
      let downloadResponse = await fetch(process.env.REACT_APP_CLAIM_STATUS_URL + sessionIDs)

      if (downloadResponse.ok) {
        clearInterval(interval)
        setDownloadLink(null)
        setSelectedDownload("24")
        closeQR();

        const response2 = await fetch(process.env.REACT_APP_GET_CID, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "owner_id": did,
            "file_hash": selectedItem.file_hash
          })
        })
        
        setCID(await response2.json())

        setTimeout(() => {
          console.log(CID)
          setDownloadLink(process.env.REACT_APP_DONWLOAD_CID + CID.d_link)
        }, 2000);


        setDownloadVerify(true)
        setTimeout(() => {
          setBtnGreen(true)
          setDownloadLink(process.env.REACT_APP_DONWLOAD_CID + CID.d_link)
          setDownloadVerify(false)
        }, 2000);
        // cid = null
        downloadResponse = null;
      }

    }, 1000)
  }


  // get download details 
  const getDownloadDetails = async () =>{
    try {
      const downloadDetails = await fetch(process.env.REACT_APP_DOWNLOAD_DETAILS_URL + did)
      const data = await downloadDetails.json();
      console.log(data)
      setDonwloadDetailsData(data)
    } catch (error) {
      navigate('/dashboard')
    }
  }

  // set the file count
  try {
    dispatch(downloadCountSlice.actions.downloadCount(downloadDetailData.length))
  } catch (error) {
    navigate('/dashboard')
  }

  // donwload the file 
  const getFile = async (index) => {
    const selectedItem = downloadDetailData[index];
    setDownloadLink(process.env.REACT_APP_DONWLOAD_CID + CID.d_link)
    
  } 

  // close QRs 
  const closeQR = () =>{ 
    setSelectedDownload("24");
    setSelectQR("24")
    dispatch(FileCompBlurSlice.actions.changeBlur(null))
   }


  useEffect(() => {
    getDownloadDetails();
  }, [])

  // open and close DID input Filds
  const shareDid = (index) =>{
    setIsShareSub(index === isShareSub ? null : index)
    setIsRevokeSub("Disapear")

  }

  // Did revoke fn
  const shareDidRevoke = async (index) =>{
    const selectedItem = downloadDetailData[index]
    setIsRevokeSub(index)
    setIsShareSub("Disapear")

    
  }

  // submit revoke did
  const submitRevokeDid = async (index) =>{
    const SelectItem = downloadDetailData[index]
    console.log(shareDidValue)
    setSelectedRow("Disapear")
    setIsRevokeSub("Disapear")

    const res = await fetch(process.env.REACT_APP_ISSUE_CLAIM_URL + SelectItem.owner_id + "/" + SelectItem.file_hash)
    const calimQR = await res.json()
    const OCID = calimQR.response.RawMessage.body.credentials[0].id
    console.log(OCID)

    const shareDidRevokeResponse = await fetch(process.env.REACT_APP_REVOKE_CLAIM_URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        o_cid: OCID,
        r_cid:revokeDidValue,
        file_hash: SelectItem.file_hash
      })
    })
    console.log(shareDidRevokeResponse)
    console.log("this is Revoke Res:", await shareDidRevokeResponse.json())
  }

  // submit share Did
  const submitShareDid =async (index) =>{
    const SelectItem = downloadDetailData[index]
    setSelectedRow("Disapear")
    setIsShareSub("Disapear")

    const shareDidResponse = await fetch(process.env.REACT_APP_SHARE_CALIM_URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        o_did: did,
        s_did: shareDidValue,
        file_hash: SelectItem.file_hash
      })
    })

    if(shareDidResponse.ok){
      setShareVerify(true)
      setTimeout(() => {
        setShareVerify(false)
      }, 2000);
    }

    
  }

  // show shared items share DID s
  const showShareDid = async (index) => {
    setShareDIDs(null)
    const selectedItem = downloadDetailData[index]
    setShareDidIndex(index === shareDidIndex ? null : index)

    const shareClaimRes = await fetch(process.env.REACT_APP_GET_SHARE_CLAIMS, {
      method: "POST",
      header: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        "u_did": did,
        "file_hash": selectedItem.file_hash
      })
    })

    // console.log(await shareClaimRes.json())
    setShareDIDs(await shareClaimRes.json())

    console.log(shareDIDs)
  }


  

 
  return ( 
    <div className='flex flex-col w-full px-2 py-8'>
      <div className='text-white text-[16px] px-2 py-2'>
        <h2>MY FILES</h2>
      </div>

      {/* share Sucess msg */}
      {shareVerify &&
        <div className='fixed right-2 bottom-3 w-[200px] bg-black/20 border-bethel-green border-[1px]  h-[40px] rounded-sm
             py-2 flex-col flex popup items-center justify-center text-white' id="popup">

          <div className='flex flex-row items-center justify-center gap-x-2'>
            <button className="rounded-full shadow-md">
              <svg viewBox="0 0 24 24" fill="none" className='w-5 ' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#aaff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#aaff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
            <h1 className='text-sm font-sm text-bethel-green '>Share Claim Success</h1>
          </div>
        </div>
      }

      {/* download verfiy msg */}
      {downloadVerify &&
        <div className='fixed right-2 bottom-3 w-[200px] bg-black/20 border-bethel-green border-[1px]  h-[40px] rounded-sm
             py-2 flex-col flex popup items-center justify-center text-white' id="popup">

          <div className='flex flex-row items-center justify-center gap-x-2'>
            <button className="rounded-full shadow-md">
              <svg viewBox="0 0 24 24" fill="none" className='w-5 ' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#aaff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#aaff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
            <h1 className='text-sm font-sm text-bethel-green '>Download Verified</h1>
          </div>
        </div>
      }

      <div className={`w-full ${blur}`}>
        <div className='w-full overflow-auto lg:overflow-visible'>
          <table className='table w-full text-sm text-gray-400 border-separate border-transparent rounded-md border-spacing-2'>
            <thead className='text-gray-500 bg-gray-800/20'>
              <tr className='flex justify-between w-full'>
                <th className='p-3 text-left'>Name</th>
                <th className='p-3 text-left'></th>
              </tr>
            </thead>
            <tbody>

          {/* start of the download array  */}
          {downloadDetailData && downloadDetailData.map((item, index) => (

          <React.Fragment key={index}>
            <tr className='flex items-center justify-between bg-gray-800/20'>
              <td className='p-3'>
                <div className='flex items-center justify-center'>
                  <div className='flex items-center justify-center object-cover w-12 h-12 rounded-full'>
                      <svg width="179px" height="179px" viewBox="0 0 24 24" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 3L13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2V3ZM19 9H20C20 8.73478 19.8946 8.48043 19.7071 8.29289L19 9ZM13.109 8.45399L14 8V8L13.109 8.45399ZM13.546 8.89101L14 8L13.546 8.89101ZM10 13C10 12.4477 9.55228 12 9 12C8.44772 12 8 12.4477 8 13H10ZM8 16C8 16.5523 8.44772 17 9 17C9.55228 17 10 16.5523 10 16H8ZM8.5 9C7.94772 9 7.5 9.44772 7.5 10C7.5 10.5523 7.94772 11 8.5 11V9ZM9.5 11C10.0523 11 10.5 10.5523 10.5 10C10.5 9.44772 10.0523 9 9.5 9V11ZM8.5 6C7.94772 6 7.5 6.44772 7.5 7C7.5 7.55228 7.94772 8 8.5 8V6ZM9.5 8C10.0523 8 10.5 7.55228 10.5 7C10.5 6.44772 10.0523 6 9.5 6V8ZM17.908 20.782L17.454 19.891L17.454 19.891L17.908 20.782ZM18.782 19.908L19.673 20.362L18.782 19.908ZM5.21799 19.908L4.32698 20.362H4.32698L5.21799 19.908ZM6.09202 20.782L6.54601 19.891L6.54601 19.891L6.09202 20.782ZM6.09202 3.21799L5.63803 2.32698L5.63803 2.32698L6.09202 3.21799ZM5.21799 4.09202L4.32698 3.63803L4.32698 3.63803L5.21799 4.09202ZM12 3V7.4H14V3H12ZM14.6 10H19V8H14.6V10ZM12 7.4C12 7.66353 11.9992 7.92131 12.0169 8.13823C12.0356 8.36682 12.0797 8.63656 12.218 8.90798L14 8C14.0293 8.05751 14.0189 8.08028 14.0103 7.97537C14.0008 7.85878 14 7.69653 14 7.4H12ZM14.6 8C14.3035 8 14.1412 7.99922 14.0246 7.9897C13.9197 7.98113 13.9425 7.9707 14 8L13.092 9.78201C13.3634 9.92031 13.6332 9.96438 13.8618 9.98305C14.0787 10.0008 14.3365 10 14.6 10V8ZM12.218 8.90798C12.4097 9.2843 12.7157 9.59027 13.092 9.78201L14 8V8L12.218 8.90798ZM8 13V16H10V13H8ZM8.5 11H9.5V9H8.5V11ZM8.5 8H9.5V6H8.5V8ZM13 2H8.2V4H13V2ZM4 6.2V17.8H6V6.2H4ZM8.2 22H15.8V20H8.2V22ZM20 17.8V9H18V17.8H20ZM19.7071 8.29289L13.7071 2.29289L12.2929 3.70711L18.2929 9.70711L19.7071 8.29289ZM15.8 22C16.3436 22 16.8114 22.0008 17.195 21.9694C17.5904 21.9371 17.9836 21.8658 18.362 21.673L17.454 19.891C17.4045 19.9162 17.3038 19.9539 17.0322 19.9761C16.7488 19.9992 16.3766 20 15.8 20V22ZM18 17.8C18 18.3766 17.9992 18.7488 17.9761 19.0322C17.9539 19.3038 17.9162 19.4045 17.891 19.454L19.673 20.362C19.8658 19.9836 19.9371 19.5904 19.9694 19.195C20.0008 18.8114 20 18.3436 20 17.8H18ZM18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362L17.891 19.454C17.7951 19.6422 17.6422 19.7951 17.454 19.891L18.362 21.673ZM4 17.8C4 18.3436 3.99922 18.8114 4.03057 19.195C4.06287 19.5904 4.13419 19.9836 4.32698 20.362L6.10899 19.454C6.0838 19.4045 6.04612 19.3038 6.02393 19.0322C6.00078 18.7488 6 18.3766 6 17.8H4ZM8.2 20C7.62345 20 7.25117 19.9992 6.96784 19.9761C6.69617 19.9539 6.59545 19.9162 6.54601 19.891L5.63803 21.673C6.01641 21.8658 6.40963 21.9371 6.80497 21.9694C7.18864 22.0008 7.65645 22 8.2 22V20ZM4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673L6.54601 19.891C6.35785 19.7951 6.20487 19.6422 6.10899 19.454L4.32698 20.362ZM8.2 2C7.65645 2 7.18864 1.99922 6.80497 2.03057C6.40963 2.06287 6.01641 2.13419 5.63803 2.32698L6.54601 4.10899C6.59545 4.0838 6.69617 4.04612 6.96784 4.02393C7.25117 4.00078 7.62345 4 8.2 4V2ZM6 6.2C6 5.62345 6.00078 5.25117 6.02393 4.96784C6.04612 4.69617 6.0838 4.59545 6.10899 4.54601L4.32698 3.63803C4.13419 4.01641 4.06287 4.40963 4.03057 4.80497C3.99922 5.18864 4 5.65645 4 6.2H6ZM5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803L6.10899 4.54601C6.20487 4.35785 6.35785 4.20487 6.54601 4.10899L5.63803 2.32698Z" fill="#ffffff"></path> </g></svg>
                  </div>
                  <button onClick={() => showShareDid(index)} className='w-full '>

                  <div className='ml-3'>
                          <div>{item.file_name}</div>
                    <div className='text-gray-500'>{item.itemCode}</div>
                  </div>
                  </button>
                </div>

                 
              </td>
                
              <td className='flex flex-row p-3 gap-2 '>

                  {/*end file download button */}
                  <div className='w-[50px] flex items-end justify-end mr-2 gap-1'>
                    <h3>{item.file_size}</h3>
                    <h3>bytes</h3>

                  </div>
                <div className='relative'>
                  
                  <button onClick={() => IssueClaim(index)} className='px-2 py-1 border-2 bg-bethel-green/50 text-white rounded-md'>Issue claim</button>
                </div>

                  

                  {/* file download button */}
                <div className='relative'>
                  
                  {/* check the download link is here or not */}
                    {clickedDownloadIndex === index && btnGreen ? (<button onClick={() => getFile(index)} className={`px-2 py-1 border-2 bg-green-600 text-white rounded-md`}><a href={downloadLink} target='_blank'>Download</a></button>) 
                    :
                    (<button onClick={() => downloadFile(index)} className={`px-2 py-1 border-2 bg-red-600 text-white rounded-md`}>Download</button>)}
                  {/*end of check the download link is here or not */}
                    
                </div>

                <button onClick={() => handleMoreButtonClick(index)}>
                  <svg viewBox="0 0 24 24" fill="none"  className="w-5 h-5 " xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="18" cy="12" r="1.5" transform="rotate(90 18 12)" fill="#ffffff"></circle> <circle cx="12" cy="12" r="1.5" transform="rotate(90 12 12)" fill="#ffffff"></circle> <circle cx="6" cy="12" r="1.5" transform="rotate(90 6 12)" fill="#ffffff"></circle> </g></svg>
                </button>
              </td>

            </tr>
              {/* claim share list */}
              {
               shareDidIndex === index &&
                <div className='animate__animated animate__fadeInDown animate__faster w-full  bg-gray-800/40 px-10 flex flex-col justify-between p-2 mb-2'>
                  <div className='w-full flex justify-between items-center'>

                    {/* share claim show here */}
                    { shareDIDs && shareDIDs.map((sharedid)=>{
                      return <div className='w-full flex justify-between items-center'>
                        <h3>{sharedid}</h3>
                        <button className='px-2 py-1 bg-green-600 rounded-md border-2 border-white text-white'>
                          Revoke
                        </button>
                          </div>
                    }) 
                    }
                  </div>
                </div>
              } 
              {/* end of the claim list */}

            {selectedRow === index && (
              <tr className="menu-row relative z-[2000]"> 
                <td colSpan="3">
                  <div className="menu">
                    {/* Add your unique menu content here */}
                    <div className='relative'>
                      <div className='absolute right-2 top-[-10px] flex flex-col py-5 bg-gray-800 gap-y-4 w-[130px] items-start pl-2 rounded-md justify-center'>
                      <div className='flex flex-row gap-x-4 hover:bg-bethel-green/50 w-full p-1'>
                        <div className='flex items-center justify-center w-6 h-6'>
                        <svg fill="#ffffff" className='w-5 h-5' viewBox="0 0 32 32" id="Outlined" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Fill"> <path d="M25,22a4,4,0,0,0-3.26,1.69l-11-6.4A4,4,0,0,0,11,16a4.14,4.14,0,0,0-.1-.87L22,8.65A4,4,0,1,0,21,6a4.14,4.14,0,0,0,.1.87L10,13.35A4,4,0,1,0,7,20a4,4,0,0,0,2.66-1L21,25.6c0,.13,0,.26,0,.4a4,4,0,1,0,4-4ZM25,4a2,2,0,1,1-2,2A2,2,0,0,1,25,4ZM7,18a2,2,0,1,1,2-2A2,2,0,0,1,7,18ZM25,28a2,2,0,1,1,2-2A2,2,0,0,1,25,28Z"></path> </g> </g></svg>
                        </div>
                        {/* share button div */}
                          <div className='relative '>
                                <button onClick={() => shareDid(index)}><h3 className='text-white'>Share</h3></button>
                          </div>
                            {isShareSub === index && <div className='animate__animated animate__fadeIn animate__faster flex gap-2 absolute left-[-300px] top-1 bg-gray-800 p-4 rounded-md'>
                              <input onChange={(e) => setShareDidValue(e.target.value)} type="text" className='w-[200px] p-1 border-2 border-bethel-green/50 rounded-md ' placeholder='Enter dId here'/>
                              <button onClick={() => submitShareDid(index)} className='px-2 bg-red-600 rounded-md text-white font-bold border-[1px] border-white'>Submit</button>
                            </div> }
                      </div>
                      
                      
                      <div className='flex flex-row gap-x-4'>
                            <div className='flex items-center justify-center w-6 h-6  '>
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3099 18.6881C12.5581 19.3396 11.4419 19.3396 10.6901 18.6881L5.87088 14.5114C4.47179 13.2988 5.32933 11 7.18074 11L9.00001 11V3C9.00001 1.89543 9.89544 1 11 1L13 1C14.1046 1 15 1.89543 15 3L15 11H16.8193C18.6707 11 19.5282 13.2988 18.1291 14.5114L13.3099 18.6881ZM11.3451 16.6091C11.7209 16.9348 12.2791 16.9348 12.6549 16.6091L16.8193 13H14.5C13.6716 13 13 12.3284 13 11.5V3L11 3V11.5C11 12.3284 10.3284 13 9.50001 13L7.18074 13L11.3451 16.6091Z" fill="#ffffff"></path> </g></svg>            
                        </div>
                        {/* revoke button funcs */}
                            <div className='relative w-full'>
                              <button onClick={() => shareDidRevoke(index)}><h3 className='text-white'>Revoke</h3></button>
                            </div>

                            {isRevokeSub === index && <div className='animate__animated animate__fadeIn animate__faster flex gap-2 absolute left-[-300px] top-12 bg-gray-800 p-4 rounded-md'>
                              <input onChange={(e) => setRevokeDidValue(e.target.value)} type="text" className='w-[200px] p-1 border-2 border-bethel-green/50 rounded-md ' placeholder='Enter dId here' />
                              <button onClick={() => submitRevokeDid(index)} className='px-2 bg-red-600 rounded-md text-white font-bold border-[1px] border-white'>Submit</button>
                            </div>}
                      </div>
                      
                      </div>
                      <div className='w-0 h-0 absolute right-3 top-[-20px] rotate-[180deg]
                        border-l-[10px] border-l-transparent
                        border-t-[15px] border-t-gray-800
                        border-r-[10px] border-r-transparent'></div>
                    </div>
                    
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}


        </tbody>
          </table> 
        </div>
      </div>

      {/* the Middle issue claim QR div */}
      {selectQR === selectIndex ? (
        <div className='z-[10] flex bg-red-400 fixed lg:left-[675px] lg:top-[250px] md:left-[325px] md:top-[250px] sm:left-[175px] sm:top-[250px] min-[320px]:left-[25px] min-[320px]:top-[250px]'>
          <button onClick={closeQR} className='absolute text-white -top-[25px] left-0 z-[100px]'>
            <h3 className='z-[100] w-[28px] h-[25px] bg-red-600'>x</h3>
          </button>
          <div className='p-4 bg-white absolute z-[1000]'>
            <h3 className='flex w-full text-bold justify-center text-[14px]'> -Issue Claim For-</h3>
            <h3 className='flex w-full text-bold justify-center text-center text-[14px] text-red-600'>{selectedItem.file_name}</h3>
            <QRCode
              value={JSON.stringify(qrClaim)}
              className='flex w-128 h-128 p-1 bg-white top-0 relative ' />
          </div>

        </div>
      ) : (<div></div>)
      }

      {/* middle DOnwload QR  */}
      {selectedDownload === selectIndex ? (
        <div className='flex fixed lg:left-[675px] lg:top-[250px] md:left-[325px] md:top-[250px] sm:left-[175px] sm:top-[250px] min-[320px]:left-[25px] min-[320px]:top-[250px]'>
          <button onClick={closeQR} className='z-[100] w-[28px] h-[25px] bg-red-600'>
            <h3 className='text-white z-[100] w-[28px] h-[25px] bg-red-600'>x</h3>
          </button>
          <div className='p-4 bg-white flex flex-col w-full justify-center items-center'>
            <h3 className='flex w-full text-bold justify-center text-[14px]'> -Download Claim For-</h3>
            <h3 className='flex w-full text-bold justify-center text-[14px] text-red-600'>{selectedItem.file_name}</h3>

            <QRCode
              value={JSON.stringify(dowloadQr)}
              className='flex w-128 h-128 p-1 bg-white top-0 relative z-[200]' />
          </div>

        </div>
      ) : (<div></div>)
      }
    </div>

  );
});

export default TableWithMoreButton

