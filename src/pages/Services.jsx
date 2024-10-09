import React from 'react'
import { Link } from 'react-router-dom'

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
            <Link to = "/Club">
              <div className="bg-clubs flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300'>Clubs</h1>
              </div>
            </Link>

            {/* hotels */}
            <Link to= "/Hotel">
              <div className="bg-hotel flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300'>Hotels</h1>
              </div>
            </Link>


            {/* community center */}
            <Link to = "/Community">
              <div className="bg-community flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
                <h1 className='text-lg text-center md:text-2xl text-white   p-2 inline-block font-black brightness-300 textblackline'>community center</h1>
              </div>
            </Link>

            {/* hospital  */}
            <Link to = "/Hospital">
              <div className="bg-hospital flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline '>Hospital</h1>
              </div>
            </Link>

            {/* shopping */}
            <Link to = "/Mall">
              <div className="bg-shopping flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline'>Shopping mall</h1>
              </div>
            </Link>

            {/* theter */}
            <Link to= "/Multiplex">
              <div className="bg-thetre flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300'>multiplex theatre</h1>
              </div>
            </Link>

            {/* school center */}
            <Link to = "/Education">
              <div className="bg-school flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline'>Education</h1>
              </div>
            </Link>

            {/*  power supply */}
            <Link to= "/Power">
              <div className="bg-power flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
                <h1 className='text-white text-center text-lg  md:text-2xl  p-2 inline-block font-black brightness-300'>Uninterrupted Power Supply</h1>
              </div>
            </Link>

            {/* water supply */}
            <Link to= "/Water">
              <div className="bg-water flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline'>Water Supply</h1>
              </div>
            </Link>

            {/* security */}
            <Link to= "/Security">
              <div className="bg-security flex justify-center items-center w-[50vw] md:w-[40vw] lg:w-[20vw] transition-all hover:scale-105">
                <h1 className='text-white text-2xl  p-2 inline-block font-black brightness-300'>security</h1>
              </div>
            </Link>

          </div>
        
      </div>
    </div>
  )
}

export default Services
