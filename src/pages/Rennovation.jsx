import React from 'react'
import taxi from '../assets/taxi.gif'
import tap from '../assets/tap.gif'
import bricks from '../assets/bricks.gif' 
import makeup from '../assets/makeup.gif'
import electrical from '../assets/electrical.gif'

function Rennovation() {
  return (
    <div className='p-4 '>
      <h1 className='text-xl md:text-3xl font-semibold'>Essenial Service</h1>
    
      <ul style={{ listStyleType: 'disc' }} className='p-7 text-md lg:text-xl'>
        <li>Convenience stores</li>
        <li>Banking</li>
        <li>Postal services</li>
        <li>Beauty parlour</li>
      </ul>

      <h1 className='text-xl md:text-3xl font-semibold'>Service Centre (Just a phone call away)</h1>
      <ul style={{ listStyleType: 'disc' }} className='p-7 text-md lg:text-xl'>
        <li><div className="flex gap-2 items-center">
            <h1>Taxi services</h1> 
            <img src={taxi} className='h-10 w-10' alt="" />
        </div></li>
        <li><div className="flex gap-2 items-center">
            <h1>Plumbing</h1> 
            <img src={tap} className='h-8 w-8' alt="" />
        </div></li>
        <li><div className="flex gap-2 items-center">
            <h1>Masonary</h1> 
            <img src={bricks} className='h-8 w-8' alt="" />
        </div></li>
        <li><div className="flex gap-2 items-center">
            <h1>Beauty Parlour</h1> 
            <img src={makeup} className='h-8 w-8' alt="" />
        </div></li>
        <li><div className="flex gap-2 items-center">
            <h1>Electrical repair services</h1> 
            <img src={electrical} className='h-8 w-8' alt="" />
        </div></li>
      </ul>

      <h1 className='text-xl md:text-3xl font-semibold'>Seamless Connectivity</h1>
      <ul style={{ listStyleType: 'disc' }} className='p-7 text-md lg:text-xl'>
        <li><b>24-hour uninterrupted satellite</b> connectivity for television.</li>
        <li>Pre-wired for cable and telephone</li>
        <li>Uninterrupted availability of movies provided on demand</li>
        <li>Internet kiosks</li>
        <li><b>Video-conferencing</b></li>
      </ul>
    </div>
  )
}

export default Rennovation
