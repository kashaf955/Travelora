import React from 'react'
import phone from '../assets/phone.jpg'

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto px-4 md:px-6 py-12'>
      <div className='flex flex-col md:flex-row items-stretch gap-0 overflow-hidden rounded-lg border'>
        <div className='flex-1 max-h-[550px] md:min-h-0'>
          <img
            src={phone}
            alt='Contact'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex-1 flex items-center justify-center p-6 md:p-10 bg-white'>
          <div className='w-full max-w-md'>
            <h1 className='text-3xl font-bold tracking-tighter text-center mb-3 sm:text-5xl font-serif'>Get in Touch</h1>
            <hr className='text-blue-500 w-[200px] bg-blue-500 mx-auto h-1 mb-10' />
            <form action=''>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                <input type='text' id='name' className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                <input type='email' id='email' className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' />
              </div>
              <div className='mb-4'>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
                <textarea id='message' rows={4} className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' />
              </div>
              <button type='submit' className='w-full bg-orange-500 text-white px-4 py-2 rounded-md mt-4'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
