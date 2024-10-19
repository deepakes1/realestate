import React from 'react';
import exoticmain from '../../assets/exoticmain.png';
import exotic1 from '../../assets/exotic1.png';
import exotic2 from '../../assets/exotic2.png';
import exotic3 from '../../assets/exotic3.png';
import exotic4 from '../../assets/exotic4.png';
import exotic5 from '../../assets/exotic5.png';
import { Link } from 'react-router-dom';

const UnitDetails = ({ title, plotArea, unitArea, terraceArea }) => (
  <div className="bg-white shadow-md rounded-lg p-5 mb-5">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2"><strong>Plot Area:</strong> {plotArea}</p>
    <p className="mt-2"><strong>Unit Area:</strong> {unitArea}</p>
    <p className="mt-2"><strong>Terrace Area:</strong> {terraceArea}</p>
  </div>
);

const ImageSection = ({ imgSrc, altText }) => (
  <img src={imgSrc} className='lg:w-[30vw] lg:h-full object-cover mx-auto mt-5' alt={altText} />
);

const Exotic = () => {
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
      <h1 className='text-xl md:text-3xl font-black'>Independent Row Houses</h1>
      <h1 className='md:text-xl text-lg mt-3'>
        The Independent row houses reflect the traditional ethos of living independently while promoting community living. These expandable houses are designed for modern families, providing a plot area of <b>171.37 sq.m</b> (1844 Sq.ft.) with a <b>unit area of 172.65 sq.m</b> (1857.71 Sq.ft.). Intelligent design and ultra-modern specifications enhance the beauty of the row houses, creating ample space for families, with seamless blends of facilities, terrace, lawn, and open spaces for residents.
      </h1>
      <div className="text-center text-xl mb-5">
        <a href="#option1" className='text-blue-300 underline'>Option 1: Part Designed Unit</a> <br />
        <a href="#option2" className='text-blue-300 underline'>Option 2: Fully Designed Unit</a>
      </div>
      <img src={exoticmain} className='w-full h-[70vh] object-cover' alt="Main Image" />

      <h1 className='text-center md:text-2xl text-xl mt-3 font-black' id="option1">Option 1: Part Designed Unit</h1>
      <h1 className='md:text-xl text-center mt-3 text-lg'>
        To be constructed by the Company, comprising ground & first floor (part constructed) with the provision for future expansion by the owner.
      </h1>

      <div className="md:text-center lg:w-[40vw] container mx-auto mt-5 p-5">
        <UnitDetails 
          title="S.No: a"
          plotArea="1844.00 sq.ft (171.37 sq.m)"
          unitArea="1857.71 sq.ft (172.65 sq.m)"
          terraceArea="567.12 sq.ft (52.71 sq.m)"
        />
      </div>

      <ImageSection imgSrc={exotic1} altText="Part Designed Unit" />
      <h1 className='text-center font-black lg:w-[60vw] lg:mx-auto'>The ground floor is the same under both options. FSI varies between 1 to 1.5 (including future expansion), depending on state-wise legislation.</h1>

      <h1 className='mt-5 md:text-2xl text-xl font-black'>First Floor Plan</h1>
      <ImageSection imgSrc={exotic2} altText="First Floor Plan" />

      <h1 className='text-center md:text-2xl text-xl mt-3 font-black' id="option2">Option 2: Fully Designed Unit</h1>
      <h1 className='md:text-xl text-center mt-3 text-lg'>
        This proposal allows the buyer to construct part of the house themselves, consisting of a ground floor & first floor (part constructed), with the second floor proposed for future expansion.
      </h1>

      <div className="md:text-center lg:w-[40vw] container mx-auto mt-5 p-5">
        <UnitDetails 
          title="S.No: b"
          plotArea="1844.00 sq.ft (171.37 sq.m)"
          unitArea="2643.82 sq.ft (245.71 sq.m)"
          terraceArea="508.37 sq.ft (47.25 sq.m)"
        />
      </div>

      <ImageSection imgSrc={exotic3} altText="Fully Designed Unit" />
      <h1 className='text-center font-black lg:w-[60vw] lg:mx-auto'>The ground floor is the same under both options. FSI varies between 1 to 1.5 (including future expansion), depending on state-wise legislation.</h1>

      <h1 className='mt-5 md:text-2xl text-xl font-black'>First Floor Plan</h1>
      <ImageSection imgSrc={exotic4} altText="First Floor Plan" />

      <h1 className='mt-5 md:text-2xl text-xl font-black'>Second Floor Plan</h1>
      <ImageSection imgSrc={exotic5} altText="Second Floor Plan" />

      {/* Note */}
      <div className="bg-slate-400 p-5 mt-7">
        <h1 className='italic font-semibold text-xl lg:text-2xl'>Note:</h1>
        <h1 className='lg:text-xl'>All areas are inclusive of common areas of 2 sets of stairs, 3 lift areas, walls, common spaces & corridors.</h1>
        <h1 className='lg:text-xl'>## Units shown with furniture are for an <b>indication of space only</b> and do not constitute the actual offering</h1> 
        <h1 className='lg:text-xl'>## The floor plan & elevation are subject to State Legislation and local by-laws applicable to the Construction and Real Estate Industry and may change accordingly <b>1 Ft = 305 Mtr. approx</b></h1>
      </div>
    </div>
  );
};

export default Exotic;
