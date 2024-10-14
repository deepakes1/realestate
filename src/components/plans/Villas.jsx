import React from 'react'
import { Link } from 'react-router-dom'

function Villas() {
  return (
    <div className='p-5'>
      <h1 className='text-xl md:text-2xl'>Experience the pinnacle of contemporary living with our stunning individual home designs, where sophistication meets practicality. Each residence is meticulously crafted to offer a perfect balance of comfort and style, creating an inviting sanctuary for those who desire a vibrant lifestyle within a close-knit community. Enjoy spacious layouts, premium finishes, and thoughtful amenities that elevate everyday living to new heights. Welcome home to a place where your dreams can flourish!.</h1>
      <h1 className='md:w-[70vw] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl mt-10 text-xl bg-slate-200 p-5 text-center mx-auto '>Discover our exquisite collection of villas, featuring <b>Exotic, Grandeur,</b>  and <b>Meridian plans</b> that epitomize the essence of luxurious living. Each villa is masterfully crafted to provide an unmatched living experience, where every element has been carefully curated to create a sanctuary of elegance, refinement, and sophistication.</h1>
      
      <div className="flex mt-8 justify-center gap-5 flex-wrap">
        <Link to = "/Exotic"><div className="px-5 py-3 w-[180px] text-center font-black bg-slate-400 text-white text-xl transition-all hover:scale-105 hover:bg-slate-700 hover:rounded-br-3xl">Exotic</div></Link>
        <Link to = "/Meridian"><div className="px-5 py-3 w-[180px] text-center font-black bg-slate-400 text-white text-xl transition-all hover:scale-105 hover:bg-slate-700 hover:rounded-br-3xl">Meridian</div></Link>
        <Link to = "/Grandeur"><div className="px-5 py-3 w-[180px] text-center font-black bg-slate-400 text-white text-xl transition-all hover:scale-105 hover:bg-slate-700 hover:rounded-br-3xl">Grandeur</div></Link>
      </div>
    </div>
  )
}

export default Villas
