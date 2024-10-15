import React from 'react'
import bowling from '../../assets/bowling.gif'
function KidsPlayArea() {
  return (
    <div>
      <div className='p-5'>
        <div className="flex gap-2 items-center">
            <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Kids Play Area</h1>
            <img src={bowling} className='w-10 h-10  object-cover' alt="camera" />
        </div>
        <div className=" text-md lg:text-xl">
            <p className='mt-2'>Welcome to our exclusive children's play area, a vibrant space thoughtfully designed to inspire fun, frolic, and entertainment. This dynamic environment features modern play equipment that promotes both mental and physical development, ensuring a holistic approach to childhood growth.</p>
        </div>        
        <ul style={{ listStyleType: 'disc' }} className='p-5 text-md lg:text-xl'>
            <li className=''><span className='font-bold'>Each element has been carefully selected to engage children's imaginations, encouraging creativity and exploration. From climbing structures that build strength and coordination to interactive games that stimulate cognitive skills, every aspect is crafted to provide a rich and rewarding experience.</span></li>
            <li className='mt-3'>Parents can rest assured knowing that safety is our top priority; the area is equipped with soft flooring and secure equipment, allowing children to play freely and confidently. This dedicated space not only fosters physical fitness but also nurtures social skills as kids interact, collaborate, and form lasting friendships.</li>
            <li className='mt-3'>Here, laughter and joy abound as children immerse themselves in a world of adventure. Let your little ones unleash their energy and creativity in a safe, engaging environment designed specifically for their growth and happiness.</li>
        </ul>
      </div>
    </div>
  )
}

export default KidsPlayArea
