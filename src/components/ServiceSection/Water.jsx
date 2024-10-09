import React from 'react'
import water from '../../assets/water.gif'

function Water() {
  return (
    <div>
      <div>
       
       <div className='p-5'>
        <div className="flex gap-2 items-center">
            <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Purified Water Supply</h1>
            <img src={water} className='w-10 h-10  object-cover' alt="camera" />
        </div>
        <div className=" text-md lg:text-xl">
            <p className='mt-2'>Pure water is one of the most important element of nature which forms the basis of healthcare. At Sahara City Homes the residents are being provided a <b>'Reverse Osmosis'</b>  plant for supplying pure drinking water straight into the kitchen through stainless steel pipes which would ensure good health and take care against many water borne diseases like <b>Cholera, Amoebiosis, Diarrhoea, Typhoid, Jaundice, Dysentry, Hepatitis A & E</b> etc. The message by the Secretary General of UNO on World Environment Day, 5th June 2003, proclaimed that water related diseases kill a child every 8 seconds, and are responsible for 80% of all illnesses & deaths in the developing world. *As per estimates 15 lac children under five die each year from water borne diseases. The World Bank report says that Diarrhoea alone killed over 7,00,000 Indians in 1999 (estimated)-over 1,600 deaths each day & around <b> 21%</b> of all communicable diseases in India are water borne. In U.P. alone Rs. 6,000 crore are being spent every year to deal with the water borne diseases. According to ENN (Environmental News Network) report of 2003, nearly 70% of the States (1,660 lac people) lack access to safe drinking water. Due to arsenic contamination of water, the number of cancer patients in U.P. has almost doubled in the last 10 years. <b>The source of purifying drinking water in every house shall prove to be the lifeline for every resident and authenticates our endeavour in fulfilling our aim.</b></p>
        </div>        
        <ul style={{ listStyleType: 'disc' }} className='p-5 text-md lg:text-xl'>
            <li className=''><span className='font-semibold '>Source: People & the Planet website 2000-2004 </span></li>
            <li className='mt-3'><span className='font-semibold'>Piped cooking </span>gas supply for every kitchen.</li>
            <li className='mt-3'><span className='font-semibold'>Disposal System: </span>Eco-friendly sewage, drainage, physical garbage collection and garbage treatment plants</li>
        </ul>
    </div>
    
    </div>
    </div>
  )
}

export default Water
