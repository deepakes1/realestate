import React from 'react'
import greatmain from "../../assets/greatmain.png"
import great from '../../assets/great.png'
import great2 from '../../assets/great2.png'
function Great() {
  return (
    <div>
      <img src={greatmain} className='w-full h-[70vh] object-cover' alt="" />
      <div className="p-5">
        <h1 className=' text-xl lg:text-2xl font-semibold'>High Rise Apartments</h1>
        <p className='mt-3 text-lg lg:text-xl font-semibold'>Meticulously placed at the <b>beginning of the township</b>, these apartments stand tall to sing the glory of ideal living in Sahara City Homes. These <b>9 storied apartments experience</b> a clear view of the surroundings and symbolize community living. The residents can feel the exquisite environment, free from air & noise pollution. The fresh breeze and beaming sunrays through the windows make life naturally beautiful. The residents can forget the hassles of water problems generally faced in high rise apartments. Here at their disposal, Is <b>uninterrupted drinking water supply</b> facilitated through boosters. High speed, efficient lifts backed by DG sets to overcome power cuts and ensure non-stop movement. Furthermore, the essence of every Sahara City Homes township i.e. <b>Security is well</b> taken care of. Very stringent and fool proof security is ensured through single entry/exit for the whole block. In short, life would be a bliss In high rise apartments.</p>
        
       <h1 className='text-xl text-center mt-4 font-semibold'>Type A (Stilt Plus 9 Floors with 2 lifts) 1 Bedroom Units.</h1>
        <table className="border-2 border-black border-collapse text-center mt-5 p-5 md:w-[70vw] mx-auto">
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
            <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 1,2,5,6.</h1>
            <img src={great} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
        </div>

        {/* great2 */}
        <div className="">
            <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Typical Floor Unit.</h1>
            <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 3,4,7,8</h1>
            <img src={great2} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
        </div>

        <div className="bg-slate-400 p-5 mt-7 mb-2">
            <h1 className='italic font-semibold text-xl lg:text-2xl'>Note:</h1>
            <h1 className='lg:text-xl'> All areas are inclusive of common areas of 2 sets of stairs, 2 lift areas, walls, common spaces & corridors </h1>
            <h1 className='lg:text-xl'>## Units shown with furniture are for an <b>indication of space only</b> and do not constitute the actual offering</h1> 
            <h1 className='lg:text-xl'>## The floor plan & elevation is subject to State Legislation and local by-laws applicable to the Construction and Real Estate Industry and may change accordingly <b>1 Ft = 305 Mtr. approx</b></h1>
        </div>

      </div>
    </div>
  )
}

export default Great
