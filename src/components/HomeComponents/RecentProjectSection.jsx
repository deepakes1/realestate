import React from 'react'

function RecentProjectSection() {
  return (
    <div>
      <div className="mt-5 border-t-2 bg-slate-100">
        <div className="text-center mt-2 p-5 lg:h-[250px] lg:flex lg:flex-col lg:justify-center">
            <h1 className='font-semibold text-2xl lg:text-4xl mb-2'>Our Recent Projects</h1>
            <p className='lg:text-xl lg:w-[80%] lg:mt-4 mx-auto'>Our experienced leadership team is dedicated to driving innovation, fostering a collaborative culture, and ensuring the success of every project we undertake.</p>
        </div>

        <div className="flex gap-4 flex-wrap justify-center p-5  ">
            {/* project1 */}
            <div className="text-center  bg-white p-5 w-[350px] lg:flex-grow  mx-auto transition-all hover:scale-105">
            <div className="">
                <img src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=600" className='object-cover h-[40vh] w-full' alt="" />
            </div>
            <div className="">
                <p className='text-xl font-semibold mt-3 mb-2'>Luxuary Apartment Complex</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nisi?</p>
            </div>
            </div>

            {/* project2 */}
            <div className="text-center  bg-white p-5 w-[350px] lg:flex-grow transition-all hover:scale-105 mx-auto">
                <div className="">
                <img src="https://images.pexels.com/photos/932328/pexels-photo-932328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='object-cover h-[40vh] w-full' alt="" />
                </div>
                <div className="">
                <p className='text-xl font-semibold mt-3 mb-2'>Luxuary Apartment Complex</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nisi?</p>
                </div>
            </div>

            {/* project3 */}
            <div className="text-center  bg-white p-5 w-[350px] lg:flex-grow transition-all hover:scale-105  mx-auto">
                <div className="">
                <img src="https://images.pexels.com/photos/17514602/pexels-photo-17514602/free-photo-of-modern-apartment-building-in-chicago.jpeg?auto=compress&cs=tinysrgb&w=600" className='object-cover h-[40vh] w-full' alt="" />
                </div>
                <div className="">
                <p className='text-xl font-semibold mt-3 mb-2'>Luxuary Apartment Complex</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nisi?</p>
                </div>
            </div>

        </div>
            
        </div>
    </div>
  )
}

export default RecentProjectSection
