import React from 'react'
import layout from "../assets/layout.jpeg"

function Gallery() {
  return (
    <div>
      <div className="mt-10">
        <img src={layout} className='h-[80vh] lg:h-[90vh] w-full' alt="" />
      </div>

      
      <div className="mt-5 border-t-2 bg-slate-100">
      <div className="text-center mt-2 p-5 lg:h-[250px] lg:flex lg:flex-col lg:justify-center">
        <h1 className='font-semibold text-2xl lg:text-4xl mb-2'>Our Recent Projects</h1>
        <p className='lg:text-xl lg:w-[80%] lg:mt-4 mx-auto'>Our experienced leadership team is dedicated to driving innovation, fostering a collaborative culture, and ensuring the success of every project we undertake.</p>
      </div>

      <div className="flex gap-4 flex-wrap justify-center p-5  ">
        {/* project1 */}
        <div className="text-center  bg-white p-5 md:w-[75vw] w-[350px] lg:flex-grow  mx-auto">
          <div className="">
            <img src="https://images.pexels.com/photos/18118208/pexels-photo-18118208/free-photo-of-residential-skyscraper-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='object-cover h-[40vh] w-full' alt="" />
          </div>
          <div className="">
            <p className='text-xl font-semibold mt-3 mb-2'>Luxuary Apartment Complex</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nisi?</p>
          </div>
        </div>

        {/* project2 */}
          <div className="hidden lg:block text-center  bg-white p-5 w-[350px] lg:flex-grow  mx-auto">
            <div className="">
              <img src="https://images.pexels.com/photos/8161559/pexels-photo-8161559.jpeg?auto=compress&cs=tinysrgb&w=600" className='object-cover h-[40vh] w-full' alt="" />
            </div>
            <div className="">
              <p className='text-xl font-semibold mt-3 mb-2'>Luxuary Apartment Complex</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nisi?</p>
            </div>
        </div>

        {/* project3 */}
          <div className="text-center  bg-white p-5 w-[350px] lg:flex-grow  mx-auto">
            <div className="">
              <img src="https://images.pexels.com/photos/7078617/pexels-photo-7078617.jpeg?auto=compress&cs=tinysrgb&w=600" className='object-cover h-[40vh] w-full' alt="" />
            </div>
            <div className="">
              <p className='text-xl font-semibold mt-3 mb-2'>Luxuary Apartment Complex</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nisi?</p>
            </div>
        </div>

        {/* project4 */}
          <div className="hidden md:block text-center  bg-white p-5 w-[350px] lg:flex-grow  mx-auto">
            <div className="">
              <img src="https://images.pexels.com/photos/25947381/pexels-photo-25947381/free-photo-of-large-apartment-building-with-colorful-rainbow-balconies.jpeg?auto=compress&cs=tinysrgb&w=600" className='object-cover h-[40vh] w-full' alt="" />
            </div>
            <div className="">
              <p className='text-xl font-semibold mt-3 mb-2'>Luxuary Apartment Complex</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nisi?</p>
            </div>
        </div>

        {/* project5 */}
          <div className="text-center  bg-white p-5 w-[350px] lg:flex-grow  mx-auto">
            <div className="">
              <img src="https://images.pexels.com/photos/26183653/pexels-photo-26183653/free-photo-of-modern-apartment-building-in-evening.jpeg?auto=compress&cs=tinysrgb&w=600" className='object-cover h-[40vh] w-full' alt="" />
            </div>
            <div className="">
              <p className='text-xl font-semibold mt-3 mb-2'>Luxuary Apartment Complex</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nisi?</p>
            </div>
        </div>

        {/* project6 */}
          <div className="hidden md:block text-center  bg-white p-5 w-[350px] lg:flex-grow  mx-auto">
            <div className="">
              <img src="https://images.pexels.com/photos/4916481/pexels-photo-4916481.jpeg?auto=compress&cs=tinysrgb&w=600" className='object-cover h-[40vh] w-full' alt="" />
            </div>
            <div className="">
              <p className='text-xl font-semibold mt-3 mb-2'>Luxuary Apartment Complex</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nisi?</p>
            </div>
        </div>

        {/* project7 */}
          <div className="text-center  bg-white p-5 w-[70vw] lg:flex-grow  mx-auto">
            <div className="">
              <img src="https://images.pexels.com/photos/6161512/pexels-photo-6161512.jpeg?auto=compress&cs=tinysrgb&w=600" className='object-cover h-[40vh] w-full' alt="" />
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

export default Gallery
