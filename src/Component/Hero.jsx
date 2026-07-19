import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Search } from 'lucide-react'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import hero5 from '../assets/hero5.jpg'

const slides = [hero1, hero2, hero3, hero4, hero5]

const SearchFields = ({ stacked = false }) => (
  <div className={stacked
    ? 'grid grid-cols-2 gap-3'
    : 'grid min-w-0 flex-grow grid-cols-4 gap-5'
  }>
    <div className='flex min-w-0 flex-col justify-center gap-1.5 sm:gap-2'>
      <label className='flex items-center gap-1 text-sm font-semibold sm:text-base'>
        <Search className='h-4 w-4' />Location
      </label>
      <select className='w-full rounded-sm border border-gray-300 p-2 text-sm sm:p-1'>
        <option value="">Select Options</option>
        <option value="">Bali</option>
        <option value="">India</option>
        <option value="">Tokyo</option>
        <option value="">Venice</option>
        <option value="">Paris</option>
      </select>
    </div>
    <div className='flex min-w-0 flex-col justify-center gap-1.5 sm:gap-2'>
      <label className='text-sm font-semibold sm:text-base'>Check In</label>
      <input type="date" className='w-full rounded-sm border border-gray-300 p-2 text-sm sm:p-1' />
    </div>
    <div className='flex min-w-0 flex-col justify-center gap-1.5 sm:gap-2'>
      <label className='text-sm font-semibold sm:text-base'>Check Out</label>
      <input type="date" className='w-full rounded-sm border border-gray-300 p-2 text-sm sm:p-1' />
    </div>
    <div className='flex min-w-0 flex-col justify-center gap-1.5 sm:gap-2'>
      <label className='flex items-center gap-1 text-sm font-semibold sm:text-base'>
        <Search className='h-4 w-4' />Guest
      </label>
      <select className='w-full rounded-sm border border-gray-300 p-2 text-sm sm:p-1'>
        <option value="">Select Options</option>
        <option value="">2 Guest 1 Children</option>
        <option value="">2 Guest 1 Children</option>
        <option value="">2 Guest 1 Children</option>
        <option value="">2 Guest 1 Children</option>
        <option value="">2 Guest 1 Children</option>
      </select>
    </div>
  </div>
)

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((image, index) => (
          <div key={index}>
            <div
              className="relative h-[100svh] min-h-[620px] w-full bg-cover bg-center sm:min-h-[680px]"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute top-0 left-0 z-10 h-full w-full bg-black/60"></div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center-safe px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-36 md:pt-40">
        <div className="pointer-events-auto max-w-3xl text-center">
          <h1 className='mb-3 font-serif text-2xl font-extrabold leading-tight text-white sm:mb-4 sm:text-4xl md:text-5xl'>
            Discover the Beauty of the World
          </h1>
          <p className='mx-auto mb-5 max-w-xl text-sm leading-relaxed text-white/90 sm:mb-6 sm:text-base md:text-lg'>
            Explore breathtaking destinations, create unforgettable memories and embark on a journey of a lifetime.
          </p>
          <button className='rounded-md bg-orange-500 px-5 py-2.5 text-sm text-white transition-colors hover:bg-orange-600 sm:px-6 sm:py-3 sm:text-base'>
            Explore Now
          </button>
        </div>

        {/* Mobile / tablet search */}
        <div className='pointer-events-auto mt-6 w-full max-w-lg rounded-md border border-gray-200 bg-white p-3 shadow-lg sm:mt-8 sm:p-4 lg:hidden'>
          <SearchFields stacked />
          <button className='mt-3 w-full rounded-md bg-orange-500 px-4 py-2.5 text-sm text-white transition-all hover:bg-black sm:text-base'>
            Book Now
          </button>
        </div>

        {/* Desktop search */}
        <div className='pointer-events-auto mt-10 hidden w-[min(1050px,calc(100%-2rem))] rounded-md border border-gray-300 bg-white p-4 shadow-lg lg:block'>
          <div className='flex items-center gap-3'>
            <SearchFields />
            <div className='flex shrink-0 items-center'>
              <button className='h-8 rounded-md bg-orange-500 px-3 py-1 text-white transition-all ease-in hover:bg-black hover:text-white'>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
