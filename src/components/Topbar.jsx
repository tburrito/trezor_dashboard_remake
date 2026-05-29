import React from 'react'

const Topbar = ({title}) => {
  return (
    <div className=' fixed top-0 left-0 z-1000 w-full h-15 ml-65 flex pt-1 pb-1 border-b border-white/5 bg-[#171717]'>
        <h1 className='text-3xl text-white mt-1 mb-2 ml-3'>{title}</h1>
    </div>
  )
}

export default Topbar