import React from 'react'
import community from "../../assets/community.gif";
import yoga from "../../assets/yoga.gif";
function Community() {
  return (
    <div>
      <div className='p-5'>
        <div className="flex gap-2 items-center">
            <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Community Center</h1>
            <img src={community} className='w-10 h-10  object-cover' alt="camera" />
        </div>
        <div className=" text-md lg:text-xl">
            <p className='mt-2'>Two well-equipped clubs and a community centre within the township having the facilities of indoor and outdoor games, swimming pool and a well equipped fitness centre for aerobics, gymnasium, sauna and jacuzzi.</p>
        </div>        
        <ul style={{ listStyleType: 'disc' }} className='p-5 text-md lg:text-xl'>
            <li className=''>These will be built in addition to the <span className='font-semibold '>Hotel & Club building</span>  located outside the main gate and will be exclusively used by the residents of the township.</li>
            <li className='mt-3'>Indoor sports facilities for recreation like <span className='font-semibold'>table tennis, badminton, pool/snooker, squash</span></li>
            <li className='mt-3'><span className='font-semibold'>Recreational facilities include TV room,card /chess/ carom room</span></li>
            <li className='mt-3'>Audio, Video & Media library.</li>
            <li className='mt-3'> Expandable multi-purpose stage and Hall with a seating capacity of <span className='font-semibold'>700 people.</span></li>
            <li className='mt-3'><span className='font-semibold'>Spacious kitchen and pantry</span></li>
            <li className='mt-3'>Ample parking area</li>
            <li className='mt-3'>Nature care centre with the facilities of <span className='font-semibold'>acupressure, reiki, ayurveda, meditation and old age care</span>.</li>
        </ul>
        
        <div className="flex gap-2 items-center">
          <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Yoga</h1>
          <img src={yoga} className='w-10 h-10  object-cover' alt="camera" />

        </div>
        <p className='text-md lg:text-xl mt-2'>World renowned Yoga guru Mr. Bikram Chaudhary will set-up yoga centres in all <b> 217 townships</b>  to offer the best advice and training on yoga for the first time in India. He has over 2000 institutions around the globe which are even acknowledged by NASA (National Aeronautics and Space Administration)</p>
        
    </div>
    </div>
  )
}

export default Community;
