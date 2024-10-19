import React from 'react';
import { Link } from 'react-router-dom';

const VillaButton = ({ to, label }) => (
  <Link to={to}>
    <div className="px-5 py-3 w-[180px] text-center font-black bg-slate-400 text-white text-xl transition-all hover:scale-105 hover:bg-slate-700 hover:rounded-br-3xl">
      {label}
    </div>
  </Link>
);

const Villas = () => {
  return (
    <div className='p-5'>
      <Link to="/Plans" className="flex justify-end mr-2 mb-2">
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
      <h1 className='text-xl md:text-2xl'>
        Experience the pinnacle of contemporary living with our stunning individual home designs, where sophistication meets practicality. Each residence is meticulously crafted to offer a perfect balance of comfort and style, creating an inviting sanctuary for those who desire a vibrant lifestyle within a close-knit community. Enjoy spacious layouts, premium finishes, and thoughtful amenities that elevate everyday living to new heights. Welcome home to a place where your dreams can flourish!
      </h1>
      
      <h1 className='md:w-[70vw] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl mt-10 text-xl bg-slate-200 p-5 text-center mx-auto'>
        Discover our exquisite collection of villas, featuring <b>Exotic, Grandeur,</b> and <b>Meridian plans</b> that epitomize the essence of luxurious living. Each villa is masterfully crafted to provide an unmatched living experience, where every element has been carefully curated to create a sanctuary of elegance, refinement, and sophistication.
      </h1>
      
      <div className="flex mt-8 justify-center gap-5 flex-wrap">
        <VillaButton to="/Plans/Villas/Exotic" label="Exotic" />
        <VillaButton to="/Plans/Villas/Meridian" label="Meridian" />
        <VillaButton to="/Plans/Villas/Grandeur" label="Grandeur" />
      </div>
    </div>
  );
};

export default Villas;
