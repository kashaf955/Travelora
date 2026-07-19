import React from 'react'
import { Plane, Hotel, UtensilsCrossed, Activity, MapPinned, BadgePercent } from 'lucide-react'

const Features = () => {
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
    <section className='w-full px-4 py-10 sm:px-6 sm:py-14 md:py-20'>
      <div className='mx-auto max-w-[1200px]'>
        <h2 className='mb-2 text-center font-serif text-2xl font-bold tracking-tighter sm:mb-3 sm:text-4xl md:text-5xl'>
          Why Choose Our Services
        </h2>
        <p className='mx-auto mb-8 max-w-2xl text-center text-sm text-gray-500 sm:mb-10 sm:text-base'>
          We are a team of travel experts who are passionate about helping you explore the world.
        </p>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'>
          {featuresJson.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.name}
                className='overflow-hidden rounded-lg border bg-orange-100 p-5 text-center sm:p-6'
              >
                <div className='mb-3 flex justify-center sm:mb-4'>
                  <Icon className='h-10 w-10 text-orange-500 sm:h-12 sm:w-12' />
                </div>
                <h3 className='mb-2 text-base font-bold sm:text-lg'>{feature.name}</h3>
                <p className='text-xs text-gray-500 sm:text-sm'>{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
