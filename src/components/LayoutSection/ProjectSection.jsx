import React from 'react'
import model1 from '../../assets/model1.png'
import model2 from '../../assets/model2.png'


// import crown4 from "../../assets/crown4.jpg"


function ProjectSection() {
  return (
    <>
    
    <div className="lg:flex gap-3 p-5  justify-center">
      <div className='lg:w-[30vw] w-[90vw]'>
        <p className='font-semibold text-center text-2xl lg:text-3xl mb-4'>Approximately 200 Acre</p>
        <img src={model1} className='h-[100vh] w-[90vw] lg:w-[30vw]' alt="" />
      </div>

      <div className='mt-5 lg:mt-0 lg:w-[30vw] w-[90vw]'>
        <p  className='font-semibold text-2xl text-center lg:text-3xl mb-4'>Approximately 100 Acre</p>
        <img src={model2} className='h-[100vh]  w-[90vw]' alt="" />
      </div>
    </div>

    <div className="mt-5">
      {/* Great */}
      <h1  className="font-semibold text-center text-2xl lg:text-4xl mb-4">PLANS</h1>
      <h1  className="font-semibold text-center lg:text-3xl mb-4">1. Great</h1>


      {/* table */}
      

      

      


      {/* Crown */}
      <h1  className="font-semibold text-center lg:text-3xl mb-4 mt-6">2. Crown</h1>
      <p className='text-xl text-center mb-4 font-semibold'>Type B (Stilt plus 9 Floors with 3 lifts) 2 Bedroom + Terrace, 2 Bedroom, Penthouse Units</p>
      
      

      

      

      

       {/* <div className="">
        <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>First Floor Block Plan.</h1>
        <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Unit Nos. are marked on the floor plan</h1>
        <img src={crown4} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
      </div> */}

    </div>
  

    </>
  )
}

export default ProjectSection
