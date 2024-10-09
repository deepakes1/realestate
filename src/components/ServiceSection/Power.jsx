import React from 'react'
import power from '../../assets/power.gif'
function Power() {
  return (
    <div>
      <div className='p-5'>
        <div className="flex gap-2 items-center">
            <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Hotel</h1>
            <img src={power} className='w-10 h-10  object-cover' alt="camera" />
        </div>
        <div className=" text-md lg:text-xl">
            <p className='mt-2 italic font-semibold'>"Experience uninterrupted power supply in your Sahara City home with our reliable and efficient UPS systems. Our systems are designed to provide seamless backup power during outages, ensuring your appliances, electronics, and security systems remain operational. Say goodbye to food spoilage, security risks, and discomfort caused by power outages. Get a quote today and enjoy peace of mind!"</p>
        </div>        
        <ul style={{ listStyleType: 'disc' }} className='p-5 text-md lg:text-xl'>
            <li className=''><span className='font-semibold '>Uninterruptible Power Supply (UPS) System: </span>Ensuring a continuous power supply to your Sahara City home, even during extended outages.</li>
            <li className='mt-3'><span className='font-semibold'>State-of-the-art Power Management System:</span>A centralized system incorporating advanced technology to monitor and control power distribution, ensuring efficient and reliable power supply.</li>
            <li className='mt-3'><span className='font-semibold'>Redundant Power Sources:</span>Multiple power sources, including generators and battery backup systems, to ensure that your home remains powered during outages.</li>
            <li className='mt-3'><span className='font-semibold'>Quick Response Team:</span>A dedicated team of experts available 24/7 to respond to any power-related issues or emergencies.</li>
            <li className='mt-3'><span className='font-semibold'>Power Grid Monitoring:</span>Real-time monitoring of the power grid to detect potential outages and take proactive measures to ensure uninterrupted power supply.</li>
            <li className='mt-3'><span className='font-semibold'>Regular Maintenance and Testing:</span>Scheduled maintenance and testing of the UPS system to ensure optimal performance and reliability.</li>
            <li className='mt-3'><span className='font-semibold'>Backup Power Generators:</span>High-capacity generators that can provide backup power during extended outages, ensuring that your home remains powered and comfortable.</li>
            <li className='mt-3'><span className='font-semibold'>Power Distribution Units (PDUs):</span>Advanced PDUs that distribute power efficiently and reliably, minimizing the risk of power outages and electrical faults.</li>
        </ul>
    </div>
    </div>
  )
}

export default Power;
