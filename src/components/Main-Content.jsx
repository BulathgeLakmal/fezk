import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Nav-bar";
import SideBar from "./Side-Bar";
import DashboardHome from "./Dashboard-Home";
import DashboardProfile from "./Dashboard-Profile";
import FileSharedComp from "./FIles-ShareFiles";
import DashboardStorageFolder2 from "./Dashboard-Storage_Folder2";
import { useEffect, useState } from "react";
import "../components/style.css"
import { useDispatch } from "react-redux";
import toggleSidebarSlice from "../reducers/toggleSidebar";
import DashboardWallet from "./Dashboard-Wallet";
import DashboardBilling from "./Dashboard-Billing";

  function MainContent() {
  const [isLoading , setIsLoading] = useState(true)
  const dispatch = useDispatch();
  const Navigate = useNavigate()


  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  },[])

  const toggleSidebarClose = () =>{
    dispatch(toggleSidebarSlice.actions.toggleSidebarClose())
  }

  return (

    <div className="relative min-h-screen bg-[#0F0F0F]">
      <div className="relative z-[100]">
        <div className="relative z-[100]">
          <SideBar />
        </div>
        <div className="relative z-[0]">
         <Navbar />
        </div>
      </div>
      
      {/* middle routing  */}
      { isLoading && 
        <div className="flex lg:pl-[200px] md:pl-0 sm:pl-0 min-[320px]:pl-0 min-h-screen w-full justify-center items-center">
          <svg class="pl"  viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                  <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
                      <stop offset="0%" stop-color="hsl(113,90%,55%)" />
                      <stop offset="100%" stop-color="hsl(255,100%,100%)" />
                  </linearGradient>
                  <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="hsl(113,90%,55%)" />
                      <stop offset="100%" stop-color="hsl(223,90%,55%)" />
                  </linearGradient>
              </defs>
              <circle class="pl__ring" cx="100" cy="100" r="82" fill="none" stroke="url(#pl-grad1)" stroke-width="36" stroke-dasharray="0 257 1 257" stroke-dashoffset="0.01" stroke-linecap="round" transform="rotate(-90,100,100)" />
              <line class="pl__ball" stroke="url(#pl-grad2)" x1="100" y1="18" x2="100.01" y2="182" stroke-width="36" stroke-dasharray="1 165" stroke-linecap="round" />
          </svg>
        </div>
      }
      { !isLoading && <div onClick={toggleSidebarClose} className="relative pt-24 lg:pl-[270px] lg:md-[270px] sm:pl-[10px] lg:px-0 md:px-0 sm:px-4 min-[320px]:px-4 w-full z-[10]">
        <div className="fixed top-0 w-full h-[30px] bg-[#0F0F0F] z-[100]"></div>
        <Routes>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/profile" element={<DashboardProfile />} />
          <Route path="/dashboard/files" element={<DashboardStorageFolder2 />} />
          <Route path='/dashboard/wallet' element={<DashboardWallet />} />
          <Route path="/dashboard/billing" element={<DashboardBilling></DashboardBilling>} />
          <Route path="/dashboard/files/shared-files" element={<FileSharedComp />} />
        </Routes>
      </div>}
      {/* end- middle routing */}
      
    </div>
  )
}

export default MainContent;
