import React from 'react';
import './index.css'

const DashboardForm = () => {
  return (
    <>
    <div className='top-box'>
      <div>
      <h1 className='font-bold text-2xl'>Bolan Racheal</h1>
      <small>ID <b>Au 2435245</b></small>
      <div className=' bg-gray-200 content-box'>
        <p className='text-gray-400 text-md'>Hi there! i'm bola an Auditorwith large experience with <br/>companies from all over. i have been able to set up system <br/> for the public use. </p>
      </div>
      </div>
      
    </div>
    <div className='bottom-box p-5'>
    <form class="w-full ">
  <div class="flex flex-wrap -mx-3 mb-4">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
       Gender
      </label>
      <input class="appearance-none block font-bold w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Male"/>
      {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Phone No
      </label>
      <input class="appearance-none block w-full font-bold bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="08135224589"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-4">
    <div class="w-full px-3">
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Email
      </label>
      <input class="appearance-none block font-bold w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="exampleme@email.com"/>
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-4">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
       Address
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none font-bold focus:bg-white" id="address" type="text" placeholder="23k str. lagos"/>
      
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Country
      </label>
      <input class="appearance-none block w-full font-bold bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="country" type="text" placeholder="Alberia"/>
    </div>
  </div>
  <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Member since
      </label>
  <p className='font-bold mb-5'>Dec 2020</p>
</form>

        

    </div>
    <button className='w-full mt-10 bg-blue-900 rounded-3xl p-3 text-xl text-white'>save changes</button>
    
    </>
  )
}

export default DashboardForm
