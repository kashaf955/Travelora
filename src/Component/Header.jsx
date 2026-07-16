import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/tours', label: 'Tours' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className='absolute top-0 left-0 z-50 w-full bg-transparent'>
      <div className='mx-auto flex max-w-[1200px] items-center justify-between px-4 py-2'>
        <Link to='/' onClick={closeMenu} className='shrink-0'>
          <img className='h-16 w-auto object-contain sm:h-28 md:h-32' src={logo} alt='Travelora logo' />
        </Link>

        <nav className='hidden items-center gap-10 md:flex'>
          <ul className='flex items-center gap-10 text-lg font-semibold'>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `transition-colors hover:text-orange-500 ${isActive ? 'text-orange-600' : 'text-white'}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className='hidden md:block'>
          <button className='rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600'>
            Book Now
          </button>
        </div>

        <button
          type='button'
          className='rounded-md p-2 text-white hover:bg-white/10 md:hidden'
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`absolute left-0 right-0 top-full z-50 overflow-hidden border-t border-black/10 bg-white shadow-md transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 border-t-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className='mx-auto max-w-[1200px] px-4 py-4 sm:px-6'>
          <ul className='flex flex-col gap-1 text-lg font-semibold'>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2.5 transition-colors hover:bg-orange-50 hover:text-orange-600 ${
                      isActive ? 'bg-orange-50 text-orange-500' : 'text-black'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className='mt-3 w-full rounded-md bg-orange-500 px-4 py-2.5 text-white hover:bg-orange-600'>
            Book Now
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
