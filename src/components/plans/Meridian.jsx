import React from 'react';
import meridianmain from '../../assets/meridianmain.png';
import meridian1 from '../../assets/meridian1.png';
import meridian2 from '../../assets/meridian2.png';
import meridian3 from '../../assets/meridian3.png';
import meridian4 from '../../assets/meridian4.png';
import meridian5 from '../../assets/meridian5.png';

const Meridian = () => {
  return (
    <div className='p-5'>
      <h1 className='text-xl md:text-3xl font-black'>Independent Semi-Detached Houses</h1>
      <h1 className='md:text-xl text-lg mt-3'>
        These stately, dignified houses sprawl on a <b>plot area of 278.70 sq.m</b> (3001 Sq.ft.) with <b>unit area of 275.20 sq.m</b> (3176.57 Sq.ft.). 
        Specifically crafted for the affluent, they offer a taste of community living along with the <b>solitude of a bungalow</b>. 
        Spacious, comfortable, and full of life, they incorporate excellent specifications and are designed to accommodate future requirements, as they are expandable. 
        The <b>infusion of terrace</b>, open spaces, and lawns make them elegantly impressive.
      </h1>

      <div className="text-center text-xl mt-5 mb-5">
        <a href="#option1" className='text-blue-300 underline'>Option 1: Part Designed Unit</a><br />
        <a href="#option2" className='text-blue-300 underline'>Option 2: Fully Designed Unit</a>
      </div>

      <img src={meridianmain} className='w-full h-[70vh] object-cover' alt="Meridian Main House" />

      <h1 className='text-center md:text-2xl text-xl mt-3 font-black' id="option1">Option 1: Part Designed Unit</h1>
      <h1 className='md:text-xl text-center mt-3 text-lg'>
        This unit will be constructed by the Company, comprising the ground and first floor (part constructed), with provisions for future expansion on the first and second floors (to be done by the owner).
      </h1>

      <Specifications
        plotArea="3001.00 sq.ft (278.70 sq.m)"
        unitArea="3176.37 sq.ft (295.20 sq.m)"
        terraceArea="1762.42 sq.ft (163.79 sq.m)"
      />

      <h1 className='mt-5 md:text-2xl text-xl font-black'>Ground Floor Plan</h1>
      <img src={meridian1} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="Ground Floor Plan" />
      <h1 className='text-center font-black lg:w-[60vw] lg:mx-auto'>
        The ground floor is the same under both options. FSI varies between 1 to 1.5 (including future expansion), depending upon state legislation.
      </h1>

      <h1 className='mt-5 md:text-2xl text-xl font-black'>First Floor Plan</h1>
      <img src={meridian2} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="First Floor Plan" />

      <h1 className='text-center md:text-2xl text-xl mt-3 font-black' id="option2">Option 2: Fully Designed Unit</h1>
      <h1 className='md:text-xl text-center mt-3 text-lg'>
        This option allows the buyer to construct part of the house themselves. The actual offering will consist of a ground floor and first floor (part constructed), with the second floor proposed for future expansion.
      </h1>

      <Specifications
        plotArea="3001.00 sq.ft (278.90 sq.m)"
        unitArea="4467.92 sq.ft (415.23 sq.m)"
        terraceArea="1787.61 sq.ft (166.13 sq.m)"
      />

      <img src={meridian3} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="Ground Floor Plan" />
      <h1 className='text-center font-black lg:w-[60vw] lg:mx-auto'>
        The ground floor is the same under both options. FSI varies between 1 to 1.5 (including future expansion), depending upon state legislation.
      </h1>

      <h1 className='mt-5 md:text-2xl text-xl font-black'>First Floor Plan</h1>
      <img src={meridian4} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="First Floor Plan" />

      <h1 className='mt-5 md:text-2xl text-xl font-black'>Second Floor Plan</h1>
      <img src={meridian5} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt="Second Floor Plan" />

      <Note />
    </div>
  );
};

const Specifications = ({ plotArea, unitArea, terraceArea }) => (
  <div className="md:text-center lg:w-[40vw] container mx-auto mt-5 p-5">
    <div className="bg-white shadow-md rounded-lg p-5 mb-5">
      <h3 className="text-lg font-semibold">S.No: a</h3>
      <p className="mt-2"><strong>Plot Area:</strong> {plotArea}</p>
      <p className="mt-2"><strong>Unit Area:</strong> {unitArea}</p>
      <p className="mt-2"><strong>Terrace Area:</strong> {terraceArea}</p>
    </div>
  </div>
);

const Note = () => (
  <div className="bg-slate-400 p-5 mt-7">
    <h1 className='italic font-semibold text-xl lg:text-2xl'>Note:</h1>
    <h1 className='lg:text-xl'>
      All areas are inclusive of common areas of 2 sets of stairs, 3 lift areas, walls, common spaces & corridors.
    </h1>
    <h1 className='lg:text-xl'>
      ## Units shown with furniture are for <b>indication of space only</b> and do not constitute the actual offering.
    </h1>
    <h1 className='lg:text-xl'>
      ## The floor plan and elevation are subject to state legislation and local by-laws applicable to the construction industry and may change accordingly. 
      <b> 1 Ft = 0.305 Mtr approx</b>
    </h1>
  </div>
);

export default Meridian;
