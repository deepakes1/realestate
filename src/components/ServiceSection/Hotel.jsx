import React from 'react';

const Hotel = () => {
  const features = [
    {
      title: "Centrally air-conditioned building",
      description: "with impressive modern elevation."
    },
    {
      title: "100% round-the-clock power supply",
      description: "complete back-up ensured. Impressive reception, lobby, and lounge."
    },
    {
      title: "A maid's room, linen store, pantry",
      description: "and a spacious guest elevator lobby on every floor."
    },
    {
      title: "Pillar-less banquet hall",
      description: "with a capacity of more than 800 people for cultural functions and gatherings."
    },
    {
      title: "Hyper Market (Super Market)",
      description: "ensuring availability of all items such as Grocery & Confectionary Items, Household Goods, Clothing & Footwear, Utensils, Furnishing Items."
    },
    {
      title: "Kids Play Zone",
      description: "with entertainment for kids."
    },
    {
      title: "Fully equipped Computer rooms",
      description: ""
    },
    {
      title: "Multi-cuisine food courts",
      description: "and specialty restaurants."
    },
    {
      title: "Professionally managed expansive parking",
      description: ""
    },
    {
      title: "100% round-the-clock power supply",
      description: "with complete back-up ensured."
    }
  ];

  return (
    <div className='p-5'>
      <div className="flex gap-2 items-center">
        <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Hotel</h1>
      </div>
      <div className="text-md lg:text-xl mt-2">
        <p>A grand & exclusive hotel having 100-300 rooms built on the latest architectural concepts consisting of premium features & facilities. It shall be an integral part of every Sahara City Homes Township. Located to ensure that non-residents using these facilities do not enter residential areas, thus ensuring complete privacy and solitude for the residents.</p>
      </div>
      <ul className='p-5 text-md lg:text-xl list-disc'>
        {features.map((feature, index) => (
          <li key={index} className='mt-3'>
            <span className='font-semibold'>{feature.title}</span> {feature.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hotel;
