import React from 'react'
import model1 from '../../assets/model1.png'
import model2 from '../../assets/model2.png'

import crown1 from '../../assets/crown1.png'
import crown2 from '../../assets/crown1.png'
import crown3 from '../../assets/crown3.jpg'
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
      
      {/* table */}
      <table className="border-2 border-black border-collapse text-center p-5 md:w-[70vw] mx-auto">
      <thead>
        <tr>
          <th className="border-2 border-black p-2">S.No.</th>
          <th className="border-2 border-black p-2">FLAT/UNIT TYPE</th>
          <th className="border-2 border-black p-2">UNIT AREA (sq.ft)</th>
          <th className="border-2 border-black p-2">UNIT AREA (sq.m)</th>
          <th className="border-2 border-black p-2">TERRACE AREA (sq.ft)</th>
          <th className="border-2 border-black p-2">TERRACE AREA(sq.m)</th>
          <th className="border-2 border-black p-2">FLAT/UNIT NO. (ON EACH FLOOR)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-2 border-black p-2">1</td>
          <td className="border-2 border-black p-2">FIRST FLOOR PLAN (2 B/R+ TERRACE)</td>
          <td className="border-2 border-black p-2">885.01</td>
          <td className="border-2 border-black p-2">82.25</td>
          <td className="border-2 border-black p-2">296.74</td>
          <td className="border-2 border-black p-2">27.58</td>
          <td className="border-2 border-black p-2">1,5,6</td>
        </tr>
        <tr>
          <td className="border-2 border-black p-2">2</td>
          <td className="border-2 border-black p-2">FIRST FLOOR PLAN (2 B/R)</td>
          <td className="border-2 border-black p-2">927.01</td>
          <td className="border-2 border-black p-2">86.15</td>
          <td className="border-2 border-black p-2">-</td>
          <td className="border-2 border-black p-2">-</td>
          <td className="border-2 border-black p-2">2,3,4</td>
        </tr>
      </tbody>
      </table>

      <div className="">
        <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>First Floor Block Plan.</h1>
        <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 1,5</h1>
        <img src={crown1} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
      </div>

      <div className="">
        <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>First Floor Block Plan.</h1>
        <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 2,4</h1>
        <img src={crown2} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
      </div>

      <div className="">
        <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>First Floor Block Plan.</h1>
        <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Unit Nos. are marked on the floor plan</h1>
        <img src={crown3} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
      </div>

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
