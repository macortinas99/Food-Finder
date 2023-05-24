import Image from 'next/image'
import React from 'react'
import ImageCarousel from './ImageCarousel'
import { Roboto } from 'next/font/google'

const robot = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-robot',
})

function HeroHeader() {
  return (
    <section class='hero-banner relative --font-robot'>
      <div class='absolute inset-0 bg-cover bg-center z-[-1]'>
        <ImageCarousel />
      </div>
      <div class='container mx-auto px-4 py-8'>
        <h1 class='text-4xl md:text-6xl text-white font-bold mb-4'>
          Discover Extraordinary Flavors Near You
        </h1>
        <p class='text-lg md:text-2xl text-white mb-8'>
          Indulge in the Finest Truffles, A5 Wagyu, and More
        </p>
        <a href='#' class='btn btn-primary'>
          Find Nearby Delicacies
        </a>
      </div>
    </section>
  )
}

export default HeroHeader
