import Image from 'next/image'
import React from 'react'
import ImageCarousel from './ImageCarousel'
import Link from 'next/link'

function HeroHeader() {
  return (
    <section class='relative font-Libre'>
      <div class='absolute inset-0 bg-cover bg-center z-[-1]'>
        <div className='bg-black '>
          <ImageCarousel />
        </div>
      </div>
      <div class='container mx-auto px-4 py-8'>
        <h1 class='text-4xl md:text-6xl text-white font-bold mb-4'>
          Discover Extraordinary Flavors Near You
        </h1>
        <p class='text-lg md:text-2xl text-white mb-4'>
          Indulge in the Finest Truffles, A5 Wagyu, and More
        </p>
        <Link href='/map'>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Find Nearby Delacies
          </button>
        </Link>
      </div>
    </section>
  )
}

export default HeroHeader
