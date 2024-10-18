import React from 'react'
function Club() {
  return (
    <div>
      <div className='p-5'>
        <div className="flex gap-2 items-center">
            <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Club</h1>
        </div>
        <div className=" text-md lg:text-xl">
            <p className='mt-2'>Special club in tune with the sophisticated taste of socialites & high profile personalities.</p>
        </div>        
        <ul style={{ listStyleType: 'disc' }} className='p-5 text-md lg:text-xl'>
            <li className=''><span className='font-semibold '>Indoor Sports Centre</span> with recreation facilities of table tennis, badminton, pool/snooker & squash.</li>
            <li className='mt-3'><span className='font-semibold'>A large swimming pool for the guests & Club members.</span></li>
            <li className='mt-3'><span className='font-semibold'>Fitness centre for the fitness freaks with aerobics, gymnasium, sauna, jacuzzi etc.</span></li>
            <li className='mt-3'>Business centre providing facilities for efficient conducting of business.</li>
            <li className='mt-3'><span className='font-semibold'>24-hour coffee shop.</span></li>
            <li className='mt-3'><span className='font-semibold'>Stores, services & utility areas in the basement.</span></li>
            <li className='mt-3'>Stores, services & utility areas in the basement Multi-dimensional recreational facilities such asball room, restaurants, TV room, chess, carom, card room, well maintained lawn, beauty parlour, library with an immaculate collection of books etc.</li>
            <li className='mt-3'><span className='font-semibold'>Expansive party lawn of approx. 2602.23 sq. m</span> (28,000 sq.ft.) for hosting partles, functions etc.</li>
            <li className='mt-3'><span className='font-semibold'>A huge parking area for approximately 150 cars.</span></li>
        </ul>
    </div>
    </div>
  )
}

export default Club
