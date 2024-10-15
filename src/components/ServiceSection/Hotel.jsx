import React from 'react'
import hotel from '../../assets/hotel.gif'

function Hotel() {
  return (
    <div>
      <div className='p-5'>
        <div className="flex gap-2 items-center">
            <h1 className='text-2xl lg:text-3xl font-semibold font-serif'>Hotel</h1>
            <img src={hotel} className='w-10 h-10  object-cover' alt="camera" />
        </div>
        <div className=" text-md lg:text-xl">
            <p className='mt-2'>A grand & exclusive hotel having 100-300 rooms built on the latest architectural concepts consisting of premium features & facilities. It shall be an integral part of every Sahara City Homes Township. It has been located in such a manner that the non-residents who are using these facilities do not enter the residential areas thus ensuring complete privacy and solitude to the residents.</p>
        </div>        
        <ul style={{ listStyleType: 'disc' }} className='p-5 text-md lg:text-xl'>
            <li className=''><span className='font-semibold '>Centrally air-conditioned building </span>with impressive modern elevation.</li>
            <li className='mt-3'>100% round-the-clock power supply with complete back-up ensured<span className='font-semibold'>Impressive reception, lobby and lounge</span></li>
            <li className='mt-3'><span className='font-semibold'>A maid's room, linen store, pantry and a spacious guest elevator lobby on every floor.</span></li>
            <li className='mt-3'>Pillar-less banquet hall with a capacity of comprising <b>more than 800 people</b> for cultural functions & gatherings.</li>
            <li className='mt-3'> Hyper Market (Super Market) ensuring availability of all the Items such as <span className='font-semibold'>Grocery & Confectionary Items, Household Goods, Clothing & Footwear, Utensils, Furnishing Items</span></li>
            <li className='mt-3'><span className='font-semibold'>Kids Play Zone with entertainment for kids</span></li>
            <li className='mt-3'>Fully equipped Computer rooms</li>
            <li className='mt-3'><span className='font-semibold'>Multi-cuisine </span>food courts & speciality restaurants.</li>
            <li className='mt-3'><span className='font-semibold'>Professionally managed expansive parking.</span></li>
            <li className='mt-3'><span className='font-semibold'>100% round-the-clock power supply with complete back-up ensured.</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Hotel
