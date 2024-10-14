import React from 'react'
import meridianmain from '../../assets/meridianmain.png'
import meridian1 from "../../assets/meridian1.png"
import meridian2 from "../../assets/meridian2.png"
import meridian3 from "../../assets/meridian3.png"
import meridian4 from "../../assets/meridian4.png" 
import meridian5 from "../../assets/meridian5.png" 
function Meridian() {
  return (
    <div className='p-5'>
        <h1 className='text-xl md:text-3xl font-black'>Independent Semi-Detached Houses</h1>
        <h1 className=' md:text-xl text-lg mt-3'>These stately dignified houses sprawl on a <b>plot area of 278.70 sq.m</b> (3001 Sq.ft.) with <b>unit area of 275.20 sq.m</b>  (3176.57 Sq.ft.), Specifically crafted for the affluent, these offer a taste of community living along with the <b>solitude of a bungalow</b>. Spacious, comfortable and full of life they incorporate excellent specifications and are designed to accommodate the future requirements as they are expandable, The <b>Infusion of terrace</b>, open spaces the lawn make them elegantly impressive.</h1>
        <div className="text-center text-xl mt-5 mb-5">
            <a href="#option1" className='text-blue-300 underline'>Option1 : Part Designed Unit</a> <br />
            <a href="#option2" className='text-blue-300 underline'>Option2 : Fully Designed Unit</a>
        </div>
        <img src={meridianmain} className='w-full h-[70vh] object-cover' alt="" />

        <h1 className='text-center md:text-2xl text-xl mt-3 font-black' id="option1">Option1 : Part Designed Unit</h1>
        <h1 className='md:text-xl text-center mt-3 text-lg '>To be actually constructed by the Company, comprising ground & flest floor (part constructed) with the provision of fitur expansion by construction of the remaining portion of first floor and second floor (to be done by the Owner). The second floor is only proposed for future expansion.</h1>

        <table className="hidden md:block shadow border-collapse text-center mt-5 p-5 md:w-[70vw] mx-auto">
            <thead>
                <tr>
                <th className="border-2 border-black p-2">S.No.</th>
                <th className="border-2 border-black p-2">PLOT AREA (sq.ft)</th>
                <th className="border-2 border-black p-2">PLOT AREA (sq.m)</th>
                <th className="border-2 border-black p-2">UNIT AREA (sq.ft)</th>
                <th className="border-2 border-black p-2">UNIT AREA (sq.m)</th>
                <th className="border-2 border-black p-2">TERRACE AREA (sq.ft)</th>
                <th className="border-2 border-black p-2">TERRACE AREA (sq.m)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="border-2 border-black p-2">a</td>
                <td className="border-2 border-black p-2">3001.00</td>
                <td className="border-2 border-black p-2">778.00</td>
                <td className="border-2 border-black p-2">3176.37</td>
                <td className="border-2 border-black p-2">295.20</td>
                <td className="border-2 border-black p-2">1762.42</td>
                <td className="border-2 border-black p-2">163.79</td>
                </tr>
            </tbody>
        </table>

        <div className="md:hidden container mx-auto mt-5 p-5">
          <div className="bg-white shadow-md rounded-lg p-5 mb-5">
              <h3 className="text-lg font-semibold">S.No: a</h3>
              <p className="mt-2"><strong>Plot Area:</strong> 3001.00 sq.ft (778.00 sq.m)</p>
              <p className="mt-2"><strong>Unit Area:</strong> 3176.37 sq.ft (295.20 sq.m)</p>
              <p className="mt-2"><strong>Terrace Area:</strong> 1762.42 sq.ft (163.79 sq.m)</p>
          </div>
       </div>

        <h1 className='mt-5 md:text-2xl text-xl font-black'>Ground Floor Plan</h1>
        <img src={meridian1} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="" />
        <h1 className='text-center font-black lg:w-[60vw] lg:mx-auto'>The ground floor is same under both the options. FSI to vary between 1 to 1.5 (including future expansion), depending upon statewise legislations.</h1>

        <h1 className='mt-5 md:text-2xl text-xl font-black'>First Floor Plan</h1>
        <img src={meridian2} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="" />


        <h1 className='text-center md:text-2xl text-xl mt-3 font-black' id = "option2">OPTION 2: Fully Designed Unit</h1>
        <h1 className='md:text-xl text-center mt-3 text-lg '>This is a proposal for the buyer to construct part of the house himself. The actual offering will consist of a ground floor & first floor (part constructed), whereas the second floor is only proposed for future expansion.</h1>

        <table className="hidden md:block shadow border-collapse text-center mt-5 p-5 md:w-[70vw] mx-auto">
            <thead>
                <tr>
                <th className="border-2 border-black p-2">S.No.</th>
                <th className="border-2 border-black p-2">PLOT AREA (sq.ft)</th>
                <th className="border-2 border-black p-2">PLOT AREA (sq.m)</th>
                <th className="border-2 border-black p-2">UNIT AREA (sq.ft)</th>
                <th className="border-2 border-black p-2">UNIT AREA (sq.m)</th>
                <th className="border-2 border-black p-2">TERRACE AREA (sq.ft)</th>
                <th className="border-2 border-black p-2">TERRACE AREA (sq.m)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="border-2 border-black p-2">a</td>
                <td className="border-2 border-black p-2">3001.00</td>
                <td className="border-2 border-black p-2">278.90</td>
                <td className="border-2 border-black p-2">4467.92</td>
                <td className="border-2 border-black p-2">415.23</td>
                <td className="border-2 border-black p-2">1787.61</td>
                <td className="border-2 border-black p-2">166.13</td>
                </tr>
            </tbody>
        </table>

        <div className="md:hidden container mx-auto mt-5 p-5">
          <div className="bg-white shadow-md rounded-lg p-5 mb-5">
              <h3 className="text-lg font-semibold">S.No: a</h3>
              <p className="mt-2"><strong>Plot Area:</strong> 3001.00 sq.ft (278.90 sq.m)</p>
              <p className="mt-2"><strong>Unit Area:</strong> 4467.92 sq.ft (415.23 sq.m)</p>
              <p className="mt-2"><strong>Terrace Area:</strong> 1787.61 sq.ft (166.13 sq.m)</p>
          </div>
        </div>


        <img src={meridian3} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="" />
        <h1 className='text-center font-black lg:w-[60vw] lg:mx-auto'>The ground floor is same under both the options. FSI to vary between 1 to 1.5 (including future expansion), depending upon statewise legislations.</h1>
         <h1 className='mt-5 md:text-2xl text-xl font-black'>First Floor Plan</h1>
        <img src={meridian4} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="" />

        <h1 className='mt-5 md:text-2xl text-xl font-black'>Second Floor Plan</h1>
        <img src={meridian5} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="" />

        {/* note */}
            <div className="bg-slate-400 p-5 mt-7">
            <h1 className='italic font-semibold text-xl lg:text-2xl'>Note:</h1>
            <h1 className='lg:text-xl'> All areas are inclusive of common areas of 2 sets of stairs, 3 lift areas, walls, common spaces & corridors. </h1>
            <h1 className='lg:text-xl'>## Units shown with furniture are for an <b>indication of space only</b> and do not constitute the actual offering</h1> 
            <h1 className='lg:text-xl'>## The floor plan & elevation is subject to State Legislation and local by-laws applicable to the Construction and Real Estate Industry and may change accordingly <b>1 Ft = 305 Mtr. approx</b></h1>
        </div>

    </div>
  )
}

export default Meridian
