import React from 'react';

const Power = () => {
  const features = [
    {
      title: "Uninterruptible Power Supply (UPS) System",
      description: "Ensuring a continuous power supply to your Sahara City home, even during extended outages."
    },
    {
      title: "State-of-the-art Power Management System",
      description: "A centralized system incorporating advanced technology to monitor and control power distribution, ensuring efficient and reliable power supply."
    },
    {
      title: "Redundant Power Sources",
      description: "Multiple power sources, including generators and battery backup systems, to ensure that your home remains powered during outages."
    },
    {
      title: "Quick Response Team",
      description: "A dedicated team of experts available 24/7 to respond to any power-related issues or emergencies."
    },
    {
      title: "Power Grid Monitoring",
      description: "Real-time monitoring of the power grid to detect potential outages and take proactive measures to ensure uninterrupted power supply."
    },
    {
      title: "Regular Maintenance and Testing",
      description: "Scheduled maintenance and testing of the UPS system to ensure optimal performance and reliability."
    },
    {
      title: "Backup Power Generators",
      description: "High-capacity generators that can provide backup power during extended outages, ensuring that your home remains powered and comfortable."
    },
    {
      title: "Power Distribution Units (PDUs)",
      description: "Advanced PDUs that distribute power efficiently and reliably, minimizing the risk of power outages and electrical faults."
    }
  ];

  return (
    <div className="background-power">
      <div className="overlay"></div>
      <div className="content">
        <div className='p-5'>
          <div className="flex gap-2 items-center">
            <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Power Supply</h1>
          </div>
          <div className="text-md lg:text-xl">
            <p className='mt-2 italic font-semibold'>
              "Experience uninterrupted power supply in your Sahara City home with our reliable and efficient UPS systems. Our systems are designed to provide seamless backup power during outages, ensuring your appliances, electronics, and security systems remain operational. Say goodbye to food spoilage, security risks, and discomfort caused by power outages. Get a quote today and enjoy peace of mind!"
            </p>
          </div>
          <ul className='p-5 text-md lg:text-xl list-disc'>
            {features.map((feature, index) => (
              <li key={index} className='mt-3'>
                <span className='font-semibold'>{feature.title}:</span> {feature.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Power;
