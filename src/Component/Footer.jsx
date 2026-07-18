import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className='relative overflow-hidden bg-[#111111] text-white'>
      <div className='relative z-10 mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-12 md:py-16'>
        <div className='grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:gap-10 sm:text-left lg:grid-cols-4'>
          <div className='flex flex-col items-center sm:items-start sm:col-span-2 lg:col-span-1'>
            <img src={logo} alt='Travelora logo' className='mb-3 h-16 w-32 object-contain sm:h-20 sm:w-40' />
            <p className='max-w-sm text-sm leading-relaxed text-gray-300 sm:max-w-none'>
              We&apos;re dedicated to making your travel dreams come true with expertly curated tours and unforgettable experiences.
            </p>
          </div>

          <div>
            <h3 className='mb-4 text-base font-bold sm:text-lg'>Quick Links</h3>
            <ul className='flex flex-col gap-2 text-sm text-gray-300'>
              <li><Link to='/' className='transition-colors hover:text-orange-500'>Home</Link></li>
              <li><Link to='/about' className='transition-colors hover:text-orange-500'>About</Link></li>
              <li><Link to='/tours' className='transition-colors hover:text-orange-500'>Tours</Link></li>
              <li><Link to='/gallery' className='transition-colors hover:text-orange-500'>Gallery</Link></li>
              <li><Link to='/contact' className='transition-colors hover:text-orange-500'>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-base font-bold sm:text-lg'>Contact Us</h3>
            <ul className='flex flex-col gap-2 text-sm text-gray-300'>
              <li>123 Travel Street, City, Country</li>
              <li>
                <a href='tel:+1234567890' className='transition-colors hover:text-orange-500'>+1 234 567 890</a>
              </li>
              <li>
                <a href='mailto:info@travelora.com' className='break-all transition-colors hover:text-orange-500'>
                  info@travelora.com
                </a>
              </li>
            </ul>
          </div>

          <div className='sm:col-span-2 lg:col-span-1'>
            <h3 className='mb-4 text-base font-bold sm:text-lg'>Follow Us</h3>
            <div className='flex items-center justify-center gap-5 text-2xl sm:justify-start sm:gap-4 sm:text-xl'>
              <a href='#' aria-label='Facebook' className='transition-colors hover:text-orange-500'><FaFacebook /></a>
              <a href='#' aria-label='Instagram' className='transition-colors hover:text-orange-500'><FaInstagram /></a>
              <a href='#' aria-label='Twitter' className='transition-colors hover:text-orange-500'><FaTwitter /></a>
            </div>
          </div>
        </div>

        <div className='mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-400 sm:mt-12 sm:text-sm'>
          <p>&copy; {new Date().getFullYear()} Travelora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
