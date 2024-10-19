import React from 'react';

const Club = () => {
  const features = [
    {
      title: "Indoor Sports Centre",
      description: "Recreation facilities including table tennis, badminton, pool/snooker, and squash."
    },
    {
      title: "Large Swimming Pool",
      description: "Exclusive for guests and club members."
    },
    {
      title: "Fitness Centre",
      description: "Equipped with aerobics, gymnasium, sauna, jacuzzi, etc."
    },
    {
      title: "Business Centre",
      description: "Facilities for efficient conducting of business."
    },
    {
      title: "24-Hour Coffee Shop",
      description: ""
    },
    {
      title: "Stores, Services & Utility Areas",
      description: "Located in the basement."
    },
    {
      title: "Multi-Dimensional Recreational Facilities",
      description: "Includes ballroom, restaurants, TV room, chess, carom, card room, well-maintained lawn, beauty parlour, and library with an extensive collection of books."
    },
    {
      title: "Expansive Party Lawn",
      description: "Approximately 2602.23 sq. m (28,000 sq. ft.) for hosting parties and functions."
    },
    {
      title: "Parking Area",
      description: "Accommodates approximately 150 cars."
    }
  ];

  return (
    <div className='p-5'>
      <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Club</h1>
      <p className='mt-2 text-md lg:text-xl'>
        Special club in tune with the sophisticated taste of socialites & high-profile personalities.
      </p>
      <ul className='p-5 text-md lg:text-xl' style={{ listStyleType: 'disc' }}>
        {features.map((feature, index) => (
          <li key={index} className='mt-3'>
            <span className='font-semibold'>{feature.title}</span>
            {feature.description && `: ${feature.description}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Club;
