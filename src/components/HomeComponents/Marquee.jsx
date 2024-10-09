import React from 'react'
import confetti from "../../assets/confetti.gif";

function Marquee() {
  return (
    <div>
      <marquee className="text-lg p-4 ">
      <div className="flex gap-10 md:gap-4 items-center">
        <div className="flex gap-2 items-center">
          <h1 className='text-xl font-semibold'>Announcement </h1>
           <img src={confetti} className= "h-[30px] w-[30px]" alt="confette" /> 
        </div>
        <h1 className='text-xl font-semibold'>Site is under Construction 😁</h1>
      </div>
    </marquee>
    </div>
  )
}

export default Marquee;
