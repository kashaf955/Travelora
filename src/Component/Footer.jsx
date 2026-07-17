import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className='relative overflow-hidden bg-[#111111] text-white'>
      <div className='relative z-10 mx-auto max-w-[1200px] px-4 py-16 md:px-6'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4'>
          <div>
            <img src={logo} alt='logo' className='w-40 h-20' />
            <p className='text-sm leading-relaxed text-gray-300'>
              We&apos;re dedicated to making your travel dreams come true with expertly curated tours and unforgettable experiences.
            </p>
          </div>

          <div>
            <h3 className='mb-4 text-lg font-bold'>Quick Links</h3>
            <ul className='flex flex-col gap-2 text-sm text-gray-300'>
              <li><Link to='/' className='hover:text-orange-500 transition-colors'>Home</Link></li>
              <li><Link to='/tours' className='hover:text-orange-500 transition-colors'>Destinations</Link></li>
              <li><Link to='/tours' className='hover:text-orange-500 transition-colors'>Tours</Link></li>
              <li><Link to='/about' className='hover:text-orange-500 transition-colors'>About Us</Link></li>
              <li><Link to='/contact' className='hover:text-orange-500 transition-colors'>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-lg font-bold'>Contact Us</h3>
            <ul className='flex flex-col gap-2 text-sm text-gray-300'>
              <li>123 Travel Street, City, Country</li>
              <li>+1 234 567 890</li>
              <li>info@travelora.com</li>
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-lg font-bold'>Follow Us</h3>
            <div className='flex items-center gap-4 text-xl'>
              <a href='#' aria-label='Facebook' className='hover:text-orange-500 transition-colors'><FaFacebook /></a>
              <a href='#' aria-label='Instagram' className='hover:text-orange-500 transition-colors'><FaInstagram /></a>
              <a href='#' aria-label='Twitter' className='hover:text-orange-500 transition-colors'><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
