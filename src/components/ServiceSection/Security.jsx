import React from 'react';

const Security = () => {
  const securityFeatures = [
    "Total security to ensure a relaxed, stress-free, and safe environment.",
    "State-of-the-art centralized control station incorporating inputs through voice/video/data communication network and integrated by an advanced server system for easy access.",
    "Centralized electronic control room with a CCTV camera network linked to multiplexer, matrix switcher, and digital video recorder.",
    "Quick response teams, fire tenders, and critical-care ambulances to tackle any emergency at any time.",
    "Gated City with a 2.13 m (7 ft) high boundary wall & 0.91 m (3 ft) high grill fencing on top.",
    "Massive main-gate complex with 24-hour armed security.",
    "Well-trained & committed rapid action teams for round-the-clock vigilance & assistance to the residents.",
    "Comprehensive fire fighting set-up with our own fire tenders.",
    "3-4 watch towers in each township.",
    "Two special patrolling vehicles along with armed guards deployed between township & city to ensure security of residents while commuting."
  ];

  return (
    <div className="md:h-[89vh]">
      <div className="background-security">
        <div className="overlay"></div>
        <div className="content">
          <div className='p-5'>
            <div className="flex gap-2 items-center">
              <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Multi-Level Security</h1>
            </div>
            <ul className='p-5 text-md lg:text-xl list-disc'>
              {securityFeatures.map((feature, index) => (
                <li key={index} className='mt-1'>
                  <span className='font-semibold'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;
