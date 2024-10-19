import React from 'react'


function Rennovation() {
  return (
    <div className='p-4 flex gap-3 justify-center items-center h-[89vh]'>
      <div className="bg-slate-200 p-5 shadow-xl md:w-[25vw]">
        <h1 className='text-xl md:text-3xl font-semibold  text-center'>ESSENTIAL SERVICE</h1>
    
        <ul style={{ listStyleType: 'disc' }} className='p-7 text-md lg:text-xl'>
          <li>Convenience stores</li>
          <li>Banking</li>
          <li>Postal services</li>
          <li>Beauty parlour</li>
        </ul>
      </div>

      <div className="bg-slate-200 p-5 shadow-xl md:w-[25vw] text-center">
        <h1 className='text-xl md:text-3xl font-semibold'>Seamless Connectivity</h1>
      <ul style={{ listStyleType: 'disc' }} className='p-7 text-md lg:text-xl'>
        <li><b>24-hour uninterrupted satellite</b> connectivity for television.</li>
        <li>Pre-wired for cable and telephone</li>
        <li>Uninterrupted availability of movies provided on demand</li>
        <li>Internet kiosks</li>
        <li><b>Video-conferencing</b></li>
      </ul>
      </div>

      <div className="bg-slate-200 p-5 shadow-xl md:w-[25vw] ">
        <h1 className='text-xl md:text-3xl font-bold  text-center'>SERVICE CENTER</h1>
      <ul style={{ listStyleType: 'disc' }} className='p-7 text-md lg:text-xl'>
        <li><div>
            <h1>Taxi services</h1> 
        </div></li>
        <li><div>
            <h1>Plumbing</h1> 
        </div></li>
        <li><div>
            <h1>Masonary</h1> 
        </div></li>
        <li><div>
            <h1>Electrical repair services</h1> 
        </div></li>
      </ul>
      </div>


    </div>
  )
}

export default Rennovation
