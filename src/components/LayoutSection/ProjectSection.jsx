import React from 'react'
import model1 from '../../assets/model1.png'
import model2 from '../../assets/model2.png'
import great from '../../assets/great.png'
import great2 from '../../assets/great2.png'
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
      <h1  className="font-semibold text-center lg:text-3xl mb-4">Great</h1>

      {/* table */}
      <table className="border-2 border-black border-collapse text-center p-5 md:w-[70vw] mx-auto">
      <thead>
        <tr>
          <th className="border-2 border-black p-2">S.No.</th>
          <th className="border-2 border-black p-2">FLAT/UNIT TYPE</th>
          <th className="border-2 border-black p-2">UNIT AREA (sq.ft)</th>
          <th className="border-2 border-black p-2">UNIT AREA (sq.m)</th>
          <th className="border-2 border-black p-2">FLAT/UNIT NO. (ON EACH FLOOR)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-2 border-black p-2">1</td>
          <td className="border-2 border-black p-2">TYPICAL FLOOR PLAN</td>
          <td className="border-2 border-black p-2">705.69</td>
          <td className="border-2 border-black p-2">65.58</td>
          <td className="border-2 border-black p-2">1 - 8</td>
        </tr>
      </tbody>
      </table>

      {/* great plan1 heading */}
      <div className="">
        <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Typical Block Plan* (1st to 9th Floor).</h1>
        <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Unit Nos. are marked on the floor plan.</h1>
        <img src={great} className='w-[50vw] object-cover mx-auto mt-5' alt="" />
      </div>

      <div className="">
        <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Typical Floor Unit.</h1>
        <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 3,4,7,8</h1>
        <img src={great2} className='w-[50vw] object-cover mx-auto mt-5' alt="" />
      </div>

    </div>
  

    </>
  )
}

export default ProjectSection
