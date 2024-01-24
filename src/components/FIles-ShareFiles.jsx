import React, { useRef, useState } from 'react'
import iconStorage from "../Images/icons/icon-storage.png"
import TableWithMoreButton from '../components/Test'
import "../loadingCss/InfiniteLoader.css"




export default function FileSharedComp() {

  const [downloadDetailData , setDonwloadDetailsData] = useState([])
  const [clickedDownloadIndex , setClickedDownloadIndex] = useState(null)
  const [btnGreen , setBtnGreen] = useState(false)
  const [selectedRow , setSelectedRow] = useState()
  const [downloadLink , setDownloadLink] = useState('')
 
  const IssueClaim = async (index) => {

  }

  const downloadFile = (index) =>{

  }

  const getFile = (index) =>{

  }



  return (
    <section className='mt-8 w-full'>
      <div className='text-white text-[16px] px-2 py-2'>
        <h2>SHARED FILES</h2>
      </div>
      {/* <div className='flex my-3'>
        <div>
          <img src={iconStorage} alt="" className='w-[20px] inline-block text-white' />
        </div>

        <div className='ml-2'>
          <h3 className='text-white'>/ DASHBOARD / FILES / SHARED FILES</h3>
        </div>
      </div> */}

      {/* Show Import Items */}
      <div className={`w-full`}>
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
                        <button className='w-full '>

                          <div className='ml-3'>
                            <div>{item.file_name}</div>
                            <div className='text-gray-500'>{item.itemCode}</div>
                          </div>
                        </button>
                      </div>


                    </td>

                    <td className='flex flex-row p-3 gap-2 '>

                      {/*end file download button */}
                      <div className='w-[50px] flex items-end justify-end mr-2'>
                        <h3>{item.file_size}</h3>

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


                    </td>

                  </tr>

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
                                
                              </div>


                              <div className='flex flex-row gap-x-4'>
                                <div className='flex items-center justify-center w-6 h-6  '>
                                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3099 18.6881C12.5581 19.3396 11.4419 19.3396 10.6901 18.6881L5.87088 14.5114C4.47179 13.2988 5.32933 11 7.18074 11L9.00001 11V3C9.00001 1.89543 9.89544 1 11 1L13 1C14.1046 1 15 1.89543 15 3L15 11H16.8193C18.6707 11 19.5282 13.2988 18.1291 14.5114L13.3099 18.6881ZM11.3451 16.6091C11.7209 16.9348 12.2791 16.9348 12.6549 16.6091L16.8193 13H14.5C13.6716 13 13 12.3284 13 11.5V3L11 3V11.5C11 12.3284 10.3284 13 9.50001 13L7.18074 13L11.3451 16.6091Z" fill="#ffffff"></path> </g></svg>
                                </div>

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


    </section>
  )
}
