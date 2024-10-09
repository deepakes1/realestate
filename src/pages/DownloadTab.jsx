import React from 'react'
import downloadicon from "../assets/downloadicon.gif"
import globe from "../assets/globe.gif"
function DownloadTab() {
  return (
    <div className="flex flex-col justify-center items-center md:h-[80vh] mx-auto">
        <h1 className='text-2xl font-bold text-center'>Download the Forms</h1>
        
        <div className="flex flex-wrap gap-7 justify-center">
            <div className="mt-5 w-[300px] bg-slate-200 p-5">
                <h1 className='text-xl font-semibold mb-3'>Fill out Online</h1>
                <h1 className='text-lg'>Fill out our online form to register. Please click the link below to access the form, and we'll get back to you soon!</h1>            
                <div className="flex mt-5 gap-5 items-center">
                    <img src={globe} className = "h-[50px] w-[50px]" alt="" />
                    <h1 className='text-blue-400 underline'>Online Link</h1>
                </div>

            </div>

            <div className="mt-5 w-[300px] bg-slate-200 p-5">
                <h1 className='text-xl font-semibold mb-3'>Fill out Offline</h1>
                <h1 className='text-lg'>Fill out our online form to register. Please click the link below to access the form, and we'll get back to you soon!</h1>            
                <div className="flex gap-5 mt-5 items-center">
                    <img src={downloadicon} className = "h-[50px] w-[50px]" alt="" />
                    <a href='../downloadFile.pdf' download={"downloadFile.pdf"} className='text-blue-400 underline'>Offline Download</a>
                </div>

            </div>
        </div>

      </div>
  )
}

export default DownloadTab
