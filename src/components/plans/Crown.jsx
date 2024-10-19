import React from 'react';
import crownmain from "../../assets/crownmain.png";
import crown1 from '../../assets/crown1.png';
import crown2 from '../../assets/crown2.png';
import crown3 from '../../assets/crown3.jpg';
import crown4 from "../../assets/crown4.png";
import crownsec1 from "../../assets/crownsec1.png";
import crownsec2png from "../../assets/crownsec2png.png";
import crownpent1 from "../../assets/crownpent1.png";
import crownpent2 from "../../assets/crownpent2png.png";
import { Link } from 'react-router-dom';

const unitPlans = [
  {
    title: "First Floor Plan (2 B/R + Terrace)",
    area: { sqFt: 885.01, sqM: 82.25 },
    terraceArea: { sqFt: 296.74, sqM: 27.58 },
    flatNumbers: "1, 5, 6"
  },
  {
    title: "First Floor Plan (2 B/R)",
    area: { sqFt: 927.01, sqM: 86.15 },
    terraceArea: { sqFt: "Not Applicable", sqM: "Not Applicable" },
    flatNumbers: "2, 3, 4"
  }
];

const penthousePlan = {
  title: "Penthouse Floor Plan (2B/R + Study + Terrace)",
  area: { sqFt: 1107.03, sqM: 102.88 },
  terraceArea: { sqFt: 288.81, sqM: 26.84 },
  flatNumbers: "1-4"
};

const Section = ({ title, subtitle, image }) => (
  <div className="border-b-2 border-slate-300">
    <h1 className='lg:text-2xl font-semibold text-xl text-center mt-5'>{title}</h1>
    <h1 className='lg:text-2xl font-semibold text-xl text-center mt-2'>{subtitle}</h1>
    <img src={image} className='lg:w-[50vw] object-cover mx-auto mt-5' alt={title} />
  </div>
);

const UnitPlan = ({ title, area, terraceArea, flatNumbers }) => (
  <div className="bg-white shadow-md rounded-lg p-5 mb-5">
    <h2 className="text-lg font-bold">{title}</h2>
    <p><strong>S.No.: </strong>{title.includes('Terrace') ? 1 : 2}</p>
    <p><strong>Unit Area:</strong></p>
    <ul className="list-disc pl-5">
      <li><strong>Square Feet:</strong> {area.sqFt} sq.ft</li>
      <li><strong>Square Meters:</strong> {area.sqM} sq.m</li>
    </ul>
    <p><strong>Terrace Area:</strong></p>
    <ul className="list-disc pl-5">
      <li><strong>Square Feet:</strong> {terraceArea.sqFt} sq.ft</li>
      <li><strong>Square Meters:</strong> {terraceArea.sqM} sq.m</li>
    </ul>
    <p><strong>Flat/Unit Numbers on Each Floor:</strong> {flatNumbers}</p>
  </div>
);

function Crown() {
  return (
    <div>
      <div>
       <Link to="/Plans/Flats" className="flex justify-end mr-2 mb-2">
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

        <h1 className="font-semibold text-center lg:text-3xl text-xl mb-4 mt-6">2. Crown</h1>
        <p className='text-xl text-center mb-4 font-semibold'>Type B (Stilt plus 9 Floors with 3 lifts) 2 Bedroom + Terrace, 2 Bedroom, Penthouse Units</p>
        <div className="text-center text-xl mb-5">
          <a href="#firstfloor" className='text-blue-300 underline'>First Floor Plan</a><br />
          <a href="#2-8floor" className='text-blue-300 underline'>2 - 8th Floor Plan</a><br />
          <a href="#penthouse" className='text-blue-300 underline'>Penthouse (9th Floor)</a>
        </div>
        <img src={crownmain} className='w-full h-[70vh] object-cover' alt="Crown Main" />

        <div className="md:text-center lg:w-[40vw] container mx-auto mt-5 p-5">
          {unitPlans.map(plan => (
            <UnitPlan 
              key={plan.title}
              title={plan.title}
              area={plan.area}
              terraceArea={plan.terraceArea}
              flatNumbers={plan.flatNumbers}
            />
          ))}
        </div>

        {/* Crown Plans */}
        <Section title="First Floor Block Plan." subtitle="Plan for Units 1, 5" image={crown1} />
        <Section title="First Floor Block Plan." subtitle="Plan for Units 2, 4" image={crown2} />
        <Section title="First Floor Block Plan." subtitle="Plan for Unit 3" image={crown3} />
        <Section title="First Floor Block Plan." subtitle="Plan for Unit 6" image={crown4} />

        <div className="md:text-center lg:w-[40vw] container mx-auto mt-5 p-5">
          <UnitPlan 
            title="Typical Floor Plan (2B/R) (2nd to 8th Floor)"
            area={{ sqFt: 927.01, sqM: 86.15 }}
            terraceArea={{ sqFt: "Not Applicable", sqM: "Not Applicable" }}
            flatNumbers="1-6"
          />
        </div>

        <Section title="Typical Block Plan." subtitle="Plan for Units 1, 2, 4, 5" image={crownsec1} />
        <Section title="First Floor Block Plan." subtitle="Plan for Units 3, 6" image={crownsec2png} />

        {/* Penthouse */}
        <h1 className="font-semibold text-center lg:text-3xl mb-4 mt-6">Penthouse</h1>
        <div className="md:text-center lg:w-[40vw] container mx-auto mt-5 p-5">
          <UnitPlan 
            title={penthousePlan.title}
            area={penthousePlan.area}
            terraceArea={penthousePlan.terraceArea}
            flatNumbers={penthousePlan.flatNumbers}
          />
        </div>

        <Section title="Penthouse Block Plan." subtitle="Plan for Units 1, 2" image={crownpent1} />
        <Section title="Penthouse Block Plan." subtitle="Plan for Units 3, 4" image={crownpent2} />

        {/* Note */}
        <div className="bg-slate-400 p-5 mt-7 mb-2">
          <h1 className='italic font-semibold text-xl lg:text-2xl'>Note:</h1>
          <h1 className='lg:text-xl'> All areas are inclusive of common areas of 2 sets of stairs, 3 lift areas, walls, common spaces & corridors. </h1>
          <h1 className='lg:text-xl'>## Units shown with furniture are for an <b>indication of space only</b> and do not constitute the actual offering</h1>
          <h1 className='lg:text-xl'>## The floor plan & elevation is subject to State Legislation and local by-laws applicable to the Construction and Real Estate Industry and may change accordingly <b>1 Ft = 305 Mtr. approx</b></h1>
        </div>
      </div>
    </div>
  );
}

export default Crown;
