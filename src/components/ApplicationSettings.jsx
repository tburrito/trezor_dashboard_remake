import { React, useState } from 'react'
import { AppWindowMac, ArrowUpRight, Atom, ChevronDown, Flag, LockKeyhole, Shield, Tag } from 'lucide-react';
import Switch from './interactables/Switch';

const ApplicationSettings = () => {
    const [autoEjectWallets, setautoEjectWallets] = useState(false)
    const [spacedAddressFormatting, setSpacedAddressFormatting] = useState(true)
    const [anonymousDataCollection, setAnonymousDataCollection] = useState(false)
    const [mevProtection, setMevProtection] = useState(true)
    const [dustPhishingProtection, setDustPhishingProtection] = useState(true)
    const [experimentalFeatures, setExperimentalFeatures] = useState(false)



  return (
    <div className='flex flex-col'>
        <div className='flex flex-row w-full mb-15'>
            <div className='w-[20%]'>
                <div className='flex flex-row items-center align-top text-white text-2xl font-[500]'>
                    <LockKeyhole className='mr-2 size-6'/>
                    <h1>Privacy</h1>
                </div>
            </div>
            <div className='flex flex-row items-center align-middle justify-between w-[80%] bg-[#1d1d1d] border rounded-xl border-white/5 px-5 py-4'>
                <div className='flex flex-col text-left'>
                    <p className='text-lg text-white mb-3'>Auto-eject wallets</p>
                    <p className='text-[#a29e9f]'>Automatically eject all wallets when you disconnect your Trezor. Your balances <br></br>are hidden in Trezor Suite until you reconnect your device.</p>
                </div>
                <Switch checked={autoEjectWallets} onChange={(e)=>{setautoEjectWallets(e.target.checked)}}/>
            </div>
        </div>

        <div className='flex flex-row w-full mb-15'>
            <div className='w-[20%]'>
                <div className='flex flex-row items-center align-top text-white text-2xl font-[500]'>
                    <Flag className='mr-2 size-6'/>
                    <h1>Localization</h1>
                </div>
            </div>
            <div className='flex flex-col justify-between w-[80%] bg-[#1d1d1d] border rounded-xl border-white/5 px-5 py-4'>
                <div className='flex flex-row justify-between text-left align-middle items-center border-b-2 border-white/5 w-full py-3'>
                    <p className='text-lg text-white mb-3'>Language</p>
                    <label htmlFor='language' className='relative inline-flex items-center mb-3 w-50 rounded-xl bg-[#292929] px-3 py-2 text-white cursor-pointer'>
                        <select id='language' className='appearance-none bg-transparent pr-8 outline-none' defaultValue='sys'>
                            <option value='sys'>System</option>
                            <option value='en'>English</option>
                            <option value='fr'>French</option>
                        </select>
                        <ChevronDown className='pointer-events-none absolute right-3 size-4 text-[#a29e9f]' />
                    </label>
                </div>
                <div className='flex align-middle justify-between text-left border-b-2 border-white/5 w-full pt-5 py-3'>
                    <p className='text-lg text-white mb-3'>Currency</p>
                </div>
                <div className='flex flex-col justify-end text-left w-full py-3 pt-6'>
                    <p className='text-lg text-white mb-3'>Bitcoin units</p>
                </div>                
            </div>
        </div>

        <div className='flex flex-row w-full mb-15'>
            <div className='w-[20%]'>
                <div className='flex flex-row items-center align-top text-white text-2xl font-[500]'>
                    <Tag className='mr-2 size-6'/>
                    <h1>Labeling</h1>
                </div>
            </div>
            <div className='flex flex-row justify-between w-[80%] bg-[#1d1d1d] border rounded-xl border-white/5 px-5 py-4'>
                <div className='flex flex-col text-left'>
                    <p className='text-lg text-white mb-3'>Labelling</p>
                    <p className='text-[#a29e9f] mb-3'>Name your wallets, personalize accounts, and label transactions.</p>
                    <button className='flex flex-row hover:cursor-pointer bg-[#37393b] text-[#b6b7b8] px-2 pl-3 py-1 rounded-xl w-fit hover:bg-[#414446]'>Learn more <ArrowUpRight/></button>
                </div>
            </div>
        </div>

        <div className='flex flex-row w-full mb-15'>
            <div className='w-[20%]'>
                <div className='flex flex-row items-center align-top text-white text-2xl font-[500]'>
                    <AppWindowMac className='mr-2 size-6'/>
                    <h1>Application</h1>
                </div>
            </div>
            <div className='flex flex-col justify-between w-[80%] bg-[#1d1d1d] border rounded-xl border-white/5 px-5 py-4'>
                <div className='flex flex-col text-left border-b-2 border-white/5 pb-4'>
                    <p className='text-lg text-white mb-3'>Color scheme</p>
                    <p className='text-[#a29e9f]'>Select light mode, dark mode, or follow your system's appearance settings.</p>
                </div>
                <div className='flex flex-row justify-between w-full border-b-2 border-white/5 items-center align-middle'>
                    <div className='flex flex-col text-left  py-4'>
                        <p className='text-lg text-white mb-3'>Spaced address formatting</p>
                        <p className='text-[#a29e9f]'>Add spaces to addresses for easier reading. When off, addresses are shown as<br></br>a continuous string.</p>
                    </div>
                    <Switch checked={spacedAddressFormatting} onChange={(e)=>{setSpacedAddressFormatting(e.target.checked)}}/>
                </div>
                <div className='flex flex-row justify-between w-full border-b-2 border-white/5 items-center align-middle'>
                    <div className='flex flex-col text-left border-b-2 border-white/5 py-4'>
                        <p className='text-lg text-white mb-3'>Anonymous data collection</p>
                        <p className='text-[#a29e9f]'>Help us improve your experience. We never collect sensitive data like balances<br></br>or transactions. All data is completely anonymous and used solely to enhance<br></br>the Trezor ecosystem.</p>
                    </div>
                    <Switch checked={anonymousDataCollection} onChange={(e)=>{setAnonymousDataCollection(e.target.checked)}}/>
                </div>

                <div className='flex flex-row w-full border-b-2 justify-between items-center align-middle border-white/5'>
                    <div className='flex flex-col text-left py-4'>
                        <p className='text-lg text-white mb-3'>Application log</p>
                        <p className='text-[#a29e9f]'>Use this log to access essential technical information about Trezor Suite, which<br></br>may be needed when contacting Trezor Support.</p>
                    </div>
                    <button className='bg-[#5ad38e] px-10 py-2 h-10 rounded-xl'>Show log</button>
                </div>
                <div className='flex flex-row w-full border-b-2 justify-between items-center align-middle border-white/5'>
                    <div className='flex flex-col text-left py-4'>
                        <p className='text-lg text-white mb-3'>Reset app to default</p>
                        <p className='text-[#a29e9f]'>Erase all current app data and restore the original settings.</p>
                    </div>
                    <button className='bg-[#e5aa5d] px-10 py-2 h-10 rounded-xl'>Reset app</button>
                </div>
                <div className='flex flex-col text-left pt-4'>
                    <p className='text-lg text-white mb-3'>Trezor Suite version</p>
                    <div className='flex flex-row items-center align-middle'>
                        <p className='text-[#a29e9f] mr-3'>Current version</p>
                        <button className='flex flex-row hover:cursor-pointer text-sm items-center align-middle bg-[#37393b] text-[#b6b7b8] px-2 pl-3 py-1 rounded-xl w-fit hover:bg-[#414446]'>0.0.1 <ArrowUpRight/></button>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-row w-full mb-15'>
            <div className='w-[20%]'>
                <div className='flex flex-row items-center align-top text-white text-2xl font-[500]'>
                    <Shield className='mr-2 size-6'/>
                    <h1>Security</h1>
                </div>
            </div>
            <div className='flex flex-col justify-between w-[80%] bg-[#1d1d1d] border rounded-xl border-white/5 px-5 py-4'>
                <div className='flex flex-row justify-between w-full border-b-2 border-white/5 items-center align-middle'>
                    <div className='flex flex-col text-left border-b-2 border-white/5 pb-4'>
                        <p className='text-lg text-white mb-3'>MEV protection</p>
                        <p className='text-[#a29e9f]'>Stay safe and secure fair prices by preventing others from interfering with your<br></br>transactions.<br></br>Available on Ethereum, BNB Smart Chain, Arbitrum One, and Base.</p>
                    </div>
                    <Switch checked={mevProtection} onChange={(e)=>{setMevProtection(e.target.checked)}}/>
                </div>
                <div className='flex flex-row justify-between w-full border-b-2 border-white/5 items-center align-middle'>
                    <div className='flex flex-col text-left border-b-2 border-white/5 py-4'>
                        <p className='text-lg text-white mb-3'>Dust phishing protection</p>
                        <p className='text-[#a29e9f]'>Hide suspicious microtransactions used in scams from your transaction history.</p>
                    </div>     
                    <Switch checked={dustPhishingProtection} onChange={(e)=>{setDustPhishingProtection(e.target.checked)}}/>
                </div>
                <div className='flex flex-col text-left border-white/5 pt-4'>
                    <p className='text-lg text-white mb-3'>Dust phishing threshold</p>
                    <p className='text-[#a29e9f]'>Set a dust phishing threshold to mark transactions below this amount as<br></br>suspicious and hide them.</p>
                </div>          
            </div>
        </div>

        <div className='flex flex-row w-full mb-15'>
            <div className='w-[20%]'>
                <div className='flex flex-row items-center align-top text-white text-2xl font-[500]'>
                    <Atom className='mr-2 size-6'/>
                    <h1>Experimental</h1>
                </div>
            </div>
            <div className='flex flex-row justify-between w-[80%] bg-[#1d1d1d] border rounded-xl border-white/5 px-5 py-4'>
                <div className='flex flex-row justify-between w-full items-center align-middle'>
                    <div className='flex flex-col text-left'>
                        <p className='text-lg text-white mb-3'>Experimental features</p>
                        <p className='text-[#a29e9f] mb-3'>Turn on experimental features that are in testing, may be unstable, and might<br></br>not have long-term support.</p>
                        <button className='flex flex-row hover:cursor-pointer bg-[#37393b] text-[#b6b7b8] px-2 pl-3 py-1 rounded-xl w-fit hover:bg-[#414446]'>Learn more <ArrowUpRight/></button>
                    </div>
                    <Switch checked={experimentalFeatures} onChange={(e)=>{setExperimentalFeatures(e.target.checked)}}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ApplicationSettings