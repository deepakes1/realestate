import React from 'react'
import zenithmain from '../../assets/zenithmain.png'
import zenith1 from '../../assets/zenith1.png'
import zenith2 from '../../assets/zenith2.png'
import zenith3 from '../../assets/zenith3.png'
import zenith4 from "../../assets/zenith4.png"
import zenithsec1 from "../../assets/zenithsec1.png"
import zenithsec2 from "../../assets/zenithsec2.png"
import zenithsec3 from "../../assets/zenithsec3.png"
import zenithsec4 from "../../assets/zenithsec4.png"
import zenithsec5 from "../../assets/zenithsec5.png"
import zenithsec6 from "../../assets/zenithsec6.png"    
import zenithsec7 from "../../assets/zenithsec7.png"
import zenithsec8 from "../../assets/zenithsec8.png"

function Zenith() {
  return (
    <div>
      <div className="">
            <h1  className="font-semibold text-center lg:text-3xl text-xl mb-4 mt-6">4. Zenith</h1>
            <p className='text-xl text-center mb-4 font-semibold'>Type D (Stilt Plus 6 Floors with 2 lifts) 4 Bedroom Duplex, 3 Bedroom Duplex Units.</p>
            <div className="text-center text-xl mb-5">
                <a href="#first&Secondfloor" className='text-blue-300 underline'>First & Second Floor Plan</a> <br />
                <a href="#third&Fourth" className='text-blue-300 underline'>Third & Fourth Floor Plan</a> <br />
                <a href="#fivth&sixth" className='text-blue-300 underline'>Fivth & Sixth Floor Plan</a> <br />
            </div>
            <img src={zenithmain} className='w-full h-[70vh] object-cover' alt="" />

            
           

            {/* table */}
            <table className="hidden md:block shadow border-collapse text-center mt-5 p-5 md:w-[70vw] mx-auto">
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
                <td className="border-2 border-black p-2">FIRST & SECOND FLOOR PLAN (4 B/R DUPLEX).</td>
                <td className="border-2 border-black p-2">2598.12</td>
                <td className="border-2 border-black p-2">241.46</td>
                <td className="border-2 border-black p-2">1504.08</td>
                <td className="border-2 border-black p-2">139.78</td>
                <td className="border-2 border-black p-2">1,2,4,5</td>
                </tr>
                
                
            </tbody>
            </table>

            {/* tablesmall devices */}
            <div class="md:hidden container mx-auto mt-5 p-5">
                <div class="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h3 class="text-lg font-semibold">S.No: 1</h3>
                    <p class="mt-2"><strong>Flat/Unit Type:</strong> FIRST & SECOND FLOOR PLAN (4 B/R DUPLEX)</p>
                    <p class="mt-2"><strong>Unit Area:</strong> 2598.12 sq.ft (241.46 sq.m)</p>
                    <p class="mt-2"><strong>Terrace Area:</strong> 1504.08 sq.ft (139.78 sq.m)</p>
                    <p class="mt-2"><strong>Flat/Unit No:</strong> 1, 2, 4, 5</p>
                </div>
            </div>




            {/* zenith1 */}
            <div className="border-b-2  border-t-2 border-slate-300" id = "first&Secondfloor">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>First Floor Portion.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 1,2,4,5</h1>
                <img src={zenith1} className='lg:w-[50vw] lg:h-full object-cover mx-auto mt-5' alt="" />
            </div>

            {/* zenith2 */}
            <div className="border-b-2 border-slate-300">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Second Floor Portion</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 1,2,4,5</h1>
                <img src={zenith2} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="" />
            </div>

            
            {/* table2  */}
            <table className="hidden md:block border-2 border-collapse text-center mt-5 p-5 md:w-[70vw] mx-auto">
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
                <td className="border-2 border-black p-2">FIRST & SECOND FLOOR PLAN (4 B/R DUPLEX)</td>
                <td className="border-2 border-black p-2">2296.91</td>
                <td className="border-2 border-black p-2">213.39</td>
                <td className="border-2 border-black p-2">674.13</td>
                <td className="border-2 border-black p-2">62.65</td>
                <td className="border-2 border-black p-2">3,6</td>
                </tr>
            </tbody>
            </table>

            <div class="md:hidden container mx-auto mt-5 p-5">
                <div class="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h3 class="text-lg font-semibold">S.No: 1</h3>
                    <p class="mt-2"><strong>Flat/Unit Type:</strong> FIRST & SECOND FLOOR PLAN (4 B/R DUPLEX)</p>
                    <p class="mt-2"><strong>Unit Area:</strong> 2296.91 sq.ft (213.39 sq.m)</p>
                    <p class="mt-2"><strong>Terrace Area:</strong> 674.13 sq.ft (62.65 sq.m)</p>
                    <p class="mt-2"><strong>Flat/Unit No:</strong> 3, 6</p>
                </div>
            </div>





            {/* Zenithsec1 */}
            <div className="border-b-2  border-t-2 border-slate-300" id = "penthouse">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>First Floor Portion.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 3,6</h1>
                <img src={zenith3} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>


            {/* zenith4 */}
            <div className="border-b-2 border-slate-300">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Second Floor Portion.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 3,6</h1>
                <img src={zenith4} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>


            <table className="hidden md:block border-2 border-collapse text-center mt-5 p-5 md:w-[70vw] mx-auto">
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
                <td className="border-2 border-black p-2">THIRD & FOURTH FLOOR PLAN (4 B/R DUPLEX)</td>
                <td className="border-2 border-black p-2">2332.91</td>
                <td className="border-2 border-black p-2">216.81</td>
                <td className="border-2 border-black p-2">408.75</td>
                <td className="border-2 border-black p-2">37.99</td>
                <td className="border-2 border-black p-2">1,2,4,5</td>
                </tr>
                <tr>
                <td className="border-2 border-black p-2">2</td>
                <td className="border-2 border-black p-2">THIRD & FOURTH FLOOR PLAN (4 B/R DUPLEX)</td>
                <td className="border-2 border-black p-2">2387.05</td>
                <td className="border-2 border-black p-2">221.84</td>
                <td className="border-2 border-black p-2">306.00</td>
                <td className="border-2 border-black p-2">28.44</td>
                <td className="border-2 border-black p-2">3,6</td>
                </tr>
            </tbody>
            </table>

            <div class="md:hidden container mx-auto mt-5 p-5">
                <div class="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h3 class="text-lg font-semibold">S.No: 1</h3>
                    <p class="mt-2"><strong>Flat/Unit Type:</strong> THIRD & FOURTH FLOOR PLAN (4 B/R DUPLEX)</p>
                    <p class="mt-2"><strong>Unit Area:</strong> 2332.91 sq.ft (216.81 sq.m)</p>
                    <p class="mt-2"><strong>Terrace Area:</strong> 408.75 sq.ft (37.99 sq.m)</p>
                    <p class="mt-2"><strong>Flat/Unit No:</strong> 1, 2, 4, 5</p>
                </div>

                <div class="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h3 class="text-lg font-semibold">S.No: 2</h3>
                    <p class="mt-2"><strong>Flat/Unit Type:</strong> THIRD & FOURTH FLOOR PLAN (4 B/R DUPLEX)</p>
                    <p class="mt-2"><strong>Unit Area:</strong> 2387.05 sq.ft (221.84 sq.m)</p>
                    <p class="mt-2"><strong>Terrace Area:</strong> 306.00 sq.ft (28.44 sq.m)</p>
                    <p class="mt-2"><strong>Flat/Unit No:</strong> 3, 6</p>
                </div>
            </div>

            <div className="border-b-2  border-t-2 border-slate-300" id ="third&Fourth">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Third Floor Portion.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 1,2,4,5</h1>
                <img src={zenithsec1} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>

            
            <div className="border-b-2  border-t-2 border-slate-300" >
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Fourth Floor Portion.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 1,2,4,5</h1>
                <img src={zenithsec2} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>

            <div className="border-b-2  border-t-2 border-slate-300" >
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Third Floor Portion.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 3,6</h1>
                <img src={zenithsec3} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>

            <div className="border-b-2  border-t-2 border-slate-300" >
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Fourth Floor Portion.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 3,6</h1>
                <img src={zenithsec4} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>


            <table className="hidden md:block shadow border-collapse text-center mt-5 p-5 md:w-[70vw] mx-auto">
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
                <td className="border-2 border-black p-2">FIFTH & SIXTH FLOOR PLAN (3 B/R DUPLEX)</td>
                <td className="border-2 border-black p-2">1963.89</td>
                <td className="border-2 border-black p-2">182.52</td>
                <td className="border-2 border-black p-2">197.50</td>
                <td className="border-2 border-black p-2">18.35</td>
                <td className="border-2 border-black p-2">1,2,4,5</td>
                </tr>
                <tr>
                <td className="border-2 border-black p-2">2</td>
                <td className="border-2 border-black p-2">FIFTH & SIXTH FLOOR PLAN (3 B/R DUPLEX)</td>
                <td className="border-2 border-black p-2">1976.43</td>
                <td className="border-2 border-black p-2">183.68</td>
                <td className="border-2 border-black p-2">191.21</td>
                <td className="border-2 border-black p-2">17.77</td>
                <td className="border-2 border-black p-2">3,6</td>
                </tr>
                
                
            </tbody>
            </table>
            
            <div class="md:hidden container mx-auto mt-5 p-5">
                <div class="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h3 class="text-lg font-semibold">S.No: 1</h3>
                    <p class="mt-2"><strong>Flat/Unit Type:</strong> FIFTH & SIXTH FLOOR PLAN (3 B/R DUPLEX)</p>
                    <p class="mt-2"><strong>Unit Area:</strong> 1963.89 sq.ft (182.52 sq.m)</p>
                    <p class="mt-2"><strong>Terrace Area:</strong> 197.50 sq.ft (18.35 sq.m)</p>
                    <p class="mt-2"><strong>Flat/Unit No:</strong> 1, 2, 4, 5</p>
                </div>

                <div class="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h3 class="text-lg font-semibold">S.No: 2</h3>
                    <p class="mt-2"><strong>Flat/Unit Type:</strong> FIFTH & SIXTH FLOOR PLAN (3 B/R DUPLEX)</p>
                    <p class="mt-2"><strong>Unit Area:</strong> 1976.43 sq.ft (183.68 sq.m)</p>
                    <p class="mt-2"><strong>Terrace Area:</strong> 191.21 sq.ft (17.77 sq.m)</p>
                    <p class="mt-2"><strong>Flat/Unit No:</strong> 3, 6</p>
                </div>
            </div>

            <div className="border-b-2  border-t-2 border-slate-300" id ="fivth&sixth" >
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Fivth Floor Portion.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 1,2,4,5</h1>
                <img src={zenithsec5} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>

            <div className="border-b-2  border-t-2 border-slate-300" >
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Sixth Floor Portion.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 1,2,4,5</h1>
                <img src={zenithsec6} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>

            <div className="border-b-2  border-t-2 border-slate-300" >
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Fivth Floor Portion.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 3,6</h1>
                <img src={zenithsec7} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>

            <div className="border-b-2  border-t-2 border-slate-300" >
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Sixth Floor Portion.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 3,6</h1>
                <img src={zenithsec8} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>


            {/* note */}
            <div className="bg-slate-400 p-5 mt-7">
            <h1 className='italic font-semibold text-xl lg:text-2xl'>Note:</h1>
            <h1 className='lg:text-xl'> All areas are inclusive of common areas of 2 sets of stairs, 3 lift areas, walls, common spaces & corridors. </h1>
            <h1 className='lg:text-xl'>## Units shown with furniture are for an <b>indication of space only</b> and do not constitute the actual offering</h1> 
            <h1 className='lg:text-xl'>## The floor plan & elevation is subject to State Legislation and local by-laws applicable to the Construction and Real Estate Industry and may change accordingly <b>1 Ft = 305 Mtr. approx</b></h1>
        </div>

        </div>
    </div>
  )
}

export default Zenith
