import React from 'react'
import Bali from '../assets/bali.jpg'
import Paris from '../assets/paris.jpg'
import Tokyo from '../assets/tokyo.jpg'
import London from '../assets/london.jpg'
import NewYork from '../assets/newyork.jpg'
import Sydney from '../assets/sydney.jpg'
import Rome from '../assets/rome.jpg'
import Slider from 'react-slick'
import ChevronLeft from '../assets/chevron-left.webp'
import ChevronRight from '../assets/chevron-right.svg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Clock, DollarSign, Star } from 'lucide-react'
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={ChevronLeft} alt="arrow-left" {...props} />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={ChevronRight} alt="arrow-right" {...props} />
);

const FeatureDestination = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  const destinationJson = [
    {
      name: 'Bali',
      image: Bali,
      time: '5 Days 4 Nights',
      stars: '4.5(25 reviews)',
      price: '1000'
    },
    {
      name: 'Paris',
      image: Paris,
      time: '7 Days 6 Nights',
      stars: '4.5(25 reviews)',
      price: '1000'
    },
    {
      name: 'Tokyo',
      image: Tokyo,
      time: '6 Days 5 Nights',
      stars: '4.5(25 reviews)',
      price: '1000'
    },
    {
      name: 'London',
      image: London,
      time: '10 Days 9 Nights',
      stars: '4.5(25 reviews)',
      price: '1000'
    },
    {
      name: 'New York',
      image: NewYork,
      time: '7 Days 6 Nights',
      stars: '4.5(25 reviews)',
      price: '1000'
    },
    {
      name: 'Sydney',
      image: Sydney,
      time: '6 Days 5 Nights',
      stars: '4.5(25 reviews)',
      price: '1000'
    },
    {
      name: 'Rome',
      image: Rome,
      time: '7 Days 6 Nights',
      stars: '4.5(25 reviews)',
      price: '1000'
    },
  ]
  return (
    <>
    <section className='w-full py-12 md:py-24 lg:py-28 px-6 md:pc-0'>
    <div className='max-w-[1200px] mx-auto px-4 md:px-6'>
      <h1 className='text-3xl font-bold tracking-tighter text-center mb-3 sm:text-5xl font-serif'>Feature Destinations</h1>
      <hr className='text-blue-500 w-[200px] bg-blue-500 mx-auto h-1 mb-10' />
    <div className="slider-container">
      <Slider {...settings}>
        {destinationJson.map((destination) => (
          <div>
          <div key={destination.name} className='overflow-hidden border shadow-lg shadow-grey-500 rounded-lg m-4'>
            <div className='relative w-full h-60'>
              <img src={destination.image} alt={destination.name} width={600} height={400} className='w-full h-60 object-cover hover:scale-110 transition-all duration-300' />
            </div>
              <div className='p-4'>
                <p className='text-orange-500 flex items-center gap-1 text-sm mb-2 mt-2'><Clock width={15} height={15}/>{destination.time}</p>
                <h3 className='text-lg font-bold mb-2 font-serif'>{destination.name}</h3>
                <p className='flex items-center gap-1 text-sm mb-1'><Star width={15} height={15}fill='orange'/>{destination.stars}</p>
                <p className='text-sm text-gray-500 mb-4 mt-2'>Experience the best of {destination.name} with our expert guides and local insights.</p> 
                <div className='flex items-center gap-1 text-sm mb-1 mt-2'>
                  <button className=' bg-orange-500 text-white px-4 py-2 rounded-md text-sm text-gray-500 mb-2'>${destination.price} </button>
                  <button className='bg-orange-500 text-white px-4 py-2 rounded-md text-sm text-gray-500 mb-2'>View Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  </section>
</>
  );
}
export default FeatureDestination