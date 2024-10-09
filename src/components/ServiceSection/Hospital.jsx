import React from 'react'
import medicine from '../../assets/medicine.gif'

function Hospital() {
  return (
    <div>
       <div className='p-5'>
        <div className="flex gap-2 items-center">
            <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Sahara Mini Hospital</h1>
            <img src={medicine} className='w-10 h-10  object-cover' alt="camera" />
        </div>
        <div className=" text-md lg:text-xl">
            <p className='mt-2'>The 25-bed Sahara Mini Hospital comprises a 3-storied building structure with a basement housing the services, facilitated by a strong infrastructure and 100% round-the-clock power supply with complete back-up.</p>
            <p className='mt-2'>The modern medical centre comprises a large Reception Area and Waiting Lounge with three separate entrances from the main entrance, O.P.D. and the Casualty/Emergency.</p>
            <p className='mt-2'>Staircases along with two spacious elevators are provided at the reception area for the visitors.</p>
        </div>        
        <ul style={{ listStyleType: 'disc' }} className='p-5 text-md lg:text-xl'>
            <li className=' mt-3'><span className='font-semibold '>Out Patient Department (O.P.D.):</span> O.P.D. consists of a general waiting room and registration counter with the following consulting rooms: <br/>(i) General Physician <br />(ii) Cardiologist <br />(iii) Orthopaedist <br />(iv) Gastroenterologist <br />(v) Dentist <br />(vi) Gynaecologist <br />(vii) Ear, Nose, Throat (ENT)</li>
            <li className='mt-3'><span className='font-semibold '>Pathology Section :</span> Pathology centre to test the samples collected locally. Special pathological tests would be conducted at the Super Specialty Sahara Hospital, Lucknow, the reports of which shall be generated in a day's time</li>
            <li className='mt-3'><span className='font-semibold'>Casualty / Emergency:</span> Casualty Department is provided with a separate entrance, registration counter, police-counter with 3 emergency beds, medical officer's cabin and social worker's room. There is a minor treatment and dressing room and a store for the same. There are two lifts for the patients along with a separate lobby attached to the casualty ward for emergency situations, two visitor's lift and two staircases</li>
            <li className='mt-3'><span className='font-semibold'>Radiology Department:</span> The department is provided with a waiting lounge, registration counter along with an X-ray room, dark room, control & equipment room and a store.</li>
            <li className='mt-3'><span className='font-semibold'>Maternity Department:</span> The section has a two patient general ward, special ward, a labour room, N.S.U. room and nurse room with wash area.</li>
            <li className='mt-3'><span className='font-semibold'>Female Ward:</span> It consists of 7 beds with a doctor's cabin, nurse station, stretcher area and tollets</li>
            <li className='mt-3'><span className='font-semibold'>Operation Theatre Section:</span> This department consists of a sterile and a non-stre zone. The sterile area consists of a Major OT, a scrub and a gown area along with a recovery room. Other facilities Include O.T's matron room, pantry, wash area, equipment sterilization and stores for the same.</li>
            <li className='mt-3'><span className='font-semibold'>L.C.U. Section:</span> There are two I.C.U beds and a special highly equipped LCU. room with a separate nurse station and store.</li>
            <li className='mt-3'><span className='font-semibold'>General Wards:</span> The General male ward can accommodate 7 beds, separate area for nurse station, a doctor's room and tollets. There are two special wards with attached tollets.</li>
            <li className='mt-3'><span className='font-semibold'>24-hour medical store & pantry services.</span> </li>
            <li className='mt-3'><span className='font-semibold'>Basement Floor:</span> <br /> i) Service entry from the basement through a ramp for smooth loading and uploading counters with a management office, stores, kitchen area, laundry, linen along with an Air-conditioned machine & electric room. <br />ii) Service staircases and a lit to connect the hospital to the basement <br />iii) Spacious Cafeteria for the hospital staff <br />iv) Change and Rest Areas for nurses as well as for the class IV staff workers</li>
            <li className='mt-3'><span className='font-semibold'>Tele-Medicine:</span> <br />i) Tele-medicine facility centre on the lower floor. <br />ii) 24-hour online connectivity with the super specialty SaturaHospital, Lucknow In association with Apollo Hospitals Enterprise Ltd. Under it, all the 217 Sahara Mini Hospitals will have 24-hour connectivity with Sahara Hospital enabling doctors at different centers to share expert opinions and advice</li>
        </ul>
    </div>
    </div>
  )
}

export default Hospital
