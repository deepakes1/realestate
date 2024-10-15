import React from 'react'
import cricket from '../../assets/cricket.gif'

function Cricket() {
  return (
    <div className='p-5'>
        <div className="flex gap-2 items-center">
            <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Cricket Stadium</h1>
            <img src={cricket} className='w-10 h-10  object-cover' alt="camera" />
        </div>
        <div className=" text-md lg:text-xl">
            <p className='mt-2'>Welcome to our expansive central ground, a sanctuary designed to nurture every aspect of your well-being. Here, you'll find diverse avenues for personal growth, recreation, and relaxation, making it the perfect space to develop your mind, body, and soul.</p>
        </div>        
        <ul style={{ listStyleType: 'disc' }} className='p-5 text-md lg:text-xl'>
            <li className=''>Equipped with <span className='font-black '>advanced floodlighting</span> , the central ground transforms into a vibrant hub for activities day and night. Whether you're looking to engage in friendly competitions or simply enjoy some leisure time, the options are limitless.</li>
            <li className='mt-3'>The carefully designed lighting enhances the beauty of the adjacent natural areas, <span className='font-black'>creating a dreamlike atmosphere</span> that captivates the senses. Picture yourself strolling through pathways illuminated by soft lights, surrounded by lush greenery that invites tranquility.</li>
            <li className='mt-3'><span className='font-black'>At the heart of this oasis lies a stunning wave pool, where you can dive into the refreshing waters and experience nature's embrace. The gentle waves provide a serene escape, allowing you to unwind and rejuvenate.</span></li>
            <li className='mt-3'>For sports enthusiasts, the centrally located tennis and volleyball courts are a must-visit. These illuminated courts are perfect for evening matches, offering a <b>thrilling environment to challenge your skills </b>while enjoying the company of friends and neighbors</li>
            <li className='mt-3'> Imagine the laughter and excitement echoing around you as you engage in friendly rivalry on the courts, surrounded by the beauty of the landscape. The combination of sport and nature creates an invigorating experience that elevates your enjoyment.</li>
            </ul>
      </div>
  )
}

export default Cricket
