import React from 'react';
import { Link } from "react-router-dom";

function ContactSection() {
  return (
    <div className="bg-slate-200">
      <div className="text-center mt-4 lg:mt-10 p-5 lg:h-[300px] lg:flex lg:flex-col lg:justify-center">
        <h1 className='font-semibold text-2xl lg:text-4xl mb-2'>Ready to Find Your Dream Home?</h1>
        <p className='lg:text-xl lg:w-[80%] lg:mt-4 mx-auto'>
          Contact our team of real estate experts today to get started on your home buying journey.
        </p>
        <div className="mt-10">
          <Link to="/Contact" className='bg-black text-white p-3 rounded hover:bg-gray-800 transition'>
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
