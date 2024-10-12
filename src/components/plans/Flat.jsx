import React from 'react'
import { Link } from 'react-router-dom'
function Flat() {
  return (
    <div className='p-5'>
      <h1 className='text-xl md:text-2xl'>Experience the epitome of modern living with our exquisite Flat plans, where elegance meets functionality. Each apartment is thoughtfully designed to create a harmonious blend of comfort and style, making it an ideal choice for those who seek a vibrant lifestyle within a welcoming community.</h1>
      <h1 className='md:w-[70vw] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl mt-10 text-xl bg-slate-200 p-5 text-center mx-auto '>Discover our stunning collection of flats, featuring <b>Great, Crown, Gorgeous</b>, and <b> Zenith plans </b> that redefine the art of modern living. Each residence is meticulously designed to provide an unparalleled living experience, where every detail has been carefully considered to create a haven of comfort, style, and sophistication.</h1>
      
      <div className="flex mt-8 justify-center gap-5 flex-wrap">
        <Link to = "/Great"><div className="px-5 py-3 w-[180px] text-center font-black bg-slate-400 text-white text-xl">Great</div></Link>
        <div className="px-5 py-3 w-[180px] text-center font-black bg-slate-400 text-white text-xl">Crown</div>
        <div className="px-5 py-3 w-[180px] text-center font-black bg-slate-400 text-white text-xl">Gorgeous</div>
        <div className="px-5 py-3 w-[180px] text-center font-black bg-slate-400 text-white text-xl">Zenith</div>
      </div>
    </div>
  )
}

export default Flat
