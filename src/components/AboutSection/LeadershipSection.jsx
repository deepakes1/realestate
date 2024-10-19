import React from 'react';

function LeadershipSection() {
  const leaders = [
    {
      name: 'John Doe',
      title: 'CEO',
      description: 'John has over 20 years of experience in the construction industry and is passionate about driving sustainable building practices.',
      imgSrc: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnxlbnwwfDB8MHx8fDA%3D'
    },
    {
      name: 'Daisy Doe',
      title: 'CEO',
      description: 'Daisy has over 20 years of experience in the construction industry and is passionate about driving sustainable building practices.',
      imgSrc: 'https://images.unsplash.com/photo-1695830042175-af833fd6d982?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBmYWNlfGVufDB8MHwwfHx8MA%3D%3D'
    },
    {
      name: 'Chahar Doe',
      title: 'CEO',
      description: 'Chahar has over 20 years of experience in the construction industry and is passionate about driving sustainable building practices.',
      imgSrc: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnxlbnwwfDB8MHx8fDA%3D'
    }
  ];

  return (
    <div>
      <div className="text-center mt-10 p-5 lg:h-[300px] lg:flex lg:flex-col lg:justify-center">
        <h1 className='font-semibold text-3xl lg:text-4xl mb-2'>Our Leadership</h1>
        <p className='lg:text-xl lg:w-[80%] lg:mt-4 mx-auto'>
          Our experienced leadership team is dedicated to driving innovation, fostering a collaborative culture, and ensuring the success of every project we undertake.
        </p>
      </div>

      <div className="mt-5 flex gap-4 flex-wrap justify-center p-10">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="text-center bg-slate-100 p-5 w-[350px] lg:flex-grow transition-all hover:bg-black hover:text-white hover:rounded-lg mx-auto"
          >
            <div className="flex justify-center">
              <img
                src={leader.imgSrc}
                className='object-cover h-[100px] w-[100px] rounded-full'
                alt={leader.name}
              />
            </div>
            <h1 className='mt-1 text-lg'>{leader.name}</h1>
            <p>{leader.title}</p>
            <p>{leader.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeadershipSection;
