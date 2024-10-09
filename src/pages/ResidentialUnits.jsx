import React from 'react'
import furniture from '../assets/furniture.png'

function ResidentialUnits() {
  return (
    <div>
      <h1 className='text-2xl font-semibold text-center mt-5 p-4'>One to five bedrooms residential units</h1>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="p-5 bg-slate-200 w-[350px]">
                <h1 className='text-xl font-semibold'>1 Bedroom Unit</h1>
                <p >600-800 sq ft</p>
                <img src={furniture} className='h-[30px] w[30px] object-cover' alt="" />
                <p className='mt-3'><span className='font-semibold'>Features</span>: balcony, modular kitchen, wardrobes</p>

                <p className='font-semibold'>Starting at ₹40,000</p>
            </div>

            <div className="p-5 bg-slate-200 w-[350px]">
                <h1 className='text-xl font-semibold'>2 Bedroom Unit</h1>
                <p >600-800 sq ft</p>
                <img src={furniture} className='h-[30px] w[30px] object-cover' alt="" />
                <p className='mt-3'><span className='font-semibold'>Features</span>: balcony, modular kitchen, wardrobes</p>

                <p className='font-semibold'>Starting at ₹80,000</p>
            </div>

            <div className="p-5 bg-slate-200 w-[350px]">
                <h1 className='text-xl font-semibold'>3 Bedroom Unit</h1>
                <p >600-800 sq ft</p>
                <img src={furniture} className='h-[30px] w[30px] object-cover' alt="" />
                <p className='mt-3'><span className='font-semibold'>Features</span>: balcony, modular kitchen, wardrobes</p>

                <p className='font-semibold'>Starting at ₹1,20,000</p>
            </div>

            <div className="p-5 bg-slate-200 w-[350px]">
                <h1 className='text-xl font-semibold'>4 Bedroom Unit</h1>
                <p >600-800 sq ft</p>
                <img src={furniture} className='h-[30px] w[30px] object-cover' alt="" />
                <p className='mt-3'><span className='font-semibold'>Features</span>: balcony, modular kitchen, wardrobes</p>

                <p className='font-semibold'>Starting at ₹1,60,000</p>
            </div>

            <div className="p-5 bg-slate-200 w-[350px]">
                <h1 className='text-xl font-semibold'>5 Bedroom Unit</h1>
                <p >600-800 sq ft</p>
                <img src={furniture} className='h-[30px] w[30px] object-cover' alt="" />
                <p className='mt-3'><span className='font-semibold'>Features</span>: balcony, modular kitchen, wardrobes</p>
                <p className='text-lg font-semibold mt-4'>Starting at ₹2,00,000</p>

            </div>

            
        </div>

      
    </div>
  )
}

export default ResidentialUnits
