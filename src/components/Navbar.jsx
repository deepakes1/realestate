import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='border bg-slate-200 p-4'>
      <div className="md:flex justify-between items-center">
        <div className="flex justify-between">
            <h1>Sahara Housing</h1>
            <div className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16">
                    <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0z"/>
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                </svg>
            </div>
            
        </div>

        <div className="mt-4 md:mt-0 text-center md:flex gap-3">
            <div className='mb-1'><Link to="/" >Home</Link> </div>
            <div className='mb-1'><Link to="/About" className='mb-1'>About</Link></div>
            <div className='mb-1'><Link to="/TownshipFeatures" className='mb-1'>Township Features</Link></div>
            <div className='mb-1'><Link to="/ArchitectDesign" className='mb-1'>Architect & Design</Link></div>
            <div className='mb-1'><Link to="/NewsEvents" className='mb-1'>News & Events</Link></div>
            <div className='mb-1'><Link to="/Contact" className='mb-1'>Contact Us</Link></div>
            
        </div>
        
      </div>
    </div>
  )
}

export default Navbar