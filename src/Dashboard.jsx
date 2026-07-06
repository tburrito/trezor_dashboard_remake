import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Portfolio from './components/Portfolio'
import Assets from './components/Assets'

function Dashboard() {

  return (
    <div className='flex'>
        <Sidebar />
        <div className='bg-[#171717] w-full h-full border'>
          <Topbar title="Dashboard"/>
          <div className='ml-65 mt-7 p-12.5 gap-15 flex flex-col'>
            <Portfolio/>
            <Assets/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard