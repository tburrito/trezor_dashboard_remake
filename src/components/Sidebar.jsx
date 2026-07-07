import React from 'react'
import { coinData } from '../data/coins.js'
import { Settings, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({selected}) => {

  return (
    <div className="h-svh w-65 bg-[#0e0f10] fixed top-0 left-0 z-1000">
        <div className='ml-1 mt-10 mb-6 flex flex-row'>
          <img src= "src\assets\trezor-safe.svg" alt="" className='w-[50px]'/>
          <div className='text-white'>
            <p>Trezor 5 Safe</p>
            <p className='flex flex-row items-center align-middle text-xs text-[#a29e9f]'><LinkIcon className='w-3 mr-1'/>Connected</p>
          </div>
        </div>
        <div className='border-b-2 border-[#252525]'>
          <ul class="list-none m-0 p-0 w-full">
              <Link to="/dashboard"><li className={`block text-[#a29e9f] border border-transparent py-1.5 px-4 m-1 hover:cursor-pointer hover:text-white ${selected == "dashboard" ? 'bg-[#171717] border-white/10 border rounded-xl text-white' : ''}`}><i className="fa-regular fa-house mr-3"></i>Dashboard</li></Link>
              <li className="block text-[#a29e9f] border border-transparent py-1.5 px-4 m-1 hover:cursor-pointer hover:text-white"><i class="fa-regular fa-bell mr-3"></i>Activity</li>
              <Link to="/settings" state={{selected:"application"}}><li className={`flex text-[#a29e9f] border border-transparent flex-row py-1.5 px-4 m-1 hover:cursor-pointer hover:text-white ${selected == "settings" ? 'bg-[#171717] border-white/10 border rounded-xl text-white' : ''}`}><Settings className='w-5 mr-3'/>Settings</li></Link>
          </ul>
        </div>
        <div className='mt-5'>
          {coinData.map((coin, i , arr)=>(
            <div className='flex flex-row text-white my-1 py-1.75 mx-2 rounded-xl border border-transparent hover:cursor-pointer hover:bg-[#171717] hover:border-white/10'>
                <img src={coin.miniPath} alt="" className='w-12'/>
                <div className='flex flex-col text-[0.9rem] w-full'>
                  <div className=' flex flex-row justify-between pr-6'>
                      <p>{coin.name} #1</p>
                      <p className='text-[#a29e9f]'>${Intl.NumberFormat('en-US').format(coin.price * coin.amount)}</p>
                  </div>
                  <p className='text-[#a29e9f]'>{coin.amount} {coin.abb}</p>
                </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Sidebar