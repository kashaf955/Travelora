import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className='flex flex-row justify-between items-center p-2 w-[1200px] mx-auto z-50 bg-transparent sticky top-0'>
        <div>
            <img className='w-25 h-25' src={logo} alt="logo" />
        </div>
        <div>
            <nav>
            <ul className='flex flex-row justify-between items-center gap-10 text-lg'>
                <li className='text-black'>Home</li>
                <li className='text-black'>About</li>
                <li className='text-black'>packages</li>
                <li className='text-black'>Gallery</li>
                <li className='text-black'>Contact</li>
            </ul>
            </nav>
        </div>
        <div>
            <button className='bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600'>Book Now</button>
        </div>
    </header>
  )
};

export default Header