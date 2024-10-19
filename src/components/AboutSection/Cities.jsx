import React from 'react';

const StateData = () => {
  const states = [
    { name: 'Andhra Pradesh', cities: 10 },
    { name: 'Kerala', cities: 1 },
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
    <div className="border border-t-2 p-5">
      <h1 className="text-2xl italic font-semibold text-center mb-6">State Data</h1>
      <table className="w-[90vw] md:w-[70vw] mx-auto text-center border-collapse border border-gray-300">
        <thead>
          <tr className="text-lg">
            <th className="border border-gray-300 p-2">State</th>
            <th className="border border-gray-300 p-2">No. of Cities</th>
          </tr>
        </thead>
        <tbody>
          {states.map((state, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{state.name}</td>
              <td className="border border-gray-300 p-2">{state.cities}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StateData;
