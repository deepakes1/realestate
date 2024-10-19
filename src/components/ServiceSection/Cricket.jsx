import React from 'react';

const Cricket = () => {
  const features = [
    "Equipped with advanced floodlighting, the central ground transforms into a vibrant hub for activities day and night. Whether you're looking to engage in friendly competitions or simply enjoy some leisure time, the options are limitless.",
    "The carefully designed lighting enhances the beauty of the adjacent natural areas, creating a dreamlike atmosphere that captivates the senses. Picture yourself strolling through pathways illuminated by soft lights, surrounded by lush greenery that invites tranquility.",
    "At the heart of this oasis lies a stunning wave pool, where you can dive into the refreshing waters and experience nature's embrace. The gentle waves provide a serene escape, allowing you to unwind and rejuvenate.",
    "For sports enthusiasts, the centrally located tennis and volleyball courts are a must-visit. These illuminated courts are perfect for evening matches, offering a thrilling environment to challenge your skills while enjoying the company of friends and neighbors.",
    "Imagine the laughter and excitement echoing around you as you engage in friendly rivalry on the courts, surrounded by the beauty of the landscape. The combination of sport and nature creates an invigorating experience that elevates your enjoyment."
  ];

  return (
    <div className="md:h-[89vh]">
      <div className="background-cricket">
        <div className="overlay"></div>
        <div className="content p-5">
          <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Cricket Stadium</h1>
          <p className='mt-2 text-md lg:text-xl'>
            Welcome to our expansive central ground, a sanctuary designed to nurture every aspect of your well-being. Here, you'll find diverse avenues for personal growth, recreation, and relaxation, making it the perfect space to develop your mind, body, and soul.
          </p>
          <ul className='p-5 text-md lg:text-xl list-disc'>
            {features.map((feature, index) => (
              <li key={index} className='mt-3'>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cricket;
