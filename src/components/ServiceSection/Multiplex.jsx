import React from 'react'

function Multiplex() {
  return (

    <div class="background-multiplex">
        <div class="overlay"></div>
        <div class="content">
            <div className='flex flex-col items-center justify-center h-[80vh]'>
              <div className="flex gap-2 items-center">
                  <h1 className='text-3xl font-semibold italic'>Multiplex</h1>
                  
              </div>

              <ul style={{ listStyleType: 'disc' }} className='p-10 md:p-5 text-md lg:text-xl'>
                  <li className=''><span className='font-semibold '>3-screen multiplex</span> with a combined seating capacity of more than 1,000 people.</li>
                  <li className='mt-3'><span className='font-semibold'>Tastefully decorated interiors & luxurious seats. </span></li>
                  <li className='mt-3'><span className='font-semibold'>Large playground for outdoor sports such as cricket, football etc.</span></li>
                  <li className='mt-3'>Fast food centre.</li>
                  <li className='mt-3'><span className='font-semibold'>100% round-the-clock power supply with complete back-up ensured</span></li>
                  <li className='mt-3'><span className='font-semibold'>Ample parking slots.</span></li>
              </ul>
              </div>
          </div>
      </div>
    
  )
}

export default Multiplex
