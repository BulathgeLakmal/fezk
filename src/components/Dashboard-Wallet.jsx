import React from 'react'
import iconWallet from "../Images/icons/icon-wallet.png"

function DashboardWallet() {
  return (
    <section>
      {/* Heading */}
      <div className='flex mt-3 mb-5'>
        <div>
          <img src={iconWallet} alt="" className='w-[20px] inline-block text-white -mt-1' />
        </div>

        <div className='ml-2'>
          <h3 className='text-white'>WALLET </h3>
        </div>
      </div>
      
      {/* button create faucet */}
      <div class="ml-44">
        <button class="bg-bethel-green/50 text-white active:bg-bethel-green/50 text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Create Faucet</button>
      </div>
     
      <div className='flex lg:flex-col gap-x-12 md:flex-col sm:flex-col min-[320px]:flex-col gap-y-12'>
        
        <div className='py-4 px-44'>
          
          <form class="backdrop-blur-xl bg-gradient-to-b from-bethel-white/10 to-bethel-green/5 p-10">
			    <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg viewBox="0 0 1024 1024" className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"></path></g></svg>
				<input class="pl-2 outline-none border-none bg-transparent text-white" type="text" name="" id="" placeholder="Wallet Address" />
          </div>
				  <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> <path d="M14.5 9.08333L14.3563 8.96356C13.9968 8.66403 13.5438 8.5 13.0759 8.5H10.75C9.7835 8.5 9 9.2835 9 10.25V10.25C9 11.2165 9.7835 12 10.75 12H13.25C14.2165 12 15 12.7835 15 13.75V13.75C15 14.7165 14.2165 15.5 13.25 15.5H10.412C9.8913 15.5 9.39114 15.2969 9.01782 14.934L9 14.9167" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 8L12 7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 17V16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
					<input class="pl-2 outline-none border-none bg-transparent text-white" type="text" name="" id="" placeholder="Amount" />
          </div>
					<button type="submit" class="block w-full bg-bethel-green/50 mt-4 py-2  text-white font-semibold mb-2 uppercase rounded-md">TRansfer</button>
		      </form>
        
        </div>
          {/* content table */}

        <div className=''>
            <div class="block w-full overflow-x-auto backdrop-blur-xl bg-gradient-to-b from-bethel-white/10 to-bethel-green/5 text-white">
              <table class="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                      <th class="px-16 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Time
                      </th>
                      <th class="px-16 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Type
                      </th>
                      <th class="px-16 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Wallet Address
                      </th>
                      <th class="px-16 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Amount
                      </th>
                      <th class="px-16 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Status
                      </th>
                  </tr>
                </thead>

                <tbody>
          {/* <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              /argon/
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
              4,569
            </td>
            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              340
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
              46,53%
            </td>
          </tr>
          
          <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
              /argon/index.html
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              3,985
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              319
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i class="fas fa-arrow-down text-orange-500 mr-4"></i>
              46,53%
            </td>
          </tr>
          
          <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
              /argon/charts.html
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              3,513
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              294
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i class="fas fa-arrow-down text-orange-500 mr-4"></i>
              36,49%
            </td>
          </tr>
          
          <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
              /argon/tables.html
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              2,050
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              147
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
              50,87%
            </td>
          </tr> */}
          
          {/* <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
              /argon/profile.html
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              1,795
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              190
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i class="fas fa-arrow-down text-red-500 mr-4"></i>
              46,53%
            </td>
          </tr> */}

          </tbody>

        </table>
            </div>
        </div>
      </div>
      
    </section>
  )
}

export default DashboardWallet
