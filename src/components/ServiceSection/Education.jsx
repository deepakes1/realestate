import React from 'react'
import graduate from '../../assets/graduate.gif'
function Education() {
  return (
    <div>
       
       <div className='p-5'>
        <div className="flex gap-2 items-center">
            <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Premium Education Facilities</h1>
            <img src={graduate} className='w-10 h-10  object-cover' alt="camera" />
        </div>
        <div className=" text-md lg:text-xl">
            <p className='mt-2'>The education centre aims to educate the children and develop them into responsible citizens of tomorrow by imparting them an amalgamation of academic, personality & extra curricular development. It will have a capacity of 1600 students.</p>
            <p className='mt-2 font-semibold'> Centrally air-conditioned school having 38 spacious & well-lit classrooms Expert faculty & latest education techniques.</p>
        </div>        
        <ul style={{ listStyleType: 'disc' }} className='p-5 text-md lg:text-xl'>
            <li className=''><span className='font-semibold '>Expert faculty & latest education techniques.</span> </li>
            <li className='mt-3'><span className='font-semibold '>A multipurpose Audio-Visual, pillar-less and double height Assembly Hall of 743.49 sq.m to 929.36 sq.m </span>(8000 to 10,000 sq. ft. area) with a capacity of accommodating more than <b> 800 people.</b></li>
            <li className='mt-3'><span className='font-semibold'>Large playground for outdoor sports such as cricket, football etc.</span></li>
            <li className='mt-3'>A well-equipped pillar-less library having browsing facility and a hobby centre. The hobby centre & library together will have an area of <span className='font-semibold'>743.49 sq.m to 929.36 sq.m</span> (8,000 to 10,000 sq.ft.)</li>
            <li className='mt-3'> Provision for facilities such as an <span className='font-semibold'>indoor swimming pool, indoor badminton court, table tennis, chess, carom along with a well equipped gymnasium in a separate building.</span></li>
            <li className='mt-3'><span className='font-semibold'>100% round-the-clock power supply</span>with complete back-up ensured</li>
            <li className='mt-3'>Fully equipped Computer rooms</li>
            <li className='mt-3'><span className='font-semibold'>North-South orientation</span>of the structure blocking unwanted glare in the classrooms.</li>
            <li className='mt-3'><span className='font-semibold'>Conference room </span>for meetings of the teachers and parents.</li>
            <li className='mt-3'>Provision for <span className='font-semibold'>support facilities of laboratories & workshops.</span></li>
            <li className='mt-3'>Co-education</li>
            <li className='mt-3'><span className='font-semibold'>A separate Kindergarten section</span> for lower age group along with a play section</li>
            <li className='mt-3'><span className='font-semibold'>A self-sufficient mess and a canteen</span> with a provision for the midday meals.</li>
            <li className='mt-3'><span className='font-semibold'> Large reception and waiting lounge with a double height leading to administration & office areas on the ground floor.</span></li>
            <li className='mt-3'><span className='font-semibold'>On every floor there is a teacher's room </span>, a toilet and drinking water facility</li>
            <li className='mt-3'><span className='font-semibold'>Two lifts and staircase blocks</span> strategically located on the floor for easy and quick dispersal of students.</li>
        </ul>
    </div>
    
    </div>
  )
}

export default Education
