import React from 'react';

const Multiplex = () => {
  const features = [
    {
      text: "3-screen multiplex with a combined seating capacity of more than 1,000 people."
    },
    {
      text: "Tastefully decorated interiors & luxurious seats."
    },
    {
      text: "Large playground for outdoor sports such as cricket, football etc."
    },
    {
      text: "Fast food centre."
    },
    {
      text: "100% round-the-clock power supply with complete back-up ensured."
    },
    {
      text: "Ample parking slots."
    }
  ];

  return (
    <div className="background-multiplex">
      <div className="overlay"></div>
      <div className="content">
        <div className='flex flex-col items-center justify-center h-[80vh]'>
          <h1 className='text-3xl font-semibold italic'>Multiplex</h1>
          <ul className='p-10 md:p-5 text-md lg:text-xl list-disc'>
            {features.map((feature, index) => (
              <li key={index} className='mt-3'>
                <span className='font-semibold'>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Multiplex;
