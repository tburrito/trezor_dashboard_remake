import React from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import { Link, useLocation } from 'react-router-dom'
import ApplicationSettings from './components/ApplicationSettings'

const Settings = () => {
    const location = useLocation()
    const selected = location.state?.selected ?? "application"

    const getPage = () => {
        switch (selected){
            case "application":
                return <ApplicationSettings/>
            case "device"
        }
    }
}

    return (
    <div className='flex'>
        <Sidebar selected="settings"/>
        <div className='flex flex-col bg-[#171717] w-full h-full border '>
          <Topbar title="Settings"/>
            <div className='ml-65 mt-14 pl-7 px-5 border-b-2 border-white/5'> 
                <ul className='flex flex-row text-white text-lg'>
                    <li className={`py-3 pt-6 px-3 text-[#a29e9f] border-transparent ${selected == "application" ? "border-b-2 border-white text-white" : ""}`}><Link to="/settings" state={{selected:"application"}} className='border border-transparent px-2 py-1 rounded-xl hover:bg-[#1d1d1d]'>Application</Link></li>
                    <li className={`py-3 pt-6 px-3 text-[#a29e9f] border-transparent ${selected == "device" ? "border-b-2 border-white text-white" : ""}`}><Link to="/settings" state={{selected:"device"}} className='border border-transparent px-2 py-1 rounded-xl hover:bg-[#1d1d1d]'>Device</Link></li>
                    <li className={`py-3 pt-6 px-3 text-[#a29e9f] border-transparent ${selected == "coins" ? "border-b-2 border-white text-white" : ""}`}><Link to="/settings" state={{selected:"coins"}} className='border border-transparent px-2 py-1 rounded-xl hover:bg-[#1d1d1d]'>Coins</Link></li>
                    <li className={`py-3 pt-6 px-3 text-[#a29e9f] border-transparent ${selected == "apps" ? "border-b-2 border-white text-white" : ""}`}><Link to="/settings" state={{selected:"apps"}} className='border border-transparent px-2 py-1 rounded-xl hover:bg-[#1d1d1d]'>Connected Apps</Link></li>
                </ul>
            </div>
            <div className='ml-65 mt-7 p-12.5 px-10 gap-15 flex flex-col'>
                {{
                    switch(selected){

                }}
            </div>
        </div>
    </div>
  )
}

export default Settings