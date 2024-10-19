import React from 'react';
import grandeurmain from '../../assets/grandeurmain.png';
import grandeur1 from '../../assets/grandeur1.png';
import grandeur2 from '../../assets/grandeur2.png';
import grandeur3 from '../../assets/grandeur3.png';
import grandeur4 from '../../assets/grandeur4.png';
import grandeur5 from '../../assets/grandeur5.png';
import { Link } from 'react-router-dom';

const Grandeur = () => {
  return (
    <div className='p-5'>
    <Link to="/Plans/Villas" className="flex justify-end mr-2 mb-2">
            <div className="flex gap-2 px-4 py-1 mt-4 bg-black text-white items-center rounded-2xl">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-bar-left"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"
                    />
                </svg>
                <h1 className="mr-1">Back</h1>
            </div>
        </Link>
      <h1 className='text-xl md:text-3xl font-black'>Independent Bungalows</h1>
      <h1 className='md:text-xl text-lg mt-3'>
        The <b>majestic, well-designed, spacious</b> and <b>comfortable</b> independent bungalows decipher a princely lifestyle. 
        These architectural marvels, erected over a <b>plot area of 473.98 sq.m</b> (5100 Sq.ft.) with <b>unit area of 396.12 sq.m</b> (4262.3 Sq.ft.), 
        provide a personal touch with <b>vast lawns, terrace</b>, and open spaces exuding a touch of class.
      </h1>

      <div className="text-center text-xl mt-5 mb-5">
        <a href="#option1" className='text-blue-300 underline'>Option 1: Part Designed Unit</a><br />
        <a href="#option2" className='text-blue-300 underline'>Option 2: Fully Designed Unit</a>
      </div>

      <img src={grandeurmain} className='w-full h-[70vh] object-cover' alt="Main Bungalow" />

      <h1 className='text-center md:text-2xl text-xl mt-3 font-black' id="option1">Option 1: Part Designed Unit</h1>
      <h1 className='md:text-xl text-center mt-3 text-lg'>
        Constructed by the Company, this includes the ground and first floor (part constructed) with provisions for future expansion.
      </h1>

      <Specifications
        plotArea="5100.00 sq.ft (473.98 sq.m)"
        unitArea="4262.31 sq.ft (396.12 sq.m)"
        terraceArea="2522.06 sq.ft (234.39 sq.m)"
      />

      <h1 className='mt-5 md:text-2xl text-xl font-black'>Ground Floor Plan</h1>
      <img src={grandeur1} className='lg:w-[45vw] lg:h-full object-cover mx-auto mt-5' alt="Ground Floor Plan" />
      <h1 className='text-center font-black lg:w-[60vw] lg:mx-auto'>
        The ground floor is the same under both options. FSI varies between 1 to 1.5, depending on state legislation.
      </h1>

      <h1 className='mt-5 md:text-2xl text-xl font-black'>First Floor Plan</h1>
      <img src={grandeur2} className='lg:w-[40vw] lg:h-full object-cover mx-auto mt-5' alt="First Floor Plan" />

      <h1 className='text-center md:text-2xl text-xl mt-3 font-black' id="option2">Option 2: Fully Designed Unit</h1>
      <h1 className='md:text-xl text-center mt-3 text-lg'>
        This option allows the buyer to construct part of the house. The offering includes a ground floor and first floor (part constructed).
      </h1>

      <Specifications
        plotArea="5100.00 sq.ft (473.98 sq.m)"
        unitArea="6381.18 sq.ft (593.05 sq.m)"
        terraceArea="2525.49 sq.ft (234.71 sq.m)"
      />

      <img src={grandeur3} className='lg:w-[40vw] lg:h-full object-cover mx-auto mt-5' alt="Ground Floor Plan" />
      <h1 className='text-center font-black lg:w-[60vw] lg:mx-auto'>
        The ground floor is the same under both options. FSI varies between 1 to 1.5, depending on state legislation.
      </h1>

      <h1 className='mt-5 md:text-2xl text-xl font-black'>First Floor Plan</h1>
      <img src={grandeur4} className='lg:w-[40vw] lg:h-full object-cover mx-auto mt-5' alt="First Floor Plan" />

      <h1 className='mt-5 md:text-2xl text-xl font-black'>Second Floor Plan</h1>
      <img src={grandeur5} className='lg:w-[40vw] lg:h-full object-cover mx-auto mt-5' alt="Second Floor Plan" />

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
      All areas are inclusive of common areas, including stairs, lift areas, walls, and corridors.
    </h1>
    <h1 className='lg:text-xl'>
      ## Units shown with furniture are for <b>indication of space only</b> and do not constitute the actual offering.
    </h1>
    <h1 className='lg:text-xl'>
      ## The floor plan and elevation are subject to state legislation and local by-laws applicable to construction.
      <b> 1 Ft = 0.305 Mtr approx</b>
    </h1>
  </div>
);

export default Grandeur;
