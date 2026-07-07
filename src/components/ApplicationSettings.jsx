import React from 'react'
import { LockKeyhole } from 'lucide-react';

const ApplicationSettings = () => {
  return (
    <div className='flex'>
        <div className='flex flex-row w-full'>
            <div className='w-[20%]'>
                <div className='flex flex-row items-center align-top text-white text-2xl font-[500]'>
                    <LockKeyhole className='mr-2 size-6'/>
                    <h1>Privacy</h1>
                </div>
            </div>
            <div className='flex flex-row justify-between w-[80%] bg-[#1d1d1d] border rounded-xl px-5 py-4'>
                <div className='flex flex-col text-left'>
                    <p className='text-lg text-white mb-3'>Auto-eject wallets</p>
                    <p className='text-[#a29e9f]'>Automatically eject all wallets when you disconnect your Trezor. Your balances <br></br>are hidden in Trezor Suite until you reconnect your device.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ApplicationSettings