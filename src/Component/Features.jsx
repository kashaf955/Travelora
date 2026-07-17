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
    <section className='w-full py-12 md:py-24 lg:py-20 px-6 md:px-0'>
      <div className='max-w-[1200px] mx-auto px-4 md:px-6'>
        <h1 className='text-3xl font-bold tracking-tighter text-center mb-3 sm:text-5xl font-serif'>Features</h1>
        <hr className='text-blue-500 w-[200px] bg-blue-500 mx-auto h-1 mb-10' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {featuresJson.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.name} className='overflow-hidden border bg-orange-100 rounded-lg p-6 text-center'>
                <div className='flex justify-center mb-4'>
                  <Icon className='w-12 h-12 text-orange-500' />
                </div>
                <h3 className='text-lg font-bold mb-2'>{feature.name}</h3>
                <p className='text-sm text-gray-500'>{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
