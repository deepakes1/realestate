import React from 'react'

function FactsSectionHome() {
  return (
    <div>
        <div className="md:flex relative border-t-2  gap-5">
        <div className="md:flex md:w-[100vw] flex-col justify-center items-center p-6 ">
            <h1 className='font-semibold text-2xl text-center lg:text-4xl mb-4'>Facts about the company</h1>
            <div className="flex gap-5 items-center mb-1">
              <p className='lg:text-xl w-1/2 lg:text-center'>Fresh Employment Generation </p>
              <p className='lg:text-xl w-1/2 font-semibold'>65,100 Workers</p>
            </div>
            <div className="flex gap-5 items-center mb-1">
              <p className='lg:text-xl w-1/2'>Stamp Duty</p>
              <p className='lg:text-xl w-1/2 font-semibold'>Rs. 16,651.46 Crore</p>
            </div>
            <div className="flex gap-5 items-center mb-1">
              <p className='lg:text-xl w-1/2'>Sales Tax</p>
              <p className='lg:text-xl w-1/2 font-semibold'>Rs. 3,765.00 Crore</p>
            </div>
            <div className="flex gap-5  items-center mb-1">
              <p className='lg:text-xl w-1/2 lg:text-center'>Labour Wages Paid </p>
              <p className='lg:text-xl w-1/2 font-semibold'>Rs. 11,727.57 Crore</p>
            </div>
        </div>

        <div className="mt-4 flex flex-col justify-center p-4 ">
            <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='object-cover h-[30vh]  md:h-[50vh] w-[100vw]' alt="not loading" />
        </div>

        </div>
    </div>
  )
}

export default FactsSectionHome
