import React from 'react';

const Hospital = () => {
  const facilities = [
    {
      title: "Out Patient Department (O.P.D.)",
      description: "O.P.D. consists of a general waiting room and registration counter with the following consulting rooms: \n(i) General Physician \n(ii) Cardiologist \n(iii) Orthopaedist \n(iv) Gastroenterologist \n(v) Dentist \n(vi) Gynaecologist \n(vii) Ear, Nose, Throat (ENT)"
    },
    {
      title: "Pathology Section",
      description: "Pathology centre to test the samples collected locally. Special pathological tests would be conducted at the Super Specialty Sahara Hospital, Lucknow, with reports generated in a day's time."
    },
    {
      title: "Casualty / Emergency",
      description: "Casualty Department has a separate entrance, registration counter, police-counter with 3 emergency beds, medical officer's cabin, and social worker's room. Includes a minor treatment room, dressing room, and store, with two lifts and a separate lobby for emergencies."
    },
    {
      title: "Radiology Department",
      description: "Includes a waiting lounge, registration counter, X-ray room, dark room, control & equipment room, and a store."
    },
    {
      title: "Maternity Department",
      description: "Features a general ward, special ward, a labour room, N.S.U. room, and nurse room with wash area."
    },
    {
      title: "Female Ward",
      description: "Comprises 7 beds, a doctor's cabin, nurse station, stretcher area, and toilets."
    },
    {
      title: "Operation Theatre Section",
      description: "Contains a sterile and non-sterile zone, Major OT, scrub area, gown area, recovery room, and O.T. matron room."
    },
    {
      title: "L.C.U. Section",
      description: "Includes two I.C.U beds and a specially equipped L.C.U. room with a separate nurse station."
    },
    {
      title: "General Wards",
      description: "The General male ward accommodates 7 beds, with separate nurse station, doctor's room, and toilets."
    },
    {
      title: "24-hour medical store & pantry services",
      description: ""
    },
    {
      title: "Basement Floor",
      description: "Service entry from the basement, management office, stores, kitchen area, laundry, and cafeteria for staff."
    },
    {
      title: "Tele-Medicine",
      description: "Tele-medicine facility with 24-hour online connectivity with Sahara Hospital, enabling doctors to share expert opinions."
    }
  ];

  return (
    <div className="background-hospital">
      <div className="overlay"></div>
      <div className="content p-5">
        <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Sahara Mini Hospital</h1>
        <p className='mt-2'>The 25-bed Sahara Mini Hospital comprises a 3-storied building structure with a basement housing the services, facilitated by strong infrastructure and 100% round-the-clock power supply.</p>
        <p className='mt-2'>The modern medical centre features a large reception area and waiting lounge with three separate entrances from the main entrance, O.P.D., and the Casualty/Emergency.</p>
        <p className='mt-2'>Staircases and two spacious elevators are provided for visitors at the reception area.</p>
        <ul className='p-5 text-md lg:text-xl list-disc'>
          {facilities.map((facility, index) => (
            <li key={index} className='mt-3'>
              <span className='font-semibold'>{facility.title}:</span> {facility.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Hospital;
