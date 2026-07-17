import React from 'react'
import banner from '../assets/banner.jpg'

const Banner = () => {
  return (
   <div className='w-full h-[500px] bg-cover bg-center bg-fixed relative flex items-center justify-center' style={{ backgroundImage: `url(${banner})` }}>
    <div className='absolute inset-0 bg-black opacity-50'></div>
    <div className='z-10 text-white text-center'>
        <h1 className='text-5xl font-bold tracking-tighter mb-4 font-serif'>Ready to Explore the World?</h1>
        <p className='text-lg text-gray-300'>Book your dream vacation today and create unforgettable memories.</p>
        <button className='bg-orange-500 text-white px-4 py-2 rounded-md mt-4'>Book Now</button>
      </div>
    </div>
  )
};

export default Banner;