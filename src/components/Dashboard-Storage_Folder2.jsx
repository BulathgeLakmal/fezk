import React, { useRef, useState } from 'react'
import iconStorage from "../Images/icons/icon-storage.png"
import FileSharedComp from '../components/FIles-ShareFiles'
import TableWithMoreButton from '../components/Test'
import "../loadingCss/InfiniteLoader.css"
import iconWrong from "../Images/icons/icons-close.png"
import { useDispatch, useSelector } from 'react-redux'
import FileCompBlurSlice from '../reducers/filesCompBlurReducer'



export default function DashboardStorageFolder2() {
  const childRef = useRef();
  const dispatch = useDispatch()

  const [file, setFile] = useState(null)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [uploadFail, setUploadFail] = useState(false)
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState('');
  const [uploadWait, setUploadWait] = useState(false)
  

// store variablesZ
  const Udid = useSelector((state) => state.DidReducer)
  const fileCount = useSelector((state) => state.downloadCountReducer)
  const blur = useSelector((state) => state.fileBlurReducer)

  
  const childRefFunc = () =>{
    if (childRef.current && childRef.current.getDownloadDetails) {
      childRef.current.getDownloadDetails();
    }
  }


  const upload = async () => {
    const formData = new FormData();
    formData.append("owner_id", Udid)
    formData.append("file", file)
    formData.append("file_name", file.name)
    formData.append("file_size", file.size)

    if (file) {
      setUploadWait(true)
      console.log(file)

      try {
        const res = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/upload",
        { method: 'POST', 
         body: formData
       })
        console.log(res)

        if (res.status === 200) {
          setUploadSuccess(true)
          setUploadWait(false)

          childRefFunc();

          setTimeout(() => {
            setUploadSuccess(false)
          }, 2000);

          setFile(null);
          setFileName('');
          setFileSize('')
        }
        else {

          setUploadFail(true)
          setUploadWait(false)

          setTimeout(() => {
            setUploadFail(false)
          }, 2000);

        }
      } catch (error) {
        setUploadWait(false);
        setUploadFail(true)

        setTimeout(() => {
          setUploadFail(false)
        }, 2000);
      }
    }

  }

  const handleFileUpload = (e) => {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
    setFileSize(e.target.files[0].size)
    console.log("file :",file);
  }

  const deleteUpload = () => {
    setFile(null);
    setFileName('');
    setFileSize('');
  }

  return (
    <section className='flex ' >
      <div className='w-full'>

      
        <div className={`flex ${blur} my-3`}>
          <div>
            <img src={iconStorage} alt="" className='w-[20px] inline-block text-white' />
          </div>

          <div className='ml-2'>
            <h3 className='text-white'>FILES</h3>
          </div>
        </div>

        {/* Top section with import button */}
        <div className={`${blur} flex px-3 pt-3`}>

          <div className='flex flex-row px-6 py-2 mr-3 text-white rounded-md bg-gray-100/20 gap-x-8'>
            <div className='flex flex-col items-center'>
              <h3 className='text-white text-[14px] font-bold'>0</h3>
              <h3 className='text-center uppercase text-[10px] '>Files</h3>
            </div>

            <div>
              <h3 className='text-white text-[14px] font-bold'>0 MiB</h3>
              <h3 className='text-[10px] text-center uppercase'>All Blocks</h3>
            </div>

            <input onChange={handleFileUpload} id="file-type" type="file" multiple hidden />
            <label for="file-type" id="button" className='cursor-pointer flex flex-row items-center justify-center px-2 py-1 text-white rounded-md bg-bethel-green/50'>
              Select File
            </label>
          </div>
        </div>

        {/* Show Import Items */}
        <div class={`${blur} relative after:overflow-x-auto mt-6 px-2`}>
          <table class="table-auto border-collapse w-full">

            <thead className="relative">
              <tr class="rounded-lg text-sm font-medium text-left flex justify-between bg-gray-800/20" >
                <th class="px-4 py-2  text-gray-300" >Selected Item :</th>
                <th class="px-4 py-2  text-gray-300 flex flex-row gap-x-4" >
                </th>
                {uploadWait && <div class="loader"></div>}
              </tr>
            </thead>

            <tbody class="text-sm font-normal text-gray-400">
              <tr class=" py-10">
                {fileName && <td class="px-4 py-4 flex justify-between">
                  <div>
                    {fileName}
                  </div>

                  <div className='flex gap-4'>
                    <div>
                      <h1>{fileSize} KiB</h1>
                    </div>

                    <div className="gap-2 flex items-center">
                      <button onClick={upload} className="flex gap-2 bg-bethel-green/50 px-2 py-1 rounded-md">
                        <h3 className='text-white'>Upload</h3>
                        <svg viewBox="0 0 20 15" className='w-4 h-4 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" fill-rule="evenodd" d="M9 12a1 1 0 102 0V4.26l3.827 3.48a1 1 0 001.346-1.48l-5.5-5a1 1 0 00-1.346 0l-5.5 5a1 1 0 101.346 1.48L9 4.26V12zm-5.895-.796A1 1 0 001.5 12v3.867a2.018 2.018 0 002.227 2.002c1.424-.147 3.96-.369 6.273-.369 2.386 0 5.248.236 6.795.383a2.013 2.013 0 002.205-2V12a1 1 0 10-2 0v3.884l-13.895-4.68zm0 0L2.5 11l.605.204zm0 0l13.892 4.683a.019.019 0 01-.007.005h-.006c-1.558-.148-4.499-.392-6.984-.392-2.416 0-5.034.23-6.478.38h-.009a.026.026 0 01-.013-.011V12a.998.998 0 00-.394-.796z"></path> </g></svg>
                      </button>
                      <button onClick={deleteUpload}>
                        <svg fill="#ffffff" viewBox="0 0 32 32" className='w-4 h-4 cursor-pointer' xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path> </g></svg>
                      </button>
                    </div>

                  </div>
                </td>}

              </tr>

            </tbody>
          </table>

          {/* upload success and fail  */}
          {uploadSuccess &&
            <div className=' w-[200px] bg-black/20 border-bethel-green border-[1px]  h-[40px] rounded-sm absolute
            top-[-50px] right-2 py-2 flex-col flex popup items-center justify-center text-white' id="popup">

              <div className='flex flex-row items-center justify-center gap-x-2'>
                <button className="rounded-full shadow-md">
                  <svg viewBox="0 0 24 24" fill="none" className='w-5 ' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#aaff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#aaff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
                <h1 className='text-sm font-sm text-bethel-green '>Upload Success</h1>
              </div>
            </div>
          }

          {uploadFail &&
            <div className=' w-[200px] bg-black/20 border-red-500 border-[1px]  h-[40px] rounded-sm absolute
            top-[-50px] right-2 py-2 flex-col flex popup items-center justify-center text-red-400' id="popup">
              <div className='flex flex-row items-center justify-center gap-x-2'>
                <button className="rounded-full shadow-md">
                  <img src={iconWrong} alt="" className='w-[20px]' />
                </button>
                <h1 className='text-sm font-sm text-red-500'>Upload Fail</h1>
              </div>
            </div>
          }
          {/* end of upload success msg */}
        </div>

        <div className='flex'>
          <div className='flex basis-1/2 w-full'>
            <TableWithMoreButton ref={childRef} />
          </div>

          <div className='flex basis-1/2 w-full'>
            <FileSharedComp />
          </div>
        </div>

      </div>

      
    </section>
  )
}
