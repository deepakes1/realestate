import React from 'react'

function Services() {
  return (
    <div className="p-5">
      <h1 className=' text-2xl md:text-4xl font-bold '>Our Services</h1>

      <div className="mt-5">
        <h1 className='text-xl md:text-2xl font-semibold'>What We Offer</h1>
        <p className='mt-2 text-lg md:text-xl'>At Sahara Housing, we provide a wide range of services to help your business thrive in the digital age. Our team of experts is dedicated to delivering high-quality solutions tailored to your unique needs.</p>

        {/*Residential Services */}

          <h1 className='text-2xl md:text-3xl mt-7 mb-7 font-bold'>Amenities </h1>

          <div className="flex flex-wrap justify-center gap-4">
            {/* clubs */}
            <div className="bg-clubs flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
              <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300'>Clubs</h1>
            </div>


            {/* community center */}
            <div className="bg-community flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
              <h1 className='text-lg text-center md:text-2xl text-white   p-2 inline-block font-black brightness-300 textblackline'>community center</h1>
            </div>

            {/* hospital  */}
            <div className="bg-hospital flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
              <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline '>Hospital</h1>
            </div>

            {/* shopping */}
            <div className="bg-shopping flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
              <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline'>Shopping mall</h1>
            </div>

            {/* theter */}
            <div className="bg-thetre flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
              <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300'>multiplex theatre</h1>
            </div>

            {/* school center */}
            <div className="bg-school flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
              <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline'>School</h1>
            </div>

            {/*  power supply */}
            <div className="bg-power flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
              <h1 className='text-white text-center text-lg  md:text-2xl  p-2 inline-block font-black brightness-300'>Uninterrupted Power Supply</h1>
            </div>

            {/* water supply */}
            <div className="bg-water flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
              <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline'>Water Supply</h1>
            </div>

            {/* security */}
            <div className="bg-security flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
              <h1 className='text-white text-2xl  p-2 inline-block font-black brightness-300'>security</h1>
            </div>

            {/* home */}
            <div className="bg-home flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
              <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline'>Home</h1>
            </div>

            {/* transport */}
            <div className="bg-transport flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
              <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline'>Transport</h1>
            </div>

            {/* park */}
            <div className="bg-park flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
              <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline'>Park</h1>
            </div>

          </div>

          

          
          
        
        
      </div>
    </div>
  )
}

export default Services
