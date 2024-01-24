import React from 'react'
import iconStorage from "../Images/icons/icon-storage.png"

export default function DashboardBilling() {
  return (
    <section className='text-white'>
        <div className='flex my-3'>
        <div>
          <img src={iconStorage} alt="" className='w-[20px] inline-block text-white -mt-1' />         
          
        </div>

        <div className='ml-2'>
          <h3 className='text-white'>BILLING</h3>
        </div>
        </div>
        
        <div className='flex flex-wrap w-full py-3 gap-y-4 gap-x-6 justify-evenly'>
            
            {/* Card one */}
            <div className='flex flex-col p-5 rounded-md w-[320px] backdrop-blur-xl bg-gradient-to-b from-bethel-white/20 to-bethel-green/40 px-10'>
                {/* Topic */}
                <div className='pb-5'>
                    <h1 className='text-white text-[24px] font-medium'>Free</h1>
                </div>
                
                {/* Feature paragarph */}
                <div className='py-2'>
                    <h2 className='text-gray-400 text-[18px]'>Features for creators and developers who need more storge</h2>
                </div>
                
                {/* Button */}
                <div className='flex items-center justify-center py-5 '>
                    <h3 className='p-2 border-2 border-white rounded-md txt-white bg-bethel-green/50'>Your current plan</h3>
                </div>
                
                {/* Topic two */}
                <div className='py-4'>
                    <h3 className='text-white text-[16px] font-bold'>What's included</h3>
                </div>
                
                {/* Features Bottom */}
                <div className='flex flex-col py-4 gap-y-2'>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>1000 pinned Files</h3>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>200GB storage</h3>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>4000GB Bandwith</h3>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>3 Dedicated IPFS Gateways</h3>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>IPFS Pinning Service API</h3>
                </div>
                
            </div>
            
            {/* Card Two */}
            <div className='flex flex-col p-5 rounded-md w-[320px] backdrop-blur-xl bg-gradient-to-b from-bethel-white/10 to-bethel-green/5 px-10'>
                {/* Topic */}
                <div className='pb-5'>
                    <h1 className='text-white text-[24px] font-medium'>Starter</h1>
                </div>
                
                {/* Feature paragarph */}
                <div className='py-2'>
                    <h2 className='text-gray-400 text-[18px]'>Features for creators and developers who need more storge</h2>
                </div>
                
                {/* Button */}
                <div className='flex items-center justify-center py-5'>
                    <h3 className='p-2 rounded-md txt-white bg-bethel-green/50'>Your current plan</h3>
                </div>
                
                {/* Topic two */}
                <div className='py-4'>
                    <h3 className='text-white text-[16px] font-bold'>What's included</h3>
                </div>
                
                {/* Features Bottom */}
                <div className='flex flex-col py-4 gap-y-2'>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>1000 pinned Files</h3>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>200GB storage</h3>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>4000GB Bandwith</h3>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>3 Dedicated IPFS Gateways</h3>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>IPFS Pinning Service API</h3>
                </div>
                
            </div>
            
            {/* Card Three */}
            <div className='flex flex-col p-5 rounded-md w-[320px] backdrop-blur-xl bg-gradient-to-b from-bethel-white/10 to-bethel-green/5 px-10'>
                {/* Topic */}
                <div className='pb-5'>
                    <h1 className='text-white text-[24px] font-medium'>Pro</h1>
                </div>
                
                {/* Feature paragarph */}
                <div className='py-2'>
                    <h2 className='text-gray-400 text-[18px]'>Features for creators and developers who need more storge</h2>
                </div>
                
                {/* Button */}
                <div className='flex items-center justify-center py-5'>
                    <h3 className='p-2 rounded-md txt-white bg-bethel-green/50'>Your current plan</h3>
                </div>
                
                {/* Topic two */}
                <div className='py-4'>
                    <h3 className='text-white text-[16px] font-bold'>What's included</h3>
                </div>
                
                {/* Features Bottom */}
                <div className='flex flex-col py-4 gap-y-2'>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>1000 pinned Files</h3>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>200GB storage</h3>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>4000GB Bandwith</h3>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>3 Dedicated IPFS Gateways</h3>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>IPFS Pinning Service API</h3>
                </div>
                
            </div>
            
            {/* Card Four */}
            <div className='flex flex-col p-5 rounded-md w-[320px] backdrop-blur-xl bg-gradient-to-b from-bethel-white/10 to-bethel-green/5 px-10'>
                {/* Topic */}
                <div className='pb-5'>
                    <h1 className='text-white text-[24px] font-medium'>Business</h1>
                </div>
                
                {/* Feature paragarph */}
                <div className='py-2'>
                    <h2 className='text-gray-400 text-[18px]'>Features for creators and developers who need more storge</h2>
                </div>
                
                {/* Button */}
                <div className='flex items-center justify-center py-5'>
                    <h3 className='p-2 rounded-md txt-white bg-bethel-green/50'>Your current plan</h3>
                </div>
                
                {/* Topic two */}
                <div className='py-4'>
                    <h3 className='text-white text-[16px] font-bold'>What's included</h3>
                </div>
                
                {/* Features Bottom */}
                <div className='flex flex-col py-4 gap-y-2'>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>1000 pinned Files</h3>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>200GB storage</h3>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>4000GB Bandwith</h3>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>3 Dedicated IPFS Gateways</h3>
                    <h3 className='flex flex-row'><svg viewBox="0 0 15 15" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#aaff00"></path></g></svg>IPFS Pinning Service API</h3>
                </div>
                
            </div>
            
    </div>
    </section>
  )
}
