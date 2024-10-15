import React from 'react';

const StateData = () => {
  const states = [
    { name: 'Andhra Pradesh', cities: 10 },
    { name : 'Kerala', cities: 1 },
    { name: 'Assam', cities: 4 },
    { name: 'Madhya Pradesh', cities: 16 },
    { name: 'Bihar', cities: 19 },
    { name: 'Maharashtra', cities: 17 },
    { name: 'Chandigarh', cities: 1 },
    { name: 'Chhattisgarh', cities: 4 },
    { name: 'Orissa', cities: 4 },
    { name: 'Pondicherry', cities: 1 },
    { name: 'Goa', cities: 1 },
    { name: 'Punjab', cities: 9 },
    { name: 'Gujarat', cities: 11 },
    { name: 'Rajasthan', cities: 13 },
    { name: 'Haryana', cities: 14 },
    { name: 'Tamil Nadu', cities: 10 },
    { name: 'Himachal Pradesh', cities: 1 },
    { name: 'Uttaranchal', cities: 6 },
    { name: 'Jammu & Kashmir', cities: 1 },
    { name: 'Uttar Pradesh', cities: 50 },
    { name: 'Jharkhand', cities: 6 },
    { name: 'Karnataka', cities: 12 },
    { name: 'West Bengal', cities: 6 },
  ];

  return (
    <div className='border border-t-2 p-5'>
      <h1 className='text-2xl italic font-semibold text-center mb-6'>State Data</h1>
      <table style={{ border: '1px solid black' }} className="w-[90vw] md:w-[70vw] mx-auto text-center">
        <thead style={{ border: '1px solid black' }}>
          <tr className="text-lg" >
            <th >State</th>
            <th>No. of Cities</th>
          </tr>
        </thead>
        <tbody style={{ border: '1px solid black' }}>
          {states.map((state, index) => (
            <tr style={{ border: '1px solid black' }} key={index}>
              <td className='p-2'>{state.name}</td>
              <td>{state.cities}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StateData;