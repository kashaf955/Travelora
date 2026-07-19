import React from 'react'
import banner from '../assets/banner.jpg'

const Banner = () => {
  return (
    <div
      className='relative flex h-[280px] w-full items-center justify-center bg-cover bg-center sm:h-[360px] md:h-[420px] md:bg-fixed lg:h-[500px]'
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className='absolute inset-0 bg-black/50'></div>
      <div className='z-10 max-w-3xl px-4 text-center text-white sm:px-6'>
        <h2 className='mb-3 font-serif text-2xl font-bold tracking-tighter sm:mb-4 sm:text-4xl md:text-5xl'>
          Ready to Explore the World?
        </h2>
        <p className='text-sm text-gray-300 sm:text-base md:text-lg'>
          Book your dream vacation today and create unforgettable memories.
        </p>
        <button className='mt-4 rounded-md bg-orange-500 px-5 py-2.5 text-sm text-white transition-colors hover:bg-orange-600 sm:mt-5 sm:px-6 sm:py-3 sm:text-base'>
          Book Now
        </button>
      </div>
    </div>
  )
};

export default Banner;
