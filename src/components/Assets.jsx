import React from 'react'
import { coinData } from '../data/coins.js'

const Assets = () => {


  return (
     <div>
        <div className='flex justify-between'>
            <h1 className='text-white text-xl mb-3 pt-4'>Assets</h1>
            <button className=' h-10 w-50 mb-4 text-white hover:cursor-pointer bg-[#1d1d1d] rounded-4xl mr-5'>+ Enable more coins</button>
        </div>
        <div className='flex w-full bg-[#1d1d1d] rounded-2xl border border-white/10 text-white'>
            <div className='w-full'>
                <table className='w-full table-fixed'>
                    <tr className='h-15 border-b border-white/10'>
                        <th className='pt-2 w-20 ml-100'></th>
                        <th className='pt-2 w-70 text-left'>Coin</th>
                        <th className='pt-2 w-25 text-left'>Balance</th>
                        <th className='pt-2 pr-5 text-right'>Price</th>
                        <th className='pt-2 pl-5 text-left'>7d change</th>
                        <th className='pt-2 pl-5 text-left'></th>
                    </tr>
                    {coinData.map((coin, i, arr) =>(
                        <tr key={coin.name} className={`h-15 pt-3 ${i == arr.length - 1 ? '': 'border-b border-white/10'}`} >
                            <td className='flex flex-col h-20 items-center justify-center '>
                                <img src={coin.imgPath} alt="" className='w-12'/>
                            </td>
                            <td className='text-left'>{coin.name}</td>
                            <td className='text-left'>${coin.balance}</td>
                            <td className='pr-5 text-right'>${coin.price}</td>
                            <td className={`pl-5 text-left ${parseFloat(coin.change, 10) < 0 ? 'text-[#a58a7b]' : 'text-[#5dd5b3]'}`}>{coin.change}%</td>
                            <td className=' h-20'>
                                <div className='flex justify-end pr-5'>
                                    <button className=' h-10 w-17 text-white hover:cursor-pointer bg-[#202423] rounded-4xl mr-5'>Buy</button>
                                    <button className=' h-10 w-10 text-white hover:cursor-pointer bg-[#202423] rounded-4xl'></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    </div>
  )
}

export default Assets