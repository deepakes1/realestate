import React from 'react'
import phone from "../assets/phone.gif"
function Contact() {
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center mt-8'>Contact Us</h1>

      <div className="flex justify-center gap-7 mt-8 bg-slate-200 p-6">

        {/* phone */}
        <div className="w-[350px] p-5 text-center bg-white ">
          <div className="flex justify-center">
            <img src={phone} className='object-cover h-[70px] w-[70px]' alt="" />
          </div>
          <h1 className='text-xl font-semibold mt-3'>By Phone</h1>

            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem.</p>

            <p className='text-blue-500 mt-2'>+914373282864</p>

        </div>

        {/* email */}
        <div className="w-[350px] p-5 text-center bg-white ">
          <div className="flex justify-center">
            <img src={phone} className='object-cover h-[70px] w-[70px]' alt="" />
          </div>
          <h1 className='text-xl font-semibold mt-3'>By Phone</h1>

            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem.</p>

            <p className='text-blue-500 mt-2'>+914373282864</p>

        </div>


        {/* address */}
        <div className="w-[350px] p-5 text-center bg-white ">
          <div className="flex justify-center">
            <img src={phone} className='object-cover h-[70px] w-[70px]' alt="" />
          </div>
          <h1 className='text-xl font-semibold mt-3'>By Phone</h1>

            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem.</p>

            <p className='text-blue-500 mt-2'>+914373282864</p>

        </div>


      </div>
      
    </div>
  )
}

export default Contact
