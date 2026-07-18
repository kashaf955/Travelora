import React from 'react'
import GalleryComponent from '../Component/GalleryComp'
import banner from '../assets/banner.jpg'
const GalleryPage = () => {
  return (
    <div>
      <div
        className='relative flex h-[250px] w-full items-center justify-center bg-cover bg-center sm:h-[320px] md:h-[400px] md:bg-fixed'
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='z-10 px-4 text-center text-white'>
          <h1 className='mt-6 font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:mt-10 md:text-5xl'>
            Our Gallery
          </h1>
        </div>
      </div>
      <GalleryComponent />
    </div>
  )
};

export default GalleryPage;