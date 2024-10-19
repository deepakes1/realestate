import React from 'react';
import { Link } from 'react-router-dom';
import layout from "../assets/layout.jpeg";

const PlanCard = ({ to, title, description }) => (
  <Link to={to}>
    <div className="mt-5 w-[300px] bg-slate-200 p-5 transition-transform duration-300 hover:scale-110 cursor-pointer hover:bg-slate-700 hover:text-white hover:rounded-3xl">
      <h1 className='text-xl font-semibold mb-3'>{title}</h1>
      <p className='text-lg'>{description}</p>
    </div>
  </Link>
);

function Plans() {
  return (
    <>
      <div className="mt-5">
        <img src={layout} className='h-[80vh] lg:h-[90vh] w-full object-cover' alt="Housing layout" />
      </div>

      <div className='p-5'>
        <h1 className='text-xl md:text-2xl'>
          The Plans section is a crucial part of your housing industry, where visitors can explore the different types of living spaces available. To effectively showcase the two types of plans.
        </h1>
        
        <ul className='list-disc w-[250px] mx-auto mt-2 md:mt-0 md:p-5 text-lg lg:text-xl'>
          <li>Flats</li>
          <li>Individual Villas</li>
        </ul>

        <div className="flex flex-wrap gap-7 justify-center">
          <PlanCard 
            to="/Flats" 
            title="Flats" 
            description="Our Flat plans are designed to provide a comfortable and convenient living experience. These spacious apartments are perfect for individuals, couples, and small families who value ease of maintenance."
          />
          <PlanCard 
            to="/Villas" 
            title="Individual Villas" 
            description="Our Individual plans are designed to provide a unique and personalized living experience. These standalone homes offer the ultimate in privacy, perfect for families, couples, or individuals who value independence and space."
          />
        </div>
      </div>
    </>
  );
}

export default Plans;
