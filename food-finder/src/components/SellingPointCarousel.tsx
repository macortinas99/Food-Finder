"use client"

import React from "react"
import SwiperCore from "swiper"
import { Navigation, Pagination, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import SellingPointCard from "./SellingPointCard"

SwiperCore.use([Navigation, Scrollbar])
interface FeaturePoint {
  title: string
  description: string
}

const featurePoints: FeaturePoint[] = [
  {
    title: "Embark on a Gastronomic Journey",
    description:
      "Indulge in the rarest, most luxurious, and unique food items and consumables in your area.",
  },
  {
    title: "Savor Handpicked Delicacies",
    description:
      "Discover hidden culinary gems through our intuitive Mapbox-powered map.",
  },
  {
    title: "Experience Flavors Beyond Imagination",
    description:
      "Savor handpicked delicacies, an ode to culinary excellence. Experience flavors once reserved for the privileged few.",
  },
]

const SellingPointCarousel = () => {
  return (
    <div>
      <Swiper
        className="w-full"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {featurePoints.map((card, index) => (
          <SwiperSlide key={`card-${index}`}>
            <SellingPointCard
              title={card.title}
              description={card.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SellingPointCarousel
