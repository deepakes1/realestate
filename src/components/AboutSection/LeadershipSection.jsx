import React from 'react'

function LeadershipSection() {
  return (
    <div>
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
    </div>
  )
}

export default LeadershipSection
