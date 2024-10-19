import React from 'react';

function TopSection() {
  return (
    <div className="md:flex gap-5">
      <div className="md:flex flex-col justify-center p-6">
        <h1 className="font-semibold text-3xl lg:text-4xl mb-2">Sahara Housing</h1>
        <p className="lg:text-xl">
          Sahara real estate business launches its flagship brand of township - Sahara City Homes in Coimbatore. Our mission is to transform communities by constructing sustainable, functional, and visually stunning structures that exceed our clients' expectations.
        </p>
      </div>

      <div className="mt-4 flex flex-col justify-center p-4">
        <img
          src="https://plus.unsplash.com/premium_photo-1664474559614-74d16c1c6f6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="object-cover h-[30vh] md:h-[90%] w-full md:w-[90%]"
          alt="Sahara Housing"
        />
      </div>
    </div>
  );
}

export default TopSection;
