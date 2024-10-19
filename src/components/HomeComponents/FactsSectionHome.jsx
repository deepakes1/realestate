import React from 'react';

function FactsSectionHome() {
  const facts = [
    { label: 'Fresh Employment Generation', value: '65,100 Workers' },
    { label: 'Stamp Duty', value: 'Rs. 16,651.46 Crore' },
    { label: 'Sales Tax', value: 'Rs. 3,765.00 Crore' },
    { label: 'Labour Wages Paid', value: 'Rs. 11,727.57 Crore' },
  ];

  return (
    <div className="md:flex relative border-t-2 gap-5">
      <div className="md:w-[100vw] flex flex-col justify-center items-center p-6">
        <h1 className="font-semibold text-3xl lg:text-4xl text-center mb-4">Facts about the Company</h1>
        {facts.map(({ label, value }) => (
          <div className="flex gap-5 items-center mb-1" key={label}>
            <p className="lg:text-xl w-1/2 text-left">{label}</p>
            <p className="lg:text-xl w-1/2 font-semibold">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col justify-center p-4">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="object-cover h-[30vh] md:h-[50vh] w-[100vw]"
          alt="Company overview"
        />
      </div>
    </div>
  );
}

export default FactsSectionHome;
