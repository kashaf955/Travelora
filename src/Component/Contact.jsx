import React from 'react'
import phone from '../assets/phone.jpg'

const Contact = () => {
  return (
    <div className='mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-10 md:py-12'>
      <div className='flex flex-col overflow-hidden rounded-lg border md:flex-row md:items-stretch'>
        <div className='h-48 w-full shrink-0 sm:h-64 md:h-auto md:min-h-[420px] md:max-h-[550px] md:w-1/2 md:flex-1'>
          <img
            src={phone}
            alt='Contact'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='flex flex-1 items-center justify-center bg-white p-5 sm:p-6 md:p-10'>
          <div className='w-full max-w-md'>
            <h2 className='mb-3 text-center font-serif text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Get in Touch
            </h2>
            <hr className='mx-auto mb-6 h-1 w-24 bg-blue-500 sm:mb-10 sm:w-[200px]' />
            <form action=''>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                <input
                  type='text'
                  id='name'
                  className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:py-2 sm:text-sm'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                <input
                  type='email'
                  id='email'
                  className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:py-2 sm:text-sm'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
                <textarea
                  id='message'
                  rows={4}
                  className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:py-2 sm:text-sm'
                />
              </div>
              <button
                type='submit'
                className='mt-2 w-full rounded-md bg-orange-500 px-4 py-3 text-sm text-white transition-colors hover:bg-orange-600 sm:mt-4 sm:py-2.5 sm:text-base'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
