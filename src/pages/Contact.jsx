import React from 'react'
import Contact from '../Component/Contact'
import banner from '../assets/banner.jpg'
const ContactPage = () => {
  return (
    <div>
       <div
        className='relative flex h-[200px] w-full items-center justify-center bg-cover bg-center sm:h-[280px] md:h-[360px] md:bg-fixed lg:h-[400px]'
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='z-10 px-4 pt-14 text-center text-white sm:pt-16 md:pt-20'>
          <h1 className='font-serif text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Contact Us
          </h1>
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default ContactPage;