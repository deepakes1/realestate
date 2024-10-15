import React from 'react'

function Mall() {
  return (
    <div> 
        <div class="background-mall">
          <div class="overlay"></div>
            <div class="content">
                <div className='p-5'>
                  <div className="flex gap-2 items-center">
                    <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Shopping Mall</h1>
                  </div>
                  <div className=" text-md lg:text-xl">
                    <p className='mt-2'>A unique Shopping Mall with an awesome combination of shopping and entertainment, ultramodern ambience and unmatched conveniences is the highlight of every township. This future city centre with multiplex shall set new standards and trends in retail & entertainment and shall become the city hub for every resident of that city. It has been located in such a manner that the non-residents who are using these facilities do not enter the residential areas thus ensuring complete privacy and solitude to the residents.</p>
                  </div>        
                  <ul style={{ listStyleType: 'disc' }} className='p-5 text-md lg:text-xl'>
                    <li className=''><span className='font-semibold '>Majestic elevation </span>exclusively designed massive atrium based on the latest concepts ensuring visibility to all shops and showrooms.</li>
                    <li className='mt-3'><span className='font-semibold'>Centrally air-conditioned </span>for immaculate shopping experience</li>
                    <li className='mt-3'><span className='font-semibold'>Large playground for outdoor sports such as cricket, football etc.</span></li>
                    <li className='mt-3'>Multiple openings & accessibility from all sides.</li>
                    <li className='mt-3'> Hyper Market (Super Market) ensuring availability of all the Items such as <span className='font-semibold'>Grocery & Confectionary Items, Household Goods, Clothing & Footwear, Utensils, Furnishing Items</span></li>
                    <li className='mt-3'><span className='font-semibold'>Kids Play Zone with entertainment for kids</span></li>
                    <li className='mt-3'>Fully equipped Computer rooms</li>
                    <li className='mt-3'><span className='font-semibold'>Multi-cuisine </span>food courts & speciality restaurants.</li>
                    <li className='mt-3'><span className='font-semibold'>Professionally managed expansive parking.</span></li>
                    <li className='mt-3'><span className='font-semibold'>100% round-the-clock power supply with complete back-up ensured.</span></li>
                  </ul>


                  </div>
            </div>
        </div>
      
    </div>
  )
}

export default Mall
