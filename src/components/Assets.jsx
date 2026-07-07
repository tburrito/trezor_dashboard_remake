import React from 'react'
import { coinData } from '../data/coins.js'
import { ArrowRight, WalletMinimal } from 'lucide-react';

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
                    <tr className='h-15 border-b border-white/10 text-[#a29e9f]'>
                        <th className='font-normal pt-2 w-20 ml-100'></th>
                        <th className='font-normal pt-2 w-70 text-left'>Coin</th>
                        <th className='font-normal pt-2 w-25 text-left'>Balance</th>
                        <th className='font-normal pt-2 pr-5 text-right'>Price</th>
                        <th className='font-normal pt-2 pl-5 text-left'>7d change</th>
                        <th className='font-normal pt-2 pl-5 text-left'></th>
                    </tr>
                    {coinData.map((coin, i, arr) =>(
                        <tr key={coin.name} className={`h-15 pt-3 ${i == arr.length - 1 ? '': 'border-b border-white/10'}`} >
                            <td className='flex flex-col h-20 items-center justify-center '>
                                <img src={coin.imgPath} alt="" className='w-12'/>
                            </td>
                            <td className='text-left'>
                                {coin.name}
                                <div className='flex flex-row align-middle items-center text-xs text-[#a29e9f]'>
                                    <WalletMinimal className='mr-1 w-4' color='#a29e9f'/>
                                    {coin.wallets}
                                </div>
                                </td>
                            <td className='text-left'>${coin.balance}</td>
                            <td className='pr-5 text-right'>${Intl.NumberFormat('en-US').format(coin.price)}</td>
                            <td className={`pl-5 text-left ${parseFloat(coin.change, 10) < 0 ? 'text-[#a58a7b]' : 'text-[#5dd5b3]'}`}>
                                {parseFloat(coin.change, 10) < 0 ? <i class="fa-solid fa-arrow-trend-down text-xs mr-1"></i> : <i class="fa-solid fa-arrow-trend-up text-xs mr-1"></i>}
                                {coin.change}%
                                </td>
                            <td className=' h-20'>
                                <div className='flex justify-end pr-5'>
                                    <button className=' h-10 w-17 text-white hover:cursor-pointer bg-[#202423] rounded-4xl mr-5'>Buy</button>
                                    <button className='flex items-center justify-center h-10 w-10 text-white hover:cursor-pointer bg-[#202423] rounded-4xl'><ArrowRight /></button>
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