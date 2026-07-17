import React from 'react'
import LightGallery from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import image1 from '../assets/hero1.jpg'
import image2 from '../assets/hero2.jpg'
import image3 from '../assets/hero3.jpg'
import image4 from '../assets/hero4.jpg'
import image5 from '../assets/hero5.jpg'
import image6 from '../assets/newyork.jpg'
import image7 from '../assets/sydney.jpg'
import image8 from '../assets/tokyo.jpg'
import image9 from '../assets/rome.jpg'

const galleryImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
]

const GalleryComp = () => {
  return (
    <section className='w-full py-12 md:py-24 lg:py-20 px-6 md:px-0'>
      <div className='max-w-[1200px] mx-auto px-4 md:px-6'>
        <h1 className='text-3xl font-bold tracking-tighter text-center mb-3 sm:text-5xl font-serif'>Gallery</h1>
        <hr className='text-blue-500 w-[200px] bg-blue-500 mx-auto h-1 mb-10' />
        <LightGallery
          speed={500}
          plugins={[lgZoom, lgThumbnail]}
          elementClassNames='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {galleryImages.map((image, index) => (
            <a
              key={index}
              href={image}
              className='overflow-hidden border bg-orange-100 rounded-lg text-center cursor-pointer'
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className='w-full h-60 object-cover hover:scale-110 transition-all duration-300'
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </section>
  )
}

export default GalleryComp
