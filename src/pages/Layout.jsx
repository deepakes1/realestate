import React from 'react'
import layout from "../assets/layout.jpeg"

import ProjectSection from '../components/LayoutSection/ProjectSection';

function Layout() {
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

        <ProjectSection/>
            
      </div>
    </div>
  )
}

export default Layout;
