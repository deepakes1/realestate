import React from 'react'
import exoticmain from '../../assets/exoticmain.png'
import exotic1 from '../../assets/exotic1.png'
import exotic2 from '../../assets/exotic2.png'
import exotic3 from '../../assets/exotic3.png'
import exotic4 from '../../assets/exotic4.png'  
import exotic5 from '../../assets/exotic5.png'

function Exotic() {
  return (
    <div className='p-5'>
        <h1 className='text-xl md:text-3xl font-black'>Independent Row Houses</h1>
        <h1 className=' md:text-xl text-lg mt-3'>The Independent row houses, reflecting the traditional ethos of living independently and yet being attached propagate community living amongst residents. These expandable houses aptly sult the modern family, where one can expect the best neighbourhood to live with on the plot <b>area of 171.37 sq.m </b> (1844 Sq.ft.) with <b>unit area of 172.65 sq.m </b>(1857.71 Sq.ft.). Intelligent designing & the ultra modern specifications enhance the beauty of row houses and create enough space for the family. We have blended seamlessly and logically the spaces with the facilities and crafted even the terrace, lawn & ample open spaces for our esteemed residents.</h1>
        <div className="text-center text-xl mb-5">
            <a href="#option1" className='text-blue-300 underline'>Option1 : Part Designed Unit</a> <br />
            <a href="#option2" className='text-blue-300 underline'>Option2 : Fully Designed Unit</a>
        </div>
        <img src={exoticmain} className='w-full h-[70vh] object-cover' alt="" />

        <h1 className='text-center md:text-2xl text-xl mt-3 font-black' id="option1">Option1 : Part Designed Unit</h1>
        <h1 className='md:text-xl text-center mt-3 text-lg '>To be actually constructed by the Company, comprising ground & first floor (part constructed) with the provision of future expansion by construction of the remaining portion of first floor and second floor (to be done by the Owner). The second floor is only proposed for future expansion.</h1>

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
                <td className="border-2 border-black p-2">1844.00</td>
                <td className="border-2 border-black p-2">171.37</td>
                <td className="border-2 border-black p-2">1857.71</td>
                <td className="border-2 border-black p-2">172.65</td>
                <td className="border-2 border-black p-2">567.12</td>
                <td className="border-2 border-black p-2">52.71</td>
                </tr>
            </tbody>
        </table>

        <div className="md:hidden container mx-auto mt-5 p-5">
            <div className="bg-white shadow-md rounded-lg p-5 mb-5">
                <h3 className="text-lg font-semibold">S.No: a</h3>
                <p className="mt-2"><strong>Plot Area:</strong> 1844.00 sq.ft (171.37 sq.m)</p>
                <p className="mt-2"><strong>Unit Area:</strong> 1857.71 sq.ft (172.65 sq.m)</p>
                <p className="mt-2"><strong>Terrace Area:</strong> 567.12 sq.ft (52.71 sq.m)</p>
            </div>
        </div>

        <img src={exotic1} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="" />
        <h1 className='text-center font-black lg:w-[60vw] lg:mx-auto'>The ground floor is same under both the options. FSI to vary between 1 to 1.5 (including future expansion), depending upon statewise legislations.</h1>

        <h1 className='mt-5 md:text-2xl text-xl font-black'>First Floor Plan</h1>
        <img src={exotic2} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="" />

        <h1 className='text-center md:text-2xl text-xl mt-3 font-black' id = "option2">OPTION 2: Fully Designed Unit</h1>
        <h1 className='md:text-xl text-center mt-3 text-lg '>This is a proposal for the buyer to construct part of the house himself. The actand offering will consist of a ground floor & first floor (part constructed). whereas the second floor is only proposed for future expansion.</h1>

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
                <td className="border-2 border-black p-2">1844.00</td>
                <td className="border-2 border-black p-2">171.37</td>
                <td className="border-2 border-black p-2">2643.82</td>
                <td className="border-2 border-black p-2">245.71</td>
                <td className="border-2 border-black p-2">508.37</td>
                <td className="border-2 border-black p-2">47.25</td>
                </tr>
            </tbody>
        </table>

        <div class="md:hidden container mx-auto mt-5 p-5">
            <div class="bg-white shadow-md rounded-lg p-5 mb-5">
                <h3 class="text-lg font-semibold">S.No: a</h3>
                <p class="mt-2"><strong>Plot Area:</strong> 1844.00 sq.ft (171.37 sq.m)</p>
                <p class="mt-2"><strong>Unit Area:</strong> 2643.82 sq.ft (245.71 sq.m)</p>
                <p class="mt-2"><strong>Terrace Area:</strong> 508.37 sq.ft (47.25 sq.m)</p>
            </div>
        </div>

        <img src={exotic3} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="" />
        <h1 className='text-center font-black lg:w-[60vw] lg:mx-auto'>The ground floor is same under both the options. FSI to vary between 1 to 1.5 (including future expansion), depending upon statewise legislations.</h1>
         <h1 className='mt-5 md:text-2xl text-xl font-black'>First Floor Plan</h1>
        <img src={exotic4} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="" />

        <h1 className='mt-5 md:text-2xl text-xl font-black'>Second Floor Plan</h1>
        <img src={exotic5} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="" />

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

export default Exotic
