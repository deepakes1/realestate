import React from 'react'

function FooterHomeSection() {
  return (
    <div>
      <div className="mt-4 p-5 text-center border-t-2 flex flex-col items-center justify-center h-[50vh]">
       <h1 className='text-3xl font-semibold'>Ready to start your Next Project</h1>
       <p className='text-lg mt-2'>Fill the below form to register</p>
       <div className="mt-5 flex gap-3">
          <a href='https://forms.gle/sY55SKJFzhSxkymE9' className='bg-black text-white px-2 py-2 '>Register Online</a>
          <a  className="bg-black text-white px-2 py-2" href="../assets/downloadFile.pdf" download ="downloadFile.pdf" >
            Offline Form
          </a>
       </div>
     </div>
    </div>
  )
}

export default FooterHomeSection
