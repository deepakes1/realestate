import React from 'react';

const StateData = () => {
  const states = [
    { name: 'Andhra Pradesh', cities: 10 },
    { name : 'Kerala', cities: 1 },
    { name: 'Assam', cities: 4 },
    { name: 'Madhya Pradesh', cities: 16 },
    { name: 'Bihar', cities: 19 },
    { name: 'Maharashtra', cities: 17 },
    { name: 'Chandigarh', cities: 0 },
    { name: 'Chhattisgarh', cities: 1 },
    { name: 'Orissa', cities: 4 },
    { name: 'Pondicherry', cities: 1 },
    { name: 'Goa', cities: 1 },
    { name: 'Punjab', cities: 9 },
    { name: 'Gujarat', cities: 11 },
    { name: 'Rajasthan', cities: 13 },
    { name: 'Haryana', cities: 14 },
    { name: 'Tamil Nadu', cities: 10 },
    { name: 'Himachal Pradesh', cities: 1 },
    { name: 'Uttaranchal', cities: 0 },
    { name: 'Jammu & Kashmir', cities: 1 },
    { name: 'Uttar Pradesh', cities: 0 },
    { name: 'Jharkhand', cities: 0 },
    { name: 'Karnataka', cities: 6 },
    { name: 'West Bengal', cities: 12 },
  ];

  return (
    <div className='border border-t-2 p-5'>
      <h1 className='text-4xl font-semibold text-center mb-6'>State Data</h1>
      <table style={{ border: '1px solid black' }} className="w-[90vw] md:w-[70vw] mx-auto text-center">
        <thead style={{ border: '1px solid black' }}>
          <tr >
            <th>State</th>
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