import React from 'react'
import crownmain from "../../assets/crownmain.png"
import crown1 from '../../assets/crown1.png'
import crown2 from '../../assets/crown2.png'
import crown3 from '../../assets/crown3.jpg'
import crown4 from "../../assets/crown4.png"
import crownsec1 from "../../assets/crownsec1.png"
import crownsec2png from "../../assets/crownsec2png.png"
import crownpent1 from "../../assets/crownpent1.png"
import crownpent2 from "../../assets/crownpent2png.png"


function Crown() {
  return (
    <div>


      {/* crown plan1 heading */}
        <div className="">
            <h1  className="font-semibold text-center lg:text-3xl text-xl mb-4 mt-6">2. Crown</h1>
            <p className='text-xl text-center mb-4 font-semibold'>Type B (Stilt plus 9 Floors with 3 lifts) 2 Bedroom + Terrace, 2 Bedroom, Penthouse Units</p>
            <div className="text-center text-xl mb-5">
                <a href="#firstfloor" className='text-blue-300 underline'>First Floor Plan</a> <br />
                <a href="#2-8floor" className='text-blue-300 underline'>2 - 8th Floor Plan</a><br />
                <a href="#penthouse" className='text-blue-300 underline'>Penthouse (9th Floor)</a>
            </div>
            <img src={crownmain} className='w-full h-[70vh] object-cover' alt="" />

            
           

            {/* table */}
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

            {/* tablesmall devices */}
            <div className="md:hidden container mx-auto mt-5 p-5">
                <div className="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h2 className="text-lg font-bold">First Floor Plan (2 B/R + Terrace)</h2>
                    <p><strong>S.No.: </strong>1</p>
                    <p><strong>Unit Area:</strong></p>
                    <ul className="list-disc pl-5">
                        <li><strong>Square Feet:</strong> 885.01 sq.ft</li>
                        <li><strong>Square Meters:</strong> 82.25 sq.m</li>
                    </ul>
                    <p><strong>Terrace Area:</strong></p>
                    <ul className="list-disc pl-5">
                        <li><strong>Square Feet:</strong> 296.74 sq.ft</li>
                        <li><strong>Square Meters:</strong> 27.58 sq.m</li>
                    </ul>
                    <p><strong>Flat/Unit Numbers on Each Floor:</strong> 1, 5, 6</p>
                </div>

    <div className="bg-white shadow-md rounded-lg p-5">
        <h2 className="text-lg font-bold">First Floor Plan (2 B/R)</h2>
        <p><strong>S.No.: </strong>2</p>
        <p><strong>Unit Area:</strong></p>
        <ul className="list-disc pl-5">
            <li><strong>Square Feet:</strong> 927.01 sq.ft</li>
            <li><strong>Square Meters:</strong> 86.15 sq.m</li>
        </ul>
        <p><strong>Terrace Area:</strong></p>
        <ul className="list-disc pl-5">
            <li><strong>Square Feet:</strong> Not Applicable</li>
            <li><strong>Square Meters:</strong> Not Applicable</li>
        </ul>
        <p><strong>Flat/Unit Numbers on Each Floor:</strong> 2, 3, 4</p>
    </div>
            </div>


            {/* crown1 */}
            <div className="border-b-2  border-t-2 border-slate-300" id = "firstfloor">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>First Floor Block Plan.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 1,5</h1>
                <img src={crown1} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>

            {/* crown2 */}
            <div className="border-b-2 border-slate-300">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>First Floor Block Plan.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 2,4</h1>
                <img src={crown2} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>

            {/* crown3 */}
            <div className="border-b-2 border-slate-300">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>First Floor Block Plan.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Unit 3</h1>
                <img src={crown3} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>

            {/* crown4 */}
            <div className="border-b-2 border-slate-300">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>First Floor Block Plan.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Unit 6</h1>
                <img src={crown4} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>



            {/* table2  */}
            <table className="hidden md:block border-2 border-collapse text-center mt-5 p-5 md:w-[70vw] mx-auto">
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
                <td className="border-2 border-black p-2">TYPICAL FLOOR PLAN (2B/R) (2nd to 8th Flr)</td>
                <td className="border-2 border-black p-2">927.01</td>
                <td className="border-2 border-black p-2">86.15</td>
                <td className="border-2 border-black p-2">1-6</td>
                </tr>
            </tbody>
            </table>

            <div className="md:hidden container mx-auto mt-5 p-5">
                <div className="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h2 className="text-lg font-bold">Typical Floor Plan (2B/R) (2nd to 8th Floor)</h2>
                    <p><strong>S.No.: </strong>1</p>
                    <p><strong>Unit Area:</strong></p>
                    <ul className="list-disc pl-5">
                        <li><strong>Square Feet:</strong> 927.01 sq.ft</li>
                        <li><strong>Square Meters:</strong> 86.15 sq.m</li>
                    </ul>
                    <p><strong>Flat/Unit Numbers on Each Floor:</strong> 1-6</p>
                </div>
            </div>



            {/* crownsec 1 */}
            <div className="border-b-2  border-t-2 border-slate-300" id = "2-8floor">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Typical Block Plan.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 1,2,4,5</h1>
                <img src={crownsec1} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>


            {/* crownsec2 */}
            <div className="border-b-2 border-slate-300">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>First Floor Block Plan.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 3,6</h1>
                <img src={crownsec2png} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>


            {/* penthouse1 */}
            <h1 className="font-semibold text-center lg:text-3xl mb-4 mt-6">Penthouse</h1>
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
                <td className="border-2 border-black p-2">PENTHOUSE FLOOR PLAN (2B/R+STUDY + TERRACE)</td>
                <td className="border-2 border-black p-2">1107.03</td>
                <td className="border-2 border-black p-2">102.88</td>
                <td className="border-2 border-black p-2">288.81</td>
                <td className="border-2 border-black p-2">26.84</td>
                <td className="border-2 border-black p-2">1-4</td>
                </tr>
                
            </tbody>
            </table>

            <div className="md:hidden container mx-auto mt-5 p-5">
                <div className="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h2 className="text-lg font-bold">Penthouse Floor Plan (2B/R + Study + Terrace)</h2>
                    <p><strong>S.No.: </strong>1</p>
                    <p><strong>Unit Area:</strong></p>
                    <ul className="list-disc pl-5">
                        <li><strong>Square Feet:</strong> 1107.03 sq.ft</li>
                        <li><strong>Square Meters:</strong> 102.88 sq.m</li>
                    </ul>
                    <p><strong>Terrace Area:</strong></p>
                    <ul className="list-disc pl-5">
                        <li><strong>Square Feet:</strong> 288.81 sq.ft</li>
                        <li><strong>Square Meters:</strong> 26.84 sq.m</li>
                    </ul>
                    <p><strong>Flat/Unit Numbers on Each Floor:</strong> 1-4</p>
                </div>
            </div>


            {/* pent1 */}
            <div className="border-b-2  border-t-2 border-slate-300" id = "penthouse">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Penthouse Block Plan.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 1,2</h1>
                <img src={crownpent1} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>

            {/* pent2 */}
            <div className="border-b-2  border-t-2 border-slate-300">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Penthouse Block Plan.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 3,4</h1>
                <img src={crownpent2} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>

            {/* note */}
            <div className="bg-slate-400 p-5 mt-7 mb-2">
            <h1 className='italic font-semibold text-xl lg:text-2xl'>Note:</h1>
            <h1 className='lg:text-xl'> All areas are inclusive of common areas of 2 sets of stairs, 3 lift areas, walls, common spaces & corridors. </h1>
            <h1 className='lg:text-xl'>## Units shown with furniture are for an <b>indication of space only</b> and do not constitute the actual offering</h1> 
            <h1 className='lg:text-xl'>## The floor plan & elevation is subject to State Legislation and local by-laws applicable to the Construction and Real Estate Industry and may change accordingly <b>1 Ft = 305 Mtr. approx</b></h1>
        </div>

        </div>
    </div>
  )
}

export default Crown
