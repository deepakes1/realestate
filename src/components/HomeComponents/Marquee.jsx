import React from 'react';
import confetti from "../../assets/confetti.gif";
import './Marquee.css'; // Assuming you create this CSS file

function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <div className="flex gap-10 md:gap-4 items-center">
          <div className="flex gap-2 items-center">
            <h1 className='text-xl font-semibold'>Announcement</h1>
            <img src={confetti} className="h-[30px] w-[30px]" alt="confetti" />
          </div>
          <h1 className='text-xl font-semibold'>Site is under Construction 😁</h1>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
