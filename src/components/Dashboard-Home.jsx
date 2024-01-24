import React, { useEffect, useState } from 'react'
import iconWifi from "../Images/icons/icons8-wifi-100.png"
import iconStorage from "../Images/icons/icon-storage.png"
import iconFile from "../Images/icons/icon-file.png"
import iconHome from "../Images/icons/icon-home.png"
import iconVideo from "../Images/icons/icon-video.png"
import iconImage from "../Images/icons/icons-images-96.png"
import iconFiles from "../Images/icons/icon-file.png"
import iconMusic from "../Images/icons/icons8-music-100.png"
import iconFolder from "../Images/icons/icons-folder.png"
import { Doughnut , Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { useSelector } from 'react-redux'

function DashboardHome() {
  
  // const fileCount = useSelector((state) => state.downloadCountReducer)
 
  return (

    <div className='w-full text-white'>

      {/* topic container */}
      <div className='flex mt-3 mb-5'>
        <div className=''>
          <img src={iconHome} alt="" className='w-[20px] inline-block -mt-1' /> 
        </div>

        <div className='ml-2'>
          <h3>DASHBOARD</h3>
        </div>
      </div>

      <div>
        {/* <h2 className='text-[2rem] font-bold'>DASHBOARD</h2> */}
      </div>
      {/* end- topic container */}



        {/* main container */}
        <div className='flex justify-around w-full pr-3 mt-4 lg:flex-row lg:gap-8 md:gap-4 sm:gap-4 md:flex-col sm:flex-col min-[320px]:flex-col'>

          {/* start- card divs */}
          <div className='flex flex-col justify-center lg:w-1/2 md:w-full sm:w-full min-[320px]:w-full gap-x-8 gap-y-8'>
            {/* 2 cards DIVS */}
            
            {/* 1 row - cards  */}
            <div className='flex lg:flex-row md:flex-row sm:flex-col min-[320px]:flex-col justify-center items-center gap-4'>
              {/* car 1 */}
              <div className='flex items-center justify-between w-full px-8 py-12 rounded-md backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-gray-800/10'>
                  <div className='flex flex-col '>
                    <h3 className='text-[1.3rem] font-bold'>FOLDERS</h3>
                    <h3 className='text-white/50'>Total folders : 2</h3>
                  </div>

                  <div className="relative">
                <img src={iconFolder} className='w-[20px] z-[100] relative' alt="" />
                    <div className='w-[30px] h-[30px] bg-bethel-green/50 absolute -top-1 -left-[5px] rounded-full scale-[1.2] z-[0]'></div>

                  </div>
              </div>

              {/* card 2 */}
              <div className='flex items-center w-full justify-between px-8 lg:py-12 md:py-12 sm:py-10 min-[320px]:py-14 rounded-md
              backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-gray-800/10'>
                  <div className='relative flex flex-col '>
                    <h3 className='text-[1.3rem] font-bold'>STORAGE PLAN</h3>
                    <h3 className='text-white/50 '>Total / Used</h3> 
                    <div className='absolute bottom-[-25px]'>
                      10GiB / 1GiB
                    </div>
                  </div>

                  <div className="relative">
                    <img src={iconStorage} className='w-[20px] z-[100] relative' alt="" />
                    <div className='w-[30px] h-[30px] bg-bethel-green/50 absolute -top-1 -left-[5px] rounded-full scale-[1.2] z-[0]'></div>

                  </div>
              </div>
            </div>

            {/* 2nd cards DIVS */}
            <div className='flex gap-4 lg:flex-row md:flex-row sm:flex-col min-[320px]:flex-col justify-center items-center'>
              {/* car 1 */}
              <div className='flex items-center justify-between w-full px-8 py-12 rounded-md bg-gradient-to-b from-bethel-white/5 to-gray-800/10 backdrop-blur-xl'>
                  <div className='flex flex-col'>
                    <h3 className='text-[1.3rem] font-bold'>FILES</h3>
                <h3 className='text-white/50'>Total files : 1</h3>
                  </div>

                  <div className="relative">
                    <img src={iconFile} className='w-[20px] z-[100] relative' alt="" />
                    <div className='w-[30px] h-[30px] bg-bethel-green/50 absolute -top-1 -left-[5px] rounded-full scale-[1.2] z-[0]'></div>

                  </div>
              </div>

              {/* card 2 */}
              <div className='flex items-center justify-between w-full px-8 py-12 rounded-md bg-gradient-to-b from-bethel-white/5 to-gray-800/10 backdrop-blur-xl'>
                  <div className='flex flex-col '>
                    <h3 className='text-[1.3rem] font-bold'>NETWORK USAGE</h3>
                    <h3 className='text-white/50'>Total Network Usage : 0</h3>
                  </div>

                  <div className="relative">
                <img src={iconWifi} className='w-[20px] z-[100] relative' alt="" />
                    <div className='w-[30px] h-[30px] bg-bethel-green/50 absolute -top-1 -left-[5px] rounded-full scale-[1.2] z-[0]'></div>

                  </div>
              </div>
            </div>
            {/* end of 2 div */}

          </div>
          {/* end- card div */}


          {/* start- chart div */}
          <div className='flex lg:mt-0 md:mt-2 sm:mt-2 min-[320px]:mt-4
           lg:flex-row md:flex sm:flex-col min-[320px]:flex-col items-center gap-2 bg-gradient-to-b from-bethel-white/5 to-gray-800/10  relative
          lg:gap-0 md:gap-10  lg:w-1/2 rounded-md md:w-full sm:w-full min-[320px]:w-full'>
          <div className=''>

              <Doughnut  className='w-full mt-4'
              data = {{
                labels: [
                  'Available',
                  'Used'
                ],
                datasets: [{
                  label: 'STORAGE',
                  data: [100,20],
                  backgroundColor: [
                    'rgb(255, 255 , 255 )',
                    'rgb(170, 255, 0)',
                  ],
                  hoverOffset: 4
                }]
              }}
              />
            </div>

            {/* files section */}
            <div>
              <div class="flex flex-col gap-8 mt-6 px-8">
                        
                            <div className='flex gap-10'>
                              <div class="flex items-center justify-start w-full gap-2" >
                                  <img src={iconFiles} alt="" className='w-[35px] opacity-80'/>
                                  

                                  <div class="flex flex-col items-center justify-center mt-[2px]">
                                      <h3 class="text-[1.1rem] text-white/80">Files</h3>
                    <h3 class="text-[#8d8d8d] text-[12px] ml-1"> files</h3>
                                  </div>
                              </div>

                            
                              <div class="flex items-center justify-start w-full gap-2">
                                
                                  <img src={iconImage} alt="" className='w-[35px] opacity-80'/>
                                  

                                  <div class="flex flex-col items-center justify-center mt-[2px]">
                                      <h3 class="text-[1.1rem] text-white/80">Images</h3>
                                      <h3 class="text-[#8d8d8d] text-[12px] ml-1">0 files</h3>
                                  </div>
                              </div>
                            </div>

                            <div className='flex gap-10'>
                              <div class="flex items-center justify-start w-full gap-2">
                                  <img src={iconMusic} alt="" className='w-[35px] opacity-80'/>

                                  <div class="flex flex-col items-center justify-center mt-[2px]">
                                      <h3 class="text-[1.1rem] text-white/80">Audio</h3>
                                      <h3 class="text-[#8d8d8d] text-[12px] ml-1">0 files</h3>
                                  </div>
                              </div>
                              
                              
                              <div class="flex items-center justify-start w-full gap-2">
                                  <img src={iconVideo} alt="" className='w-[35px] opacity-80'/>

                                  <div class="flex flex-col items-center justify-center mt-[2px]">
                                      <h3 class="text-[1.1rem] text-white/80">Videos</h3>
                                      <h3 class="text-[#8d8d8d] text-[12px] ml-1">0 files</h3>
                                  </div>
                              </div>
                            </div>

                    </div>
            </div>
              
          </div>
          {/* end- chart div */}

        </div>
        {/* end-main container */}

        {/* start-second container */}
        <div className='flex w-full pb-10 mt-6 lg:flex-row gap-x-6 md:flex-col sm:flex-col min-[320px]:flex-col gap-y-8 justify-evenly'>
            <div className='rounded-md lg:w-1/2 md:w-full sm:w-full min-[320px]:w-full bg-gray-800/20'>
              <Line data={{
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'],
            datasets: [{
                label: 'Transactions',
                data: [12, 0, 0, 0, 0, 0, 0],
                backgroundColor: [
                    'rgba(255, 255,255, .7)',
                ],
                borderColor: [
                    'rgba(255,255,255, .3)',
                ],
                borderWidth: 1,

            }]
              }} />
            </div>

            <div className='rounded-md lg:w-1/2 md:w-full sm:w-full min-[320px]:w-full lg:ml-4 bg-gray-800/20'>
              <Bar data={{
        labels: ['Files', 'Videos', 'Images', 'Audio'],
        datasets: [{
            label: 'Files',
            data: [2, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 255,255, .7)',
                'rgba(255, 255,255, .6)',
                'rgba(255, 255,255, .5)',
                'rgba(255, 255,255, .4)',
            ],
            borderColor: [
            ],
            borderWidth: 1
        }]
           }} />
            </div>
        <div>
        
        </div>

        </div>
        
        {/* end-second container */}
    </div>
  )
}

export default DashboardHome
