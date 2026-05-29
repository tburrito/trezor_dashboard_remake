import React from 'react'
const Sidebar = () => {
  return (
    <div className="h-svh w-65 bg-[#0e0f10] fixed top-0 left-0 z-1000">
        <div className='p-3 pl-5 mb-7'>
          <img src= "src\assets\trezor-logo.svg" alt="" className='w-[150px] '/>
        </div>

        <ul class="list-none m-0 p-0 w-full">
            <li className="block text-white py-1.25 px-2 m-1 hover:cursor-pointer bg-[#171717] border-white/10 border rounded-xl">Dashboard</li>
            <li className="block text-[#a29e9f] py-1.25 px-2 m-1 hover:cursor-pointer hover:text-white">Earn</li>
            <li className="block text-[#a29e9f] py-1.25 px-2 m-1 hover:cursor-pointer hover:text-white">Activity</li>
            <li className="block text-[#a29e9f] py-1.25 px-2 m-1 hover:cursor-pointer hover:text-white">Settings</li>
        </ul>
    </div>
  )
}

export default Sidebar