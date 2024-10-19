import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ to, bgClass, title, features }) => (
  <Link to={to}>
    <div className="w-full md:w-[400px] p-5 shadow-lg border-2">
      <div className={`${bgClass} flex justify-center items-center transition-all hover:scale-105`}>
        <h1 className='text-white text-lg text-center md:text-2xl p-2 inline-block font-black brightness-300'>{title}</h1>
      </div>
      <ul style={{ listStyleType: 'disc' }} className='text-blue-800 mt-2 ml-5'>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  </Link>
);

function Amenities() {
  const services = [
    {
      to: "/Club",
      bgClass: "bg-clubs",
      title: "Clubs",
      features: [
        "Wide range of recreational facilities",
        "Sports courts available",
        "Large swimming pool",
        "Fitness centre",
        "24-hour coffee shop"
      ]
    },
    {
      to: "/Hotel",
      bgClass: "bg-hotel",
      title: "Hotels",
      features: [
        "100-300 rooms with modern architecture",
        "Premium facilities in each room",
        "Air-conditioned lobby",
        "Pillar-less banquet hall for over 800 guests",
        "Diverse dining options"
      ]
    },
    {
      to: "/Community",
      bgClass: "bg-community",
      title: "Community Center",
      features: [
        "Family-friendly environment",
        "Hall for 700 guests",
        "TV room",
        "Care centre for wellness services",
        "Sports facilities"
      ]
    },
    {
      to: "/Hospital",
      bgClass: "bg-hospital",
      title: "Hospital",
      features: [
        "25-bed capacity",
        "Modern healthcare facilities",
        "Outpatient & services available",
        "Operation theatre on-site",
        "24/7 power supply"
      ]
    },
    {
      to: "/Mall",
      bgClass: "bg-shopping",
      title: "Shopping Mall",
      features: [
        "Unique blend of retail and entertainment",
        "Modern shopping space ensuring privacy",
        "Hypermarket for convenient shopping",
        "Kids' play zone for family fun",
        "Ample parking available"
      ]
    },
    {
      to: "/Multiplex",
      bgClass: "bg-thetre",
      title: "Multiplex Theatre",
      features: [
        "3-screen multiplex with luxurious seating",
        "Capacity for over 1,000 viewers",
        "Stylish interiors for an enhanced viewing experience",
        "Focus on providing great experience"
      ]
    },
    {
      to: "/Education",
      bgClass: "bg-school",
      title: "Education",
      features: [
        "Capacity to nurture 1,600 students",
        "Spacious classrooms for effective learning",
        "Multipurpose assembly hall for events and gatherings",
        "Well-equipped library for research and study"
      ]
    },
    {
      to: "/Power",
      bgClass: "bg-power",
      title: "Uninterrupted Power Supply",
      features: [
        "Reliable UPS systems for uninterrupted power",
        "Seamless backup during outages",
        "Multipurpose assembly hall for events",
        "Well-equipped library for research and study"
      ]
    },
    {
      to: "/Water",
      bgClass: "bg-water",
      title: "Water Supply",
      features: [
        "Clean drinking water from a Reverse Osmosis plant",
        "Eco-friendly waste disposal systems",
        "Improved living conditions for residents",
        "Piped cooking gas for convenience",
        "Safe water delivered directly to homes"
      ]
    },
    {
      to: "/Security",
      bgClass: "bg-security",
      title: "Security",
      features: [
        "Secure environment with centralized control station",
        "24-hour armed security presence",
        "Fire-fighting facilities on-site",
        "Comprehensive CCTV surveillance",
        "Quick response teams for emergencies"
      ]
    },
    {
      to: "/Cricket",
      bgClass: "bg-cricket",
      title: "Cricket",
      features: [
        "Spacious central ground",
        "Floodlit areas for day and night use",
        "Opportunities for mind, body, and soul development",
        "Well-maintained pitch",
        "Adequate parking for players"
      ]
    },
    {
      to: "/KidsPlayArea",
      bgClass: "bg-KidsPlayArea",
      title: "Kids Play Area",
      features: [
        "Exclusive play area tailored for children",
        "Designed for fun, frolic, and entertainment",
        "Modern play equipment for engaging activities",
        "Soft flooring for safety during play",
        "Varied play structures"
      ]
    }
  ];

  return (
    <div className="p-5">
      <div className="mt-5">
        <h1 className='text-2xl md:text-3xl mt-7 mb-7 font-bold'>Amenities</h1>
        <div className="flex flex-wrap justify-center gap-7">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Amenities;
