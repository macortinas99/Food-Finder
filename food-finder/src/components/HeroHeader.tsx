import Image from "next/image"
import React from "react"
import ImageCarousel from "./ImageCarousel"
import Link from "next/link"
import { Button } from "./ui/button"

function HeroHeader() {
  return (
    <section className="relative font-Libre mb-12">
      <div className="absolute inset-0 bg-cover bg-center z-[-1]">
        <div className="bg-black ">
          <ImageCarousel />
        </div>
      </div>
      <div className="container flex flex-col justify-center items-center px-4 py-8 ">
        <div className="mb-12 w-[90%]">
          <h1 className="text-4xl md:text-6xl text-center text-white font-bold ">
            Discover
          </h1>
          <h1 className="text-4xl md:text-6xl text-center text-white font-bold ">
            Extraordinary
          </h1>
          <h1 className="text-4xl md:text-6xl text-center text-white font-bold ">
            Flavors
          </h1>
          <h1 className="text-4xl md:text-6xl text-center text-white font-bold ">
            Near
          </h1>
          <h1 className="text-4xl md:text-6xl text-center text-white font-bold ">
            You
          </h1>
        </div>
        <p className="text-lg md:text-2xl text-white mb-24">
          Indulge in the Finest Truffles, A5 Wagyu, and More
        </p>
        <Link href="/map">
          <Button variant="default" size="lg">
            Find Nearby Delicacies
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default HeroHeader
