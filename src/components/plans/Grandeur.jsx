import React from 'react'
import grandeurmain from '../../assets/grandeurmain.png'
import grandeur1 from '../../assets/grandeur1.png'
import grandeur2 from '../../assets/grandeur2.png'
import grandeur3 from '../../assets/grandeur3.png'
import grandeur4 from '../../assets/grandeur4.png'  
import grandeur5 from '../../assets/grandeur5.png'  

function Grandeur() {
  return (
    <div className='p-5'>
        <h1 className='text-xl md:text-3xl font-black'>Independent Bungalows</h1>
        <h1 className=' md:text-xl text-lg mt-3'>The <b>majestic, well-designed, spacious</b> and <b>comfortable</b>  independent bungalows decipher a princely lifestyle. The entire bungalow has been conceived to provide the standards of sophistication and style which are second nature to the connoisseurs of good living and nothing but the best can be expected from these architectural marvels. These bungalows are erected over a <b>plot area of 473.98 sq.m </b> (5100 Sq.ft.) with <b>unit area of 396.12 sq.m</b> (4262.3 Sq.ft.) and a provision to add a personal touch. The <b>vast lawns, terrace</b>  and open spaces exude a touch of class which is discreetly evident.</h1>
        <div className="text-center text-xl mt-5 mb-5">
            <a href="#option1" className='text-blue-300 underline'>Option1 : Part Designed Unit</a> <br />
            <a href="#option2" className='text-blue-300 underline'>Option2 : Fully Designed Unit</a>
        </div>
        <img src={grandeurmain} className='w-full h-[70vh] object-cover' alt="" />

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
                <td className="border-2 border-black p-2">5100.00</td>
                <td className="border-2 border-black p-2">473.98</td>
                <td className="border-2 border-black p-2">4262.31</td>
                <td className="border-2 border-black p-2">396.12</td>
                <td className="border-2 border-black p-2">2522.06</td>
                <td className="border-2 border-black p-2">234.39</td>
                </tr>
            </tbody>
        </table>

        <div className="md:hidden container mx-auto mt-5 p-5">
            <div className="bg-white shadow-md rounded-lg p-5 mb-5">
                <h3 className="text-lg font-semibold">S.No: a</h3>
                <p className="mt-2"><strong>Plot Area:</strong> 5100.00 sq.ft (473.98 sq.m)</p>
                <p className="mt-2"><strong>Unit Area:</strong> 4262.31 sq.ft (396.12 sq.m)</p>
                <p className="mt-2"><strong>Terrace Area:</strong> 2522.06 sq.ft (234.39 sq.m)</p>
            </div>
        </div>


        <h1 className='mt-5 md:text-2xl text-xl font-black'>Ground Floor Plan</h1>
        <img src={grandeur1} className='lg:w-[45vw] lg:h-full object-cover mx-auto mt-5' alt="" />
        <h1 className='text-center font-black lg:w-[60vw] lg:mx-auto'>The ground floor is same under both the options. FSI to vary between 1 to 1.5 (including future expansion), depending upon statewise legislations.</h1>

        <h1 className='mt-5 md:text-2xl text-xl font-black'>First Floor Plan</h1>
        <img src={grandeur2} className='lg:w-[40vw] lg:h-full object-cover mx-auto mt-5' alt="" />


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
                <td className="border-2 border-black p-2">5100.00</td>
                <td className="border-2 border-black p-2">473.98</td>
                <td className="border-2 border-black p-2">6381.18</td>
                <td className="border-2 border-black p-2">593.05</td>
                <td className="border-2 border-black p-2">2525.49</td>
                <td className="border-2 border-black p-2">234.71</td>
                </tr>
            </tbody>
        </table>

        <div className="md:hidden container mx-auto mt-5 p-5">
          <div className="bg-white shadow-md rounded-lg p-5 mb-5">
              <h3 className="text-lg font-semibold">S.No: a</h3>
              <p className="mt-2"><strong>Plot Area:</strong> 5100.00 sq.ft (473.98 sq.m)</p>
              <p className="mt-2"><strong>Unit Area:</strong> 6381.18 sq.ft (593.05 sq.m)</p>
              <p className="mt-2"><strong>Terrace Area:</strong> 2525.49 sq.ft (234.71 sq.m)</p>
          </div>
      </div>



        <img src={grandeur3} className='lg:w-[40vw] lg:h-full object-cover mx-auto mt-5' alt="" />
        <h1 className='text-center font-black lg:w-[60vw] lg:mx-auto'>The ground floor is same under both the options. FSI to vary between 1 to 1.5 (including future expansion), depending upon statewise legislations.</h1>
         <h1 className='mt-5 md:text-2xl text-xl font-black'>First Floor Plan</h1>
        <img src={grandeur4} className='lg:w-[40vw] lg:h-full object-cover mx-auto mt-5' alt="" />

        <h1 className='mt-5 md:text-2xl text-xl font-black'>Second Floor Plan</h1>
        <img src={grandeur5} className='lg:w-[40vw] lg:h-full object-cover mx-auto mt-5' alt="" />

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

export default Grandeur
