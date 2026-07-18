import React from 'react'
import banner from '../assets/banner.jpg'
import { Plane, Hotel, UtensilsCrossed, Activity, MapPinned, BadgePercent } from 'lucide-react'
import Features from '../Component/Features'

const About = () => {
  const featuresJson = [
    {
      icon: Plane,
      name: 'Best Destinations',
      description: 'Experience the best of the world with our expert guides and local insights.'
    },
    {
      icon: Hotel,
      name: 'Best Hotels',
      description: 'Experience the best of the world with our expert guides and local insights.'
    },
    {
      icon: UtensilsCrossed,
      name: 'Best Restaurants',
      description: 'Experience the best of the world with our expert guides and local insights.'
    },
    {
      icon: Activity,
      name: 'Best Activities',
      description: 'Experience the best of the world with our expert guides and local insights.'
    },
    {
      icon: MapPinned,
      name: 'Best Tours',
      description: 'Experience the best of the world with our expert guides and local insights.'
    },
    {
      icon: BadgePercent,
      name: 'Best Deals',
      description: 'Experience the best of the world with our expert guides and local insights.'
    }
  ]

  return (
    <div className='w-full'>

      <div
        className='relative flex h-[250px] w-full items-center justify-center bg-cover bg-center sm:h-[320px] md:h-[400px] md:bg-fixed'
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='z-10 px-4 text-center text-white'>
          <h1 className='mt-6 font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:mt-10 md:text-5xl'>
            About Us
          </h1>
        </div>
      </div>

      <div className='mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-10 md:py-14'>
        <div className='grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12'>
          <div
            className='relative h-[240px] w-full bg-cover bg-center border-2 border-gray-300 rounded-lg sm:h-[320px] md:h-[400px]'
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className='absolute inset-0 bg-black opacity-50'></div>
          </div>

          <div className='text-center text-black md:text-left'>
            <h2 className='font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Our Mission
            </h2>
            <p className='mx-auto mt-6 max-w-prose text-base leading-relaxed text-gray-700 sm:mt-8 sm:text-lg md:mx-0'>
              We are a team of travel experts who are passionate about helping people explore the world. We are a team of travel experts who are passionate about helping people explore the world.
            </p>
          </div>
        </div>
      </div>
      <Features />
    </div>
  )
}

export default About;