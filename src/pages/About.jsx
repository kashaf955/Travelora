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
        className='relative flex h-[200px] w-full items-center justify-center bg-cover bg-center sm:h-[280px] md:h-[360px] md:bg-fixed lg:h-[400px]'
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='z-10 px-4 pt-14 text-center text-white sm:pt-16 md:pt-20'>
          <h1 className='font-serif text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            About Us
          </h1>
        </div>
      </div>

      <div className='mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-10 md:py-14'>
        <div className='grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-12'>
          <div
            className='relative h-[200px] w-full rounded-lg border-2 border-gray-300 bg-cover bg-center sm:h-[280px] md:h-[400px]'
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className='absolute inset-0 rounded-lg bg-black/50'></div>
          </div>

          <div className='text-center text-black md:text-left'>
            <h2 className='font-serif text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Our Mission
            </h2>
            <p className='mx-auto mt-4 max-w-prose text-sm leading-relaxed text-gray-700 sm:mt-6 sm:text-base md:mx-0 md:mt-8 md:text-lg'>
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