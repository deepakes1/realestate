import React from 'react';

const Community = () => {
  const features = [
    {
      description: "Two well-equipped clubs and a community centre within the township having facilities for indoor and outdoor games, swimming pool, and a well-equipped fitness centre for aerobics, gymnasium, sauna, and jacuzzi."
    },
    {
      description: "These will be built in addition to the",
      highlight: "Hotel & Club building",
      additionalText: "located outside the main gate and will be exclusively used by the residents of the township."
    },
    {
      description: "Indoor sports facilities for recreation like",
      highlight: "table tennis, badminton, pool/snooker, squash"
    },
    {
      description: "Recreational facilities include",
      highlight: "TV room, card/chess/carom room"
    },
    { description: "Audio, Video & Media library." },
    {
      description: "Expandable multi-purpose stage and hall with a seating capacity of",
      highlight: "700 people."
    },
    {
      description: "Spacious kitchen and pantry."
    },
    {
      description: "Ample parking area."
    },
    {
      description: "Nature care centre with facilities for",
      highlight: "acupressure, reiki, ayurveda, meditation, and old age care."
    }
  ];

  return (
    <div className='p-5'>
      <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Community Center</h1>
      <p className='mt-2 text-md lg:text-xl'>
        {features[0].description}
      </p>
      
      <ul className='p-5 text-md lg:text-xl' style={{ listStyleType: 'disc' }}>
        {features.slice(1).map((feature, index) => (
          <li key={index} className='mt-3'>
            {feature.description}
            {feature.highlight && <span className='font-semibold'> {feature.highlight}</span>}
            {feature.additionalText && ` ${feature.additionalText}`}
          </li>
        ))}
      </ul>

      <h1 className='text-2xl lg:text-3xl font-semibold font-serif mt-5'>Yoga</h1>
      <p className='text-md lg:text-xl mt-2'>
        World renowned Yoga guru Mr. Bikram Chaudhary will set up yoga centres in all <b>217 townships</b> to offer the best advice and training on yoga for the first time in India. He has over 2000 institutions around the globe, acknowledged by NASA (National Aeronautics and Space Administration).
      </p>
    </div>
  );
}

export default Community;
