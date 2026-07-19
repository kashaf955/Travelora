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
    <section className='w-full px-4 py-10 sm:px-6 sm:py-14 md:py-20'>
      <div className='mx-auto max-w-[1200px]'>
        <h2 className='mb-3 text-center font-serif text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
          Gallery
        </h2>
        <hr className='mx-auto mb-8 h-1 w-24 bg-blue-500 sm:mb-10 sm:w-[200px]' />
        <LightGallery
          speed={500}
          plugins={[lgZoom, lgThumbnail]}
          elementClassNames='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3'
        >
          {galleryImages.map((image, index) => (
            <a
              key={index}
              href={image}
              className='cursor-pointer overflow-hidden rounded-lg border bg-orange-100 text-center'
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className='h-48 w-full object-cover transition-all duration-300 hover:scale-110 sm:h-56 md:h-60'
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </section>
  )
}

export default GalleryComp
