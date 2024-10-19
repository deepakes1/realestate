import React from 'react';

function TopHomeSection() {
  return (
    <div className="mt-4 p-7 bg-slate-100 text-center flex flex-col items-center justify-center h-[50vh]">
      <h1 className="text-3xl font-semibold w-[60vw] italic">
        "Not only dream houses but also for the first time in India a dream lifestyle for everybody"
      </h1>
      <div className="flex mt-5 w-full flex-col items-center md:items-end lg:items-center">
        <p className="text-xl font-semibold">"Saharsri" Subrata Roy Sahara</p>
        <p className="text-md font-light">Managing worker & chairman</p>
      </div>
    </div>
  );
}

export default TopHomeSection;
