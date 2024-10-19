import React from 'react';

const Education = () => {
  const features = [
    "Expert faculty & latest education techniques.",
    "A multipurpose Audio-Visual, pillar-less and double height Assembly Hall of 743.49 sq.m to 929.36 sq.m (8000 to 10,000 sq. ft. area) with a capacity of accommodating more than 800 people.",
    "Large playground for outdoor sports such as cricket, football, etc.",
    "A well-equipped pillar-less library with browsing facility and a hobby centre. The hobby centre & library together will have an area of 743.49 sq.m to 929.36 sq.m (8,000 to 10,000 sq.ft.)",
    "Provision for facilities such as an indoor swimming pool, indoor badminton court, table tennis, chess, carom along with a well-equipped gymnasium in a separate building.",
    "100% round-the-clock power supply with complete back-up ensured.",
    "Fully equipped computer rooms.",
    "North-South orientation of the structure blocking unwanted glare in the classrooms.",
    "Conference room for meetings of the teachers and parents.",
    "Provision for support facilities of laboratories & workshops.",
    "Co-education.",
    "A separate Kindergarten section for lower age group along with a play section.",
    "A self-sufficient mess and a canteen with a provision for midday meals.",
    "Large reception and waiting lounge with a double height leading to administration & office areas on the ground floor.",
    "On every floor, there is a teacher's room, a toilet, and drinking water facility.",
    "Two lifts and staircase blocks strategically located on the floor for easy and quick dispersal of students."
  ];

  return (
    <div className="background-education">
      <div className="overlay"></div>
      <div className="content p-5">
        <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Premium Education Facilities</h1>
        <p className='mt-2 text-md lg:text-xl'>
          The education centre aims to educate the children and develop them into responsible citizens of tomorrow by imparting them an amalgamation of academic, personality & extra curricular development. It will have a capacity of 1600 students.
        </p>
        <p className='mt-2 font-semibold text-md lg:text-xl'>
          Centrally air-conditioned school having 38 spacious & well-lit classrooms, expert faculty & latest education techniques.
        </p>
        <ul className='p-5 text-md lg:text-xl list-disc'>
          {features.map((feature, index) => (
            <li key={index} className='mt-3'>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Education;
