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
                <h1 className='text-blue-800 mt-2'>The club offers a wide range of recreational facilities, including sports courts, a large swimming pool, and a fitness centre. It also features business amenities, a 24-hour coffee shop, and an expansive party lawn for events.</h1>

              </div>
            </Link>

            {/* hotels */}
            <Link to= "/Hotel">
              <div className=" w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-hotel flex justify-center items-center transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300'>Hotels</h1>
              </div>
              <h1 className='text-blue-800 mt-2'>The grand hotel features 100-300 rooms designed with modern architecture and premium facilities. Amenities include a  air-conditioned lobby, a pillar-less banquet hall for over 800 guests, diverse dining options, and expansive parking.</h1>

              </div>
            </Link>


            {/* community center */}
            <Link to = "/Community">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-community flex justify-center items-center  transition-all hover:scale-105">
                <h1 className='text-lg text-center md:text-2xl text-white   p-2 inline-block font-black brightness-300 textblackline'>community center</h1>
              </div>
              <h1 className='text-blue-800 mt-2'>The township includes two exclusive clubs and a community centre with indoor and outdoor games, a swimming pool, and a fitness centre. Amenities feature sports facilities, a TV room, a hall for 700, and a nature care centre for wellness services.</h1>

              </div>
            </Link>

            {/* hospital  */}
            <Link to = "/Hospital">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-hospital flex justify-center items-center transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline '>Hospital</h1>
              </div>
              <h1 className='text-blue-800 mt-2'>The 25-bed Sahara Mini Hospital offers modern care with 24/7 power, featuring outpatient and emergency services, radiology, maternity care, an operation theatre, and telemedicine for expert consultations with Sahara Hospital.</h1>

              </div>
            </Link>

            {/* shopping */}
            <Link to = "/Mall">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-shopping flex justify-center items-center  transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline'>Shopping mall</h1>
              </div>
              <h1 className='text-blue-800 mt-2'>This unique shopping mall blends retail and entertainment in a modern space, ensuring residents' privacy. Key features include a hypermarket, kids' play zone, multi-cuisine food courts, outdoor sports facilities, and ample parking, all with 24/7 power backup.</h1>

              </div>
            </Link>

            {/* theter */}
            <Link to= "/Multiplex">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-thetre flex justify-center items-center transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300'>multiplex theatre</h1>
              </div>
              <h1 className='text-blue-800 mt-2'>The 3-screen multiplex offers luxurious seating for over 1,000 in stylish interiors. It features a large playground for outdoor sports, a fast food center, and ample parking, ensuring a great experience.</h1>
              </div>
            </Link>

            {/* school center */}
            <Link to = "/Education">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-school flex justify-center items-center transition-all hover:scale-105">
                  <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline'>Education</h1>
                </div>
                <h1 className='text-blue-800 mt-2'>The education centre will nurture 1,600 students through academics, personality development, and extracurricular activities. Key features include spacious classrooms, expert faculty, a multipurpose assembly hall, sports facilities, and a library, ensuring a well-rounded learning experience.</h1>
              </div>
            </Link>

            {/*  power supply */}
            <Link to= "/Power">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-power flex justify-center items-center transition-all hover:scale-105">
                  <h1 className='text-white text-center text-lg  md:text-2xl  p-2 inline-block font-black brightness-300'>Uninterrupted Power Supply</h1>
                </div>
                <h1 className='text-blue-800 mt-2'>Experience uninterrupted power in your Sahara City home with our reliable UPS systems. Enjoy seamless backup during outages, 24/7 support, and real-time grid monitoring. With regular maintenance and high-capacity generators, your home will stay powered and comfortable.</h1>

              </div>
            </Link>

            {/* water supply */}
            <Link to= "/Water">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-water flex justify-center items-center  transition-all hover:scale-105">
                <h1 className='text-white text-lg text-center md:text-2xl  p-2 inline-block font-black brightness-300 textblackline'>Water Supply</h1>
              </div>
                <h1 className='text-blue-800 mt-2'>Sahara City Homes provides residents with clean drinking water through a Reverse Osmosis plant, delivering safe water directly to kitchens and helping combat waterborne diseases. The community also features piped cooking gas and eco-friendly waste disposal systems for improved living conditions.</h1>
              </div>
            </Link>

            {/* security */}
            <Link to= "/Security">
              <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
                <div className="bg-security flex justify-center items-center transition-all hover:scale-105">
                <h1 className='text-white text-2xl  p-2 inline-block font-black brightness-300'>security</h1>
              </div>
                <h1 className='text-blue-800 mt-2'>Sahara City Homes provides a secure environment with a centralized control station, 24-hour armed security, and CCTV surveillance. Residents benefit from quick response teams, fire-fighting facilities, and patrolling vehicles with armed guards for added safety.</h1>
             
              </div>
            </Link>

          </div>
        
      </div>
    </div>
  )
}

export default Services
