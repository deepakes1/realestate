import React from 'react'
import homeimg1 from "../../assets/home.gif"
import homeimg2 from "../../assets/repair-tools.gif"
import { Link } from 'react-router-dom'

function ServicesHomeSection() {
  return (
    <div>
       <div className="bg-slate-100 border-t-2">
          <div className="text-center mt-2 p-5 lg:h-[250px] lg:flex lg:flex-col lg:justify-center">
            <h1 className='font-semibold text-2xl lg:text-4xl mb-2'>Amenities</h1>
            <p className='lg:text-xl lg:w-[80%] lg:mt-4 mx-auto'>Our experienced leadership team is dedicated to driving innovation, fostering a collaborative culture, and ensuring the success of every project we undertake.</p>
          </div>

          <div className="flex gap-4 flex-wrap justify-center p-5  ">
            {/* service1 */}
            <Link to="/Plans">
             <div className="text-center  bg-white p-5 w-[350px] lg:flex-grow transition-all hover:rounded-lg hover:scale-105 mx-auto">
              <div>
              <div className="flex justify-center">
                <img src={homeimg1} className='object-cover h-[90px] w-[90px] rounded-full transition-all hover:scale-105' alt="" />
              </div>
                <p className='text-xl font-semibold mb-2'>Residential Units</p>
                <p>Discover your dream home in our modern residential units, designed for comfort and convenience.</p>
              </div>
            </div>
            </Link>
            

            
             

            {/* service2 */}
             <Link to="/Rennovation">
              <div className="text-center bg-white p-5 w-[350px] lg:flex-grow transition-all hover:rounded-lg hover:scale-105  mx-auto">
                <div>
                <div className="flex justify-center">
                  <img src={homeimg2} className='object-cover h-[80px] w-[80px] rounded-full transition-all hover:scale-105' alt="" />
                </div>
                  <p className='text-xl font-semibold mb-2'>Rennovation & Remodelling</p>
                  <p>Revitalize your home with our customized renovation and remodeling solutions, bringing your vision to life.</p>
                </div>
              </div>
             </Link>

          </div>
          
    </div>
    </div>
  )
}

export default ServicesHomeSection
