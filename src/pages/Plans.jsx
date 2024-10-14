import React from 'react'
import { Link } from 'react-router-dom'

function Plans() {
  return (
    <div className='p-5'>
      <h1 className='text-xl md:text-2xl'>The Plans section is a crucial part of your housing industry, where visitors can explore the different types of living spaces available. To effectively showcase the two types of plans</h1>
        <ul style={{ listStyleType: 'disc' }} className='w-[250px] mx-auto mt-2 md:mt-0  md:p-5 text-lg lg:text-xl'>
            <li>Flats</li>
            <li>Individual Villa's</li>
        </ul>

        <div className="flex flex-wrap gap-7 justify-center">
            <Link to= "/Flats">
                <div className="mt-5 w-[300px] bg-slate-200 p-5 transition-all hover:scale-110 cursor-pointer hover:bg-slate-700 hover:text-white hover:rounded-3xl">
                    <h1 className='text-xl font-semibold mb-3'>Flats</h1>
                    <h1 className='text-lg'> Our Flat plans are designed to provide a comfortable and convenient living experience. These spacious apartments are perfect for individuals, couples, and small families who value ease of maintenance .</h1>            
                </div>
            </Link>

            <Link to= "/Villas">
              <div className="mt-5 w-[300px] bg-slate-200 p-5 transition-all hover:scale-110 cursor-pointer hover:bg-slate-700 hover:text-white hover:rounded-3xl">
                <h1 className='text-xl font-semibold mb-3'>Individual Villa's</h1>
                <h1 className='text-lg'>Our Individual plans are designed to provide a unique and personalized living experience. These standalone homes offer the ultimate in privacy, perfect for families, couples, or individuals who value independence and space.</h1>            
              </div>
            </Link>
        </div>
    </div>
  )
}

export default Plans
