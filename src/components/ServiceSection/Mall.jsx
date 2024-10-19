import React from 'react';

const Mall = () => {
  const description = `
    A unique Shopping Mall with an awesome combination of shopping and entertainment, 
    ultramodern ambience and unmatched conveniences is the highlight of every township. 
    This future city centre with multiplex shall set new standards and trends in retail 
    & entertainment and shall become the city hub for every resident of that city. 
    It has been located in such a manner that the non-residents who are using these 
    facilities do not enter the residential areas thus ensuring complete privacy and solitude to the residents.
  `;

  const features = [
    {
      text: "Majestic elevation exclusively designed massive atrium based on the latest concepts ensuring visibility to all shops and showrooms."
    },
    {
      text: "Centrally air-conditioned for an immaculate shopping experience."
    },
    {
      text: "Large playground for outdoor sports such as cricket, football etc."
    },
    {
      text: "Multiple openings & accessibility from all sides."
    },
    {
      text: "Hyper Market (Super Market) ensuring availability of all the items such as Grocery & Confectionary Items, Household Goods, Clothing & Footwear, Utensils, Furnishing Items."
    },
    {
      text: "Kids Play Zone with entertainment for kids."
    },
    {
      text: "Fully equipped Computer rooms."
    },
    {
      text: "Multi-cuisine food courts & speciality restaurants."
    },
    {
      text: "Professionally managed expansive parking."
    },
    {
      text: "100% round-the-clock power supply with complete back-up ensured."
    }
  ];

  return (
    <div className="background-mall">
      <div className="overlay"></div>
      <div className="content">
        <div className='p-5'>
          <div className="flex gap-2 items-center">
            <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Shopping Mall</h1>
          </div>
          <div className="text-md lg:text-xl mt-2">
            <p>{description}</p>
          </div>
          <ul className='p-5 text-md lg:text-xl list-disc'>
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

export default Mall;
