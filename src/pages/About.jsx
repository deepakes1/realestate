import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <div className="mt-5">
        {/* top header */}
        <div className="md:flex gap-5">
            <div className="md:flex flex-col justify-center p-6">
                <h1 className='font-semibold text-2xl lg:text-4xl mb-2'>Sahara Housing</h1>
                <p className='lg:text-xl'>Sahara real estate business launches its flagship brand of township- Sahara City Homes in Coimbatore.Our mission is to transform communities by constructing sustainable, functional, and visually stunning structures that exceed our clients' expectations.</p>
            </div>

            <div className="mt-4 flex flex-col justify-center p-4">
              <img src="https://plus.unsplash.com/premium_photo-1664474559614-74d16c1c6f6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover h-[30vh]  md:h-[90%] w-full md:w-[90%]' alt="not loading" />
            </div>

        </div>

        {/* history section */}
        <div className="bg-slate-200">
          <div className="text-center mt-10 p-5 lg:h-[400px] lg:flex lg:flex-col lg:justify-center">
            <h1 className='font-semibold text-2xl lg:text-4xl mb-2'>Our History</h1>
            <p className='lg:text-xl lg:w-[80%] lg:mt-4 mx-auto'>Sahara City Homes was launched in 2008 with a vision to provide standard community living with a range of facilities and amenities. Since its inception, we have been committed to delivering high-quality residential units, ranging from apartments to independent bungalows, in our 113.33-acre township in Coimbatore. Our dedication to innovation, customer satisfaction, and sustainability has earned us a reputation as a trusted real estate developer in the region.</p>
          </div>

          <div className="flex flex-col justify-center p-4 lg:p-0">
              <img src="https://plus.unsplash.com/premium_photo-1661634283747-086f50bac2ec?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover h-[30vh]  md:h-[50vh] lg:h-[70vh] w-full md:w-full' alt="not loading" />
          </div>
        </div>


        {/* leadership Team */}
        <div className="">
          <div className="text-center mt-10 p-5 lg:h-[300px] lg:flex lg:flex-col lg:justify-center">
            <h1 className='font-semibold text-2xl lg:text-4xl mb-2'>Our Leadership</h1>
            <p className='lg:text-xl lg:w-[80%] lg:mt-4 mx-auto'>Our experienced leadership team is dedicated to driving innovation, fostering a collaborative culture, and ensuring the success of every project we undertake.</p>
          </div>

          <div className="mt-5 flex gap-4 flex-wrap transition-all  justify-center p-10  ">
            {/* user1 */}
            <div className="text-center bg-slate-100 p-5 w-[350px] lg:flex-grow transition-all  hover:bg-black hover:text-white hover:rounded-lg  mx-auto">
              <div className="flex justify-center">
               <img src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnxlbnwwfDB8MHx8fDA%3D" className='object-cover h-[100px] w-[100px] rounded-full' alt="" />
              </div>
              <h1 className='mt-1 text-lg'>John Doe</h1>
              <p>CEO</p>
              <p>John has over 20 years of experience in the construction industry and is passionate about driving sustainable building practices.</p>
            </div>

            {/* user2 */}
            <div className="text-center bg-slate-100 p-5 w-[350px]  lg:flex-grow transition-all hover:bg-black hover:text-white hover:rounded-lg  mx-auto">
              <div className="flex justify-center">
               <img src="https://images.unsplash.com/photo-1695830042175-af833fd6d982?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBmYWNlfGVufDB8MHwwfHx8MA%3D%3D" className='object-cover h-[100px] w-[100px] rounded-full' alt="" />
              </div>
              <h1 className='mt-1 text-lg'>Daisy Doe</h1>
              <p>CEO</p>
              <p>John has over 20 years of experience in the construction industry and is passionate about driving sustainable building practices.</p>
            </div>

            {/* user3 */}
            <div className="text-center bg-slate-100 p-5 w-[350px]  lg:flex-grow transition-all hover:bg-black hover:text-white hover:rounded-lg mx-auto">
              <div className="flex justify-center">
               <img src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnxlbnwwfDB8MHx8fDA%3D" className='object-cover h-[100px] w-[100px] rounded-full' alt="" />
              </div>
              <h1 className='mt-1 text-lg'>Chahar Doe</h1>
              <p>CEO</p>
              <p>John has over 20 years of experience in the construction industry and is passionate about driving sustainable building practices.</p>
            </div>

          </div>
          
        </div>
        
        {/* recent sales */}
        <div className="bg-slate-200">
          <div className="text-center mt-10 p-5 lg:h-[200px] lg:flex lg:flex-col lg:justify-center">
            <h1 className='font-semibold text-2xl lg:text-4xl mb-2'>Our Recent Sales</h1>
            <p className='lg:text-xl lg:w-[80%] lg:mt-4 mx-auto'>Check out some of our most recent successful home sales..</p>
          </div>

          <div className="md:flex gap-4 md:flex-wrap">
            {/*house1  */}
             <div className="text-center bg-slate-100 p-5 w-[350px] lg:flex-grow  mx-auto">
                <div className="flex justify-center">
                  <img src="https://images.unsplash.com/photo-1577920231835-c232d76c4662?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZSUyMG91dHNpZGV8ZW58MHwwfDB8fHwy" className=' h-[150px] w-[170px] lg:w-[80%] object-cover transition-all hover:scale-110' alt="" />
                </div>
                <h1 className='mt-3 text-lg font-semibold'>123 Main St</h1>
                <p>4 Beds, 3 Baths | 2,500 sq ft</p>
                <p>Sold for $750,000.</p>
              </div>

            {/* house2 */}
            <div className="text-center bg-slate-100 p-5 w-[350px] lg:flex-grow  mx-auto">
              <div className="flex justify-center">
               <img src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvbWUlMjBvdXRzaWRlfGVufDB8MHwwfHx8Mg%3D%3D" className=' h-[150px] w-[170px] lg:w-[80%] object-cover transition-all hover:scale-110' alt="" />
              </div>
               <h1 className='mt-3 text-lg font-semibold'>123 Main St</h1>
              <p>4 Beds, 3 Baths | 2,500 sq ft</p>
              <p>Sold for $750,000.</p>
              </div>

            {/* house3 */}
            <div className="hidden md:block text-center bg-slate-100 p-5 w-[350px] lg:flex-grow  mx-auto">
              <div className="flex justify-center font-semibold">
               <img src="https://images.unsplash.com/photo-1610429576656-0f0278e98a2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvbWUlMjBvdXRzaWRlfGVufDB8MHwwfHx8Mg%3D%3D" className=' h-[150px] w-[170px] lg:w-[80%] object-cover transition-all hover:scale-110' alt="" />
              </div>
              <h1 className='mt-3 text-lg'>123 Main St</h1>
              <p>4 Beds, 3 Baths | 2,500 sq ft</p>
              <p>Sold for $750,000.</p>
            </div>

          </div>
        </div>

        {/* contact us */}
          <div className="bg-slate-200">
            <div className="text-center mt-4 lg:mt-10 p-5 lg:h-[300px] lg:flex lg:flex-col lg:justify-center">
              <h1 className='font-semibold text-2xl lg:text-4xl mb-2'>Ready to Find Your Dream Home?</h1>
              <p className='lg:text-xl lg:w-[80%] lg:mt-4 mx-auto'>Contact our team of real estate experts today to get started on your home buying journey.</p>
              <div className="mt-10">
                <Link to="/Contact" className='bg-black text-white p-3'>Contact us</Link>
              </div>
            </div>
          </div>

      </div>
    </div>
  )
}

export default About;
