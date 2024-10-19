import React from 'react';
import greatmain from "../../assets/greatmain.png";
import great from '../../assets/great.png';
import great2 from '../../assets/great2.png';

const unitData = [
  {
    id: 1,
    type: "TYPICAL FLOOR PLAN",
    area: "705.69 sq.ft (65.58 sq.m)",
    flatNo: "1 - 8"
  }
];

function Great() {
  return (
    <div>
      <img src={greatmain} className='w-full h-[70vh] object-cover' alt="Great Main" />
      <div className="p-5">
        <h1 className='text-xl lg:text-2xl font-semibold'>High Rise Apartments</h1>
        <p className='mt-3 text-lg lg:text-xl font-semibold'>
          Meticulously placed at the <b>beginning of the township</b>, these apartments stand tall to sing the glory of ideal living in Sahara City Homes. 
          These <b>9 storied apartments experience</b> a clear view of the surroundings and symbolize community living. 
          The residents can feel the exquisite environment, free from air & noise pollution. 
          The fresh breeze and beaming sunrays through the windows make life naturally beautiful. 
          The residents can forget the hassles of water problems generally faced in high rise apartments. 
          Here at their disposal, is <b>uninterrupted drinking water supply</b> facilitated through boosters. 
          High-speed, efficient lifts backed by DG sets ensure non-stop movement. 
          Furthermore, the essence of every Sahara City Homes township i.e. <b>Security is well</b> taken care of. 
          Very stringent and foolproof security is ensured through single entry/exit for the whole block. 
          In short, life would be bliss in high rise apartments.
        </p>

        <h1 className='text-xl text-center mt-4 font-semibold'>Type A (Stilt Plus 9 Floors with 2 lifts) 1 Bedroom Units.</h1>
        <div className="container mx-auto md:text-center lg:w-[40vw] mt-5 p-5">
          {unitData.map(unit => (
            <div key={unit.id} className="bg-white shadow-md rounded-lg p-5 mb-5">
              <h3 className="text-lg font-semibold">S.No: {unit.id}</h3>
              <p className="mt-2"><strong>Flat/Unit Type:</strong> {unit.type}</p>
              <p className="mt-2"><strong>Unit Area:</strong> {unit.area}</p>
              <p className="mt-2"><strong>Flat/Unit No. (On Each Floor):</strong> {unit.flatNo}</p>
            </div>
          ))}
        </div>

        <Section title="Typical Block Plan* (1st to 9th Floor)" subtitle="Plan for Units 1, 2, 5, 6" image={great} />
        <Section title="Typical Floor Unit" subtitle="Plan for Units 3, 4, 7, 8" image={great2} />

        <div className="bg-slate-400 p-5 mt-7 mb-2">
          <h1 className='italic font-semibold text-xl lg:text-2xl'>Note:</h1>
          <p className='lg:text-xl'>
            All areas are inclusive of common areas of 2 sets of stairs, 2 lift areas, walls, common spaces & corridors.
          </p>
          <p className='lg:text-xl'>
            ## Units shown with furniture are for an <b>indication of space only</b> and do not constitute the actual offering.
          </p>
          <p className='lg:text-xl'>
            ## The floor plan & elevation is subject to State Legislation and local by-laws applicable to the Construction and Real Estate Industry and may change accordingly. <b>1 Ft = 305 Mtr. approx</b>
          </p>
        </div>
      </div>
    </div>
  );
}

const Section = ({ title, subtitle, image }) => (
  <div>
    <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>{title}</h1>
    <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>{subtitle}</h1>
    <img src={image} className='lg:w-[50vw] object-cover mx-auto mt-5' alt={title} />
  </div>
);

export default Great;
