import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import hero5 from '../assets/hero5.jpg'
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
        <Slider {...settings}>
          <div>
            <div className="h-screen w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${hero1})` }}>
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                <h1 className='text-3xl font-bold text-white mb-4 md:text-4xl sm:text-5xl'>Discover the Beauty of the World</h1>
                <p className='text-white mb-4'>Explore breathtaking destinations, create unforgettable memories and embark on a journey of a lifetime.</p>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600'>Explore Now</button>
            </div>          
            </div>
          </div>
          <div>
            <div className="h-screen w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${hero2})` }}>
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                <h1 className='text-3xl font-bold text-white mb-4 md:text-4xl sm:text-5xl'>Discover the Beauty of the World</h1>
                <p className='text-white mb-4'>Explore breathtaking destinations, create unforgettable memories and embark on a journey of a lifetime.</p>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600'>Explore Now</button>
            </div>          
            </div>
          </div>
          <div>
            <div className="h-screen w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${hero3})` }}>
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                <h1 className='text-3xl font-bold text-white mb-4 md:text-4xl sm:text-5xl'>Discover the Beauty of the World</h1>
                <p className='text-white mb-4'>Explore breathtaking destinations, create unforgettable memories and embark on a journey of a lifetime.</p>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600'>Explore Now</button>
            </div>          
            </div>
          </div>
          <div>
            <div className="h-screen w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${hero4})` }}>
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                <h1 className='text-3xl font-bold text-white mb-4 md:text-4xl sm:text-5xl'>Discover the Beauty of the World</h1>
                <p className='text-white mb-4'>Explore breathtaking destinations, create unforgettable memories and embark on a journey of a lifetime.</p>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600'>Explore Now</button>
            </div>          
            </div>
          </div>
          <div>
            <div className="h-screen w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${hero5})` }}>
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                <h1 className='text-3xl font-bold text-white mb-4 md:text-4xl sm:text-5xl'>Discover the Beauty of the World</h1>
                <p className='text-white mb-4'>Explore breathtaking destinations, create unforgettable memories and embark on a journey of a lifetime.</p>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600'>Explore Now</button>
            </div>          
            </div>
          </div>
        </Slider>
  );
};

export default Hero;