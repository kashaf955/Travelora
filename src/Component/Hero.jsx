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

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
      return (
        <div className="relative overflow-hidden">
        <Slider {...settings}>
          {slides.map((image, index) => (
            <div key={index}>
              <div
                className="relative h-screen w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute top-0 left-0 z-10 h-full w-full bg-black/60"></div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
          <div className="pointer-events-auto text-center mt-20 md:mt-32">
            <h1 className='mb-4 text-3xl font-bold text-white sm:text-5xl md:text-4xl'>Discover the Beauty of the World</h1>
            <p className='mb-4 text-white'>Explore breathtaking destinations, create unforgettable memories and embark on a journey of a lifetime.</p>
            <button className='rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600'>Explore Now</button>
          </div>

          <div className='pointer-events-auto mt-10 hidden w-[min(1050px,calc(100%-2rem))] rounded-md border border-gray-300 bg-white p-4 shadow-lg lg:block'>
            <div className='flex items-center gap-3'>
              <div className='grid min-w-0 flex-grow grid-cols-4 gap-5'>
                <div className='flex min-w-0 flex-col justify-center gap-2'>
                  <label htmlFor="" className='flex items-center gap-1 font-semibold'><Search className='h-4 w-4'/>Location</label>
                  <select name="" id="" className='w-full rounded-sm border border-gray-300 p-1'>
                    <option value="">Select Options</option>
                    <option value="">Bali</option>
                    <option value="">India</option>
                    <option value="">Tokyo</option>
                    <option value="">Venice</option>
                    <option value="">Paris</option>
                  </select>
                </div>
                <div className='flex min-w-0 flex-col justify-center gap-2'>
                  <label htmlFor="" className='font-semibold'>Check In</label>
                  <input type="date" className='w-full rounded-sm border border-gray-300 p-1'/>
                </div>
                <div className='flex min-w-0 flex-col justify-center gap-2'>
                  <label htmlFor="" className='font-semibold'>Check Out</label>
                  <input type="date" className='w-full rounded-sm border border-gray-300 p-1'/>
                </div>
                <div className='flex min-w-0 flex-col justify-center gap-2'>
                  <label htmlFor="" className='flex items-center gap-1 font-semibold'><Search className='h-4 w-4'/>Guest</label>
                  <select name="" id="" className='w-full rounded-sm border border-gray-300 p-1'>
                    <option value="">Select Options</option>
                    <option value="">2 Guest 1 Children</option>
                    <option value="">2 Guest 1 Children</option>
                    <option value="">2 Guest 1 Children</option>
                    <option value="">2 Guest 1 Children</option>
                    <option value="">2 Guest 1 Children</option>
                  </select>
                </div>
              </div>
              <div className='flex shrink-0 items-center'>
                <button className='h-8 rounded-md bg-orange-500 px-3 py-1 text-white transition-all ease-in hover:bg-black hover:text-white'>Book Now</button>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
};

export default Hero;
