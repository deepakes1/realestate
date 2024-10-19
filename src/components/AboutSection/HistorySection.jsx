import React from 'react';

function HistorySection() {
  return (
    <div className="bg-slate-200">
      <div className="text-center mt-10 p-5 lg:h-[400px] lg:flex lg:flex-col lg:justify-center">
        <h1 className="font-semibold text-3xl lg:text-4xl mb-2">Our History</h1>
        <p className="lg:text-xl lg:w-[80%] lg:mt-4 mx-auto">
          Sahara City Homes was launched in 2008 with a vision to provide standard community living with a range of facilities and amenities. Since its inception, we have been committed to delivering high-quality residential units, ranging from apartments to independent bungalows, in our 113.33-acre township in Coimbatore. Our dedication to innovation, customer satisfaction, and sustainability has earned us a reputation as a trusted real estate developer in the region.
        </p>
      </div>

      <div className="flex flex-col justify-center p-4 lg:p-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1661634283747-086f50bac2ec?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="object-cover h-[30vh] md:h-[50vh] lg:h-[70vh] w-full"
          alt="Our history"
        />
      </div>
    </div>
  );
}

export default HistorySection;
