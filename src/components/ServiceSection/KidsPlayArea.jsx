import React from 'react';
import bowling from '../../assets/bowling.gif';

const KidsPlayArea = () => {
  const description = `
    Welcome to our exclusive children's play area, a vibrant space thoughtfully designed 
    to inspire fun, frolic, and entertainment. This dynamic environment features modern 
    play equipment that promotes both mental and physical development, ensuring a holistic 
    approach to childhood growth.
  `;

  const features = [
    {
      text: "Each element has been carefully selected to engage children's imaginations, encouraging creativity and exploration. From climbing structures that build strength and coordination to interactive games that stimulate cognitive skills, every aspect is crafted to provide a rich and rewarding experience."
    },
    {
      text: "Parents can rest assured knowing that safety is our top priority; the area is equipped with soft flooring and secure equipment, allowing children to play freely and confidently. This dedicated space not only fosters physical fitness but also nurtures social skills as kids interact, collaborate, and form lasting friendships."
    },
    {
      text: "Here, laughter and joy abound as children immerse themselves in a world of adventure. Let your little ones unleash their energy and creativity in a safe, engaging environment designed specifically for their growth and happiness."
    }
  ];

  return (
    <div className='p-5'>
      <div className="flex gap-2 items-center">
        <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Kids Play Area</h1>
        <img src={bowling} className='w-10 h-10 object-cover' alt="bowling" />
      </div>
      <div className="text-md lg:text-xl mt-2">
        <p>{description}</p>
      </div>        
      <ul className='p-5 text-md lg:text-xl list-disc'>
        {features.map((feature, index) => (
          <li key={index} className='mt-3'>
            <span className='font-bold'>{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KidsPlayArea;
