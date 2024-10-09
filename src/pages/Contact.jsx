import React from 'react'
import phone from "../assets/phone.gif"
import location from "../assets/location-pin.gif"
import message from "../assets/message.gif"
function Contact() {
  return (
    <div>

      <div className="mt-2 flex justify-end">
          <a href='https://forms.gle/sY55SKJFzhSxkymE9' className='text-blue-400 px-2 py-2 '>Register Online</a>
          <a  className="text-blue-400 px-2 py-2" href="{downloadFile}" download ="downloadFile.pdf" >
            Offline Form
          </a>
       </div>
      <h1 className='text-3xl font-semibold text-center mt-8'>Contact Us</h1>

      <div className="flex flex-wrap justify-center gap-7 mt-8 bg-slate-200 p-6">

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
            <img src={message} className='object-cover h-[70px] w-[70px]' alt="" />
          </div>
          <h1 className='text-xl font-semibold mt-3'>By Email</h1>
          <p className='text-md mt-2'>For general inquiries, feedback, or support requests.</p>
          <p className='text-blue-500 mt-2'>sahara@gmail.com'</p>
        </div>


        {/* address */}
        <div className="w-[350px] p-5 text-center bg-white ">
          <div className="flex justify-center">
            <img src={location} className='object-cover h-[70px] w-[70px]' alt="" />
          </div>
          <h1 className='text-xl font-semibold mt-3'>Address</h1>
          <p className='text-md mt-2'>Located on Sathy Road, Visvaspuram, Sarvanampatti</p>
          <p className='text-blue-500 mt-2'>+914373282864</p>
        </div>


      </div>
      
    </div>
  )
}

export default Contact
