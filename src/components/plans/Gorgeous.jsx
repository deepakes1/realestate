import React from 'react'
import gorgeousmain from "../../assets/gorgeousmain.png"
import gorgeous1 from '../../assets/gorgeous1.png'
import gorgeous2 from "../../assets/gorgeous2.png"
import gorgeous3 from "../../assets/gorgeous3.png"
import gorgeous4 from "../../assets/gorgeous4.png"
import gorgeouspent1 from "../../assets/gorgeouspent1.png"
import gorgeouspent2 from "../../assets/gorgeouspent2.png"
import gorgeouspent3 from "../../assets/gorgeouspent3.png"
function Gorgeous() {
  return (
     <div>


      {/* gorgeous plan1 heading */}
        <div className="">
            <h1  className="font-semibold text-center lg:text-3xl text-xl mb-4 mt-6">3. Gorgeous</h1>
            <p className='text-xl text-center mb-4 font-semibold'>Type C (Stilt Plus 9 Floors with 3 lifts) 3 Bedroom, 2 Bedroom + Study, 2 Bedroom & Penthouse Units.</p>
            <div className="text-center text-xl mb-5">
                <a href="#firstfloor" className='text-blue-300 underline'>First Floor Plan</a> <br />
                <a href="#penthouse" className='text-blue-300 underline'>Penthouse (9th Floor)</a>
            </div>
            <img src={gorgeousmain} className='w-full h-[70vh] object-cover' alt="" />

            
           

            {/* table */}
            

            {/* tablesmall devices */}
            <div class="md:text-center lg:w-[40vw] container mx-auto mt-5 p-5">
                <div class="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h3 class="text-lg font-semibold">S.No: 1</h3>
                    <p class="mt-2"><strong>Flat/Unit Type:</strong> Typical Floor Plan (2 BR + Study), 1st to 8th Floor</p>
                    <p class="mt-2"><strong>Unit Area:</strong> 1240.37 sq.ft (110.11 sq.m)</p>
                    <p class="mt-2"><strong>Flat/Unit No:</strong> 1, 4</p>
                </div>

                <div class="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h3 class="text-lg font-semibold">S.No: 2</h3>
                    <p class="mt-2"><strong>Flat/Unit Type:</strong> Typical Floor Plan (2 BR), 1st to 8th Floor</p>
                    <p class="mt-2"><strong>Unit Area:</strong> 5.02 sq.ft (84.11 sq.m)</p>
                    <p class="mt-2"><strong>Flat/Unit No:</strong> 2</p>
                </div>

                <div class="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h3 class="text-lg font-semibold">S.No: 3</h3>
                    <p class="mt-2"><strong>Flat/Unit Type:</strong> Typical Floor Plan (2 BR + Study), 1st to 8th Floor</p>
                    <p class="mt-2"><strong>Unit Area:</strong> 1236.20 sq.ft (114.80 sq.m)</p>
                    <p class="mt-2"><strong>Flat/Unit No:</strong> 3</p>
                </div>

                <div class="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h3 class="text-lg font-semibold">S.No: 4</h3>
                    <p class="mt-2"><strong>Flat/Unit Type:</strong> Typical Floor Plan (3 BVR), 1st to 8th Floor</p>
                    <p class="mt-2"><strong>Unit Area:</strong> 114.80 sq.ft (135.95 sq.m)</p>
                    <p class="mt-2"><strong>Flat/Unit No:</strong> 5, 6</p>
                </div>
                </div>



            {/* gorgeous1 */}
            <div className="border-b-2  border-t-2 border-slate-300" id = "firstfloor">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Typical Floor Unit.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 1,4</h1>
                <img src={gorgeous1} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="" />
            </div>

            {/* gorgeous2 */}
            <div className="border-b-2 border-slate-300">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Typical Floor Unit.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 5,6</h1>
                <img src={gorgeous2} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="" />
            </div>

            {/* gorgeous3 */}
            <div className="border-b-2 border-slate-300">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>First Floor Block Plan.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Unit 2</h1>
                <img src={gorgeous3} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>

            {/* gorgeous4 */}
            <div className="border-b-2 border-slate-300">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>First Floor Block Plan.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Unit 3</h1>
                <img src={gorgeous4} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>



            

            <div class=" md:text-center lg:w-[40vw] container mx-auto mt-5 p-5">
                <h2 class="text-center text-xl font-bold mb-4">Flat/Unit Types and Areas</h2>

                <div class="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h3 class="font-semibold">Penthouse Floor Plan (3 B/R + Terrace) - 9th Floor</h3>
                    <p><strong>S.No:</strong> 1</p>
                    <p><strong>Unit Area:</strong> 1811.33 sq.ft (168.34 sq.m)</p>
                    <p><strong>Terrace Area:</strong> 894.30 sq.ft (83.11 sq.m)</p>
                    <p><strong>Flat/Unit No. (on each floor):</strong> 1, 4</p>
                </div>

                <div class="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h3 class="font-semibold">Penthouse Floor Plan (2 B/R)</h3>
                    <p><strong>S.No:</strong> 2</p>
                    <p><strong>Unit Area:</strong> 905.02 sq.ft (84.11 sq.m)</p>
                    <p><strong>Terrace Area:</strong> Not Applicable</p>
                    <p><strong>Flat/Unit No. (on each floor):</strong> 2</p>
                </div>

                <div class="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h3 class="font-semibold">Penthouse Floor Plan (2 B/R + Study)</h3>
                    <p><strong>S.No:</strong> 3</p>
                    <p><strong>Unit Area:</strong> 1236.20 sq.ft (114.89 sq.m)</p>
                    <p><strong>Terrace Area:</strong> Not Applicable</p>
                    <p><strong>Flat/Unit No. (on each floor):</strong> 3</p>
                </div>
            </div>




            {/* gorgeouspent 1 */}
            <div className="border-b-2  border-t-2 border-slate-300" id = "penthouse">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Penthouse Floor Unit.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Units 1,4</h1>
                <img src={gorgeouspent1} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>


            {/* gorgeouspent2 */}
            <div className="border-b-2 border-slate-300">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Penthouse Floor Unit.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Unit 2</h1>
                <img src={gorgeouspent2} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
            </div>


            {/* gorgeouspent3 */}
            <div className="border-b-2  border-t-2 border-slate-300">
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>Penthouse Block Plan.</h1>
                <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>Plan for Unit 3</h1>
                <img src={gorgeouspent3} className='lg:w-[50vw] object-cover mx-auto mt-5' alt="" />
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

export default Gorgeous
