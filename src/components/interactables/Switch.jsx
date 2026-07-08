import { React } from 'react'

const Switch = ({checked, onChange}) => {
  return (
    <label className={`cursor-pointer relative w-15 h-8 rounded-full transition-colors ${checked ? 'bg-[#5ad38e]' : 'bg-[#a6a7a8]'}`}>
        <input id="slider" type="checkbox" className='hidden' checked={checked} onChange={onChange}/>
        <div className={`rounded-full bg-[#121d1c] transition-transform w-6 h-6 mx-1 top-1/2 -translate-y-1/2 my-auto absolute ${checked ? 'translate-x-7': ''}`}>

        </div>
    </label>
  )
}

export default Switch