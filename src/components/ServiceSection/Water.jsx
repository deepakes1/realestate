import React from 'react'
import water from '../../assets/water.gif'

function Water() {
  return (
    <div>
    <div className='md:h-[89vh]'>
        <div className="background">
            <div className="overlay"></div> 
            <div className="content">
                <div className='p-5'>
                    <div className="flex gap-2 items-center">
                        <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>
                            Purified Water Supply
                        </h1>
                        {/* Uncomment the line below to add an image */}
                        {/* <img src={water} className='w-10 h-10 object-cover' alt="camera" /> */}
                    </div>
                    <div className="text-md lg:text-xl">
                        <p className='mt-2'>
                            At Sahara City Homes, we prioritize health and well-being by providing a state-of-the-art Reverse Osmosis plant. 
                            This system ensures pure drinking water is supplied directly to your kitchen through stainless steel pipes, 
                            safeguarding residents from waterborne diseases.
                        </p>
                    </div>      
                    <h1 className='text-2xl lg:text-3xl mt-5 font-semibold font-serif'>Why It Matters:</h1>  
                    <ul style={{ listStyleType: 'disc' }} className='p-5 text-md lg:text-xl'>
                        <li>Clean water is crucial for health; water-related diseases claim countless lives each year.</li>
                        <li className='mt-3'>Our initiative helps combat illnesses like cholera, diarrhea, and typhoid, which are prevalent due to unsafe water sources.</li>
                    </ul>

                    <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Key Benefits:</h1>  
                    <ul style={{ listStyleType: 'disc' }} className='p-5 text-md lg:text-xl'>
                        <li>Access to safe drinking water enhances quality of life.</li>
                        <li className='mt-3'>Protects families from health risks associated with contaminated water.</li>
                    </ul>

                    <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Additional Amenities:</h1>  
                    <ul style={{ listStyleType: 'disc' }} className='p-5 text-md lg:text-xl'>
                        <li>Piped Cooking Gas Supply: Convenient and efficient cooking for every kitchen.</li>
                        <li className='mt-3'>Eco-Friendly Disposal System: Includes sewage, drainage, and garbage treatment facilities, ensuring a sustainable living environment.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default Water
