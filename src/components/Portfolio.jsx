import React from 'react'

const Portfolio = () => {
  return (
    <div >
        <h1 className='text-white text-xl mb-3'>Portfolio</h1>
        <div className='w-full bg-[#1d1d1d] rounded-2xl border border-white/10'>
            <div className='flex border-b border-white/10 py-4'>
                <div className='w-[95%] p-3'>
                    <h1 className='text-white text-5xl font-[500]'>$0<span className='text-sm text-[#949091] font-300'>.00</span></h1>
                </div>
                <div className='p-3 pr-5'>
                    <button className=' h-full text-[#1d1d1d] hover:cursor-pointer bg-[#60dbb7] w-30 rounded-4xl font-[500]'>Recieve</button>
                </div>
            </div>
            <div className='h-fit mx-auto flex flex-col items-center  gap-2 pt-25 pb-25'>
                    <img src="src\assets\checkmark.svg" className='w-20'/>
                    <p className='text-white text-xl'>Your wallet is ready!</p>
            </div>
        </div>
    </div>
  )
}

export default Portfolio