import React from 'react';

const Section = ({ title, items }) => (
  <div className="bg-slate-200 p-5 shadow-xl md:w-[25vw] text-center">
    <h1 className='text-xl md:text-3xl font-semibold'>{title}</h1>
    <ul style={{ listStyleType: 'disc' }} className='p-7 text-md lg:text-xl'>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

function Remodelling() {
  const essentialServices = [
    "Convenience stores",
    "Banking",
    "Postal services",
    "Beauty parlour",
  ];

  const connectivityServices = [
    <span><b>24-hour uninterrupted satellite</b> connectivity for television.</span>,
    "Pre-wired for cable and telephone",
    "Uninterrupted availability of movies provided on demand",
    "Internet kiosks",
    <span><b>Video-conferencing</b></span>,
  ];

  const serviceCenter = [
    "Taxi services",
    "Plumbing",
    "Masonry",
    "Electrical repair services",
  ];

  return (
    <div className='p-4 flex gap-3 justify-center items-center h-[89vh]'>
      <Section title="ESSENTIAL SERVICE" items={essentialServices} />
      <Section title="Seamless Connectivity" items={connectivityServices} />
      <Section title="SERVICE CENTER" items={serviceCenter} />
    </div>
  );
}

export default Remodelling;
