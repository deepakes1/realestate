import React from 'react'

function HistorySectionHome() {
  return (
    <div>
        <div className="md:flex flex-row-reverse gap-5 border-t-2 ">
        <div className="md:flex flex-col justify-center p-6">
            <h1 className='font-semibold text-3xl lg:text-4xl mb-4'>About Our Association</h1>
            <p className='lg:text-xl'>
            Sahara City Homes is a chain of well- planned self-sufficient high quality townships across 217 cities in the
            country. For the first time a dream lifestyle is being offered to all classes of people on such a mammoth scale.
            These townships have been planned on 100 to 300 acre of land depending on the city. 55% - 60% of its total land area is open & surrounded by
            breathtaking ambience, laden with greenery. Sahara City Homes is a hub for all the assured facilities of security, health, education, well-connected transport and communication. It also has fully developed infrastructure with an easy access to all the amenities
            providing leisure and happiness,
            amusement and pleasure, boost of
            energy and eternal peace to its
            residents.
            </p>
        </div>

        <div className="mt-4 flex flex-col justify-center p-4 ">
            <img src="https://plus.unsplash.com/premium_photo-1677626706034-86c0e5387ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNvbnN0cnVjdGlvbiUyMGNvbXBhbnl8ZW58MHwwfDB8fHww" className='object-cover h-[30vh]  md:h-[50vh] w-[100vw] popout ' alt="not loading" />
        </div>

        </div>
      
    </div>
  )
}

export default HistorySectionHome
