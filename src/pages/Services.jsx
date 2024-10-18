import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div className="p-5">
      

      <div className="mt-5">
        

        {/*Residential Services */}

          <h1 className='text-2xl md:text-3xl mt-7 mb-7 font-bold'>Amenities </h1>

          <div className="flex flex-wrap justify-center gap-7">
            {/* clubs */}
            <Link to = "/Club">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-clubs flex justify-center items-center  relative transition-all hover:scale-105">    
                  <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300'>Clubs</h1>  
                </div>
                <ul style={{listStyleType: 'disc'}} className='text-blue-800 mt-2 ml-5'>
                  <li>Wide range of recreational facilities</li>
                  <li>Sports courts available</li>
                  <li>Large swimming pool</li>
                  <li>Fitness centre</li>
                  <li>24-hour coffee shop</li>
                </ul>

              </div>
            </Link>

            {/* hotels */}
            <Link to= "/Hotel">
              <div className=" w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-hotel flex justify-center items-center transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300'>Hotels</h1>
              </div>
              <ul style={{listStyleType: 'disc'}} className='text-blue-800 mt-2 ml-5'>
                  <li>100-300 rooms with modern architecture</li>
                  <li>Premium facilities in each room</li>
                  <li>Air-conditioned lobby</li>
                  <li>Pillar-less banquet hall for over 800 guests</li>
                  <li>Diverse dining options</li>
                </ul>
              </div>
            </Link>


            {/* community center */}
            <Link to = "/Community">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-community flex justify-center items-center  transition-all hover:scale-105">
                <h1 className='text-lg text-center md:text-2xl text-white   p-2 inline-block font-black brightness-300 textblackline'>community center</h1>
              </div>
              <ul style={{listStyleType: 'disc'}} className='text-blue-800 mt-2 ml-5'>
                  <li>Family-friendly environment</li>
                  <li>Hall for 700 guests</li>
                  <li>TV room</li>
                  <li>Care centre for wellness services</li>
                  <li>Sports facilities.</li>
                </ul>
              </div>
            </Link>

            {/* hospital  */}
            <Link to = "/Hospital">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-hospital flex justify-center items-center transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline '>Hospital</h1>
              </div>
              <ul style={{listStyleType: 'disc'}} className='text-blue-800 mt-2 ml-5'>
                  <li>25-bed capacity</li>
                  <li>Modern healthcare facilities</li>
                  <li>Outpatient & services available</li>
                  <li>Operation theatre on-site</li>
                  <li>24/7 power supply</li>
                </ul>
              </div>
            </Link>

            {/* shopping */}
            <Link to = "/Mall">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-shopping flex justify-center items-center  transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline'>Shopping mall</h1>
              </div>
              <ul style={{listStyleType: 'disc'}} className='text-blue-800 mt-2 ml-5'>
                  <li>Unique blend of retail and entertainment</li>
                  <li>Modern shopping space ensuring privacy</li>
                  <li>Hypermarket for convenient shopping</li>
                  <li>Kids' play zone for family fun</li>
                  <li>Ample parking available</li>
                </ul>
              </div>
            </Link>

            {/* theter */}
            <Link to= "/Multiplex">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-thetre flex justify-center items-center transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300'>multiplex theatre</h1>
              </div>
              <ul style={{listStyleType: 'disc'}} className='text-blue-800 mt-2 ml-5'>
                  <li>3-screen multiplex with luxurious seating.</li>
                  <li>Capacity for over 1,000 viewers</li>
                  <li>Stylish interiors for an enhanced viewing experience</li>
                  <li>Focus on providing great experience</li>
                  
                </ul>
              </div>
            </Link>

            {/* school center */}
            <Link to = "/Education">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-school flex justify-center items-center transition-all hover:scale-105">
                  <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline'>Education</h1>
                </div>
                  <ul style={{listStyleType: 'disc'}} className='text-blue-800 mt-2 ml-5'>
                  <li>Capacity to nurture 1,600 students</li>
                  <li>Spacious classrooms for effective learning</li>
                  <li>Multipurpose assembly hall for events and gatherings</li>
                  <li>Well-equipped library for research and study.</li>
                </ul>
                </div>
            </Link>

            {/*  power supply */}
            <Link to= "/Power">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-power flex justify-center items-center transition-all hover:scale-105">
                  <h1 className='text-white text-center text-lg  md:text-2xl  p-2 inline-block font-black brightness-300'>Uninterrupted Power Supply</h1>
                </div>
                <ul style={{listStyleType: 'disc'}} className='text-blue-800 mt-2 ml-5'>
                  <li>Reliable UPS systems for uninterrupted power.</li>
                  <li>Seamless backup during outages.</li>
                  <li>Multipurpose assembly hall for events </li>
                  <li>Well-equipped library for research and study.</li>
                </ul>
              </div>
            </Link>

            {/* water supply */}
            <Link to= "/Water">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-water flex justify-center items-center  transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline'>Water Supply</h1>
              </div>
                <ul style={{listStyleType: 'disc'}} className='text-blue-800 mt-2 ml-5'>
                  <li>Clean drinking water from a Reverse Osmosis plant.</li>
                  <li>Eco-friendly waste disposal systems</li>
                  <li>Improved living conditions for residents.</li>
                  <li>Piped cooking gas for convenience.</li>
                  <li>Safe water delivered directly to Homes.</li>
                </ul>  
              </div>
            </Link>

            {/* security */}
            <Link to= "/Security">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-security flex justify-center items-center transition-all hover:scale-105">
                <h1 className='text-white text-2xl  p-2 inline-block font-black brightness-300'>security</h1>
              </div>
                <ul style={{listStyleType: 'disc'}} className='text-blue-800 mt-2 ml-5'>
                  <li>Secure environment with centralized control station</li>
                  <li>24-hour armed security presence</li>
                  <li>Fire-fighting facilities on-site.</li>
                  <li>Comprehensive CCTV surveillance</li>
                  <li>Quick response teams for emergencies.</li>
                </ul>  
              </div>
            </Link>

            <Link to= "/Cricket">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-cricket flex justify-center items-center transition-all hover:scale-105">
                <h1 className='text-white text-2xl  p-2 inline-block font-black brightness-300'>Cricket</h1>
              </div>
                <ul style={{listStyleType: 'disc'}} className='text-blue-800 mt-2 ml-5'>
                  <li>Spacious central ground.</li>
                  <li>Floodlit areas for day and night use</li>
                  <li>Opportunities for mind, body, and soul development.</li>
                  <li>Well-maintained pitch</li>
                  <li>Adequate parking for players.</li>
                </ul>  
              </div>
            </Link>

            <Link to= "/KidsPlayArea">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-KidsPlayArea flex justify-center items-center transition-all hover:scale-105">
                <h1 className='text-white text-2xl  p-2 inline-block font-black brightness-300'>KidsPlayArea</h1>
              </div>
                <ul style={{listStyleType: 'disc'}} className='text-blue-800 mt-2 ml-5'>
                  <li>Exclusive play area tailored for children.</li>
                  <li>Designed for fun, frolic, and entertainment</li>
                  <li>Modern play equipment for engaging activities</li>
                  <li>Soft flooring for safety during play</li>
                  <li>Varied play structures</li>
                </ul>  
                </div>
            </Link>

          </div>
        
      </div>
    </div>
  )
}

export default Services
