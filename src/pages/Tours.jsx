import React from 'react'
import FeatureDestination from '../Component/FeatureDestination'
import banner from '../assets/banner.jpg'
const Tours = () => {
  return (
    <div>
      <div
        className='relative flex h-[250px] w-full items-center justify-center bg-cover bg-center sm:h-[320px] md:h-[400px] md:bg-fixed'
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='z-10 px-4 text-center text-white'>
          <h1 className='mt-6 font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:mt-10 md:text-5xl'>
            Our Tours
          </h1>
        </div>
      </div>
      <FeatureDestination />
    </div>
  )
}

export default Tours
